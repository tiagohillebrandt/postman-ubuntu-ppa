var _ = require('lodash'),
    TYPE_COLLECTION = 'collection',
    TYPE_RESPONSE = 'response',
    TYPE_REQUEST = 'request',
    TYPE_FOLDER = 'folder';

/**
 *
 * @param {*} rootNode
 */
function _memoize (rootNode) {
  let foldersIteratable,
      requestsIteratable;

  foldersIteratable = _.reduce(rootNode.folders, function (acc, folder) {
    if (folder) {
      acc.push([folder.id, folder]);
    }

    return acc;
  }, []);


  requestsIteratable = _.reduce(rootNode.requests, function (acc, request) {
    if (request) {
      acc.push([request.id, request]);
    }

    return acc;
  }, []);

  return {
    folders: new Map(foldersIteratable),
    requests: new Map(requestsIteratable)
  };
}

/**
 *
 * @param {Object} node
 * @param {String} nodeType
 * @param {Object} dictionary
 * @param {Set} visitedNodes
 * @param {Function} iteratee
 */
function _walkCollectionTree (node, nodeType, dictionary, visitedNodes, preorderTraverse, iteratee) {
  // if node has been visited once
  // this is a circular reference bail out
  if (visitedNodes.has(node.id)) {
    console.warn('walkCollectionTree: Found a circular reference for node ' + node.id);
    return;
  }

  // mark node as visited
  visitedNodes.add(node.id);

  // process the node first, if the desired traversal is pre order
  if (preorderTraverse) {
    iteratee(node, { type: nodeType });
  }

  // walk the folders
  if (node.folders_order) {
    _.forEach(node.folders_order, function (folderId) {
      let folder = dictionary.folders.get(folderId);

      // a folder id was in the folders_order, but not available in the dictionary
      if (!folder) {
        console.warn('walkCollectionTree could not find the folder ' + folderId + ' in ', node);
        return;
      }

      _walkCollectionTree(folder, TYPE_FOLDER, dictionary, visitedNodes, preorderTraverse, iteratee);
    });
  }

  // walk the requests
  if (node.order) {
    _.forEach(node.order, function (requestId) {
      let request = dictionary.requests.get(requestId);

      // a request id was in the order, but not available in the dictionary
      if (!request) {
        console.warn('walkCollectionTree could not find the request ' + requestId + ' in ', node);
        return;
      }

      _walkCollectionTree(request, TYPE_REQUEST, dictionary, visitedNodes, preorderTraverse, iteratee);
    });
  }

  // walk the responses
  if (node.responses) {
    _.forEach(node.responses, function (response) {
      _walkCollectionTree(response, TYPE_RESPONSE, dictionary, visitedNodes, preorderTraverse, iteratee);
    });
  }

  // process the node last, if the desired traversal is post order
  if (!preorderTraverse) {
    iteratee(node, { type: nodeType });
  }
}

/**
 * Walks a collection tree and invokes the iteratee with each node.
 *
 * @param {Object} tree
 * @param {String} rootNodeType type of the root node
 * @param {Function} iteratee
 * @param {Object} [options]
 * @param {String} [options.traverseOrder] If 'post' tree will walk the collection in a post order traverse.
 */
function walkCollectionTree (tree, rootNodeType, iteratee, options) {
  if (!tree) {
    return;
  }

  if (!iteratee) {
    console.warn('Could not find iteratee for walk tree');
    return;
  }

  let dictionary = _memoize(tree),
      preorderTraverse = !(options && options.traverseOrder === 'post'),
      visitedNodes = new Set();

  _walkCollectionTree(tree, rootNodeType, dictionary, visitedNodes, preorderTraverse, iteratee);
}

/**
 * Returns an object representation of a parent for a collection model.
 *
 * e.g: {
 *  model: 'folder',
 *  modelId: '1234'
 * }
 *
 * @param {Object} model
 * @param {String} type
 *
 * @returns {Object}
 */
function getParent (model, type) {
  if (!model || !type) {
    return;
  }

  if (!(type === TYPE_FOLDER || type === TYPE_REQUEST || type === TYPE_RESPONSE)) {
    return;
  }

  if (type === TYPE_RESPONSE) {
    return { model: TYPE_REQUEST, modelId: model.request };
  }

  if (model.folder) {
    return { model: TYPE_FOLDER, modelId: model.folder };
  }
  else {
    return { model: TYPE_COLLECTION, modelId: model.collection };
  }
}

/**
 * filter disowned subtrees in populated collection
 * 
 * @param {Object} collection
 * 
* @returns {Object} filtered collection
 */
function filterDisownedCollectionSubTrees (collection) {
  let folderSubTrees = [],
      requestSubTrees = [];

  walkCollectionTree(collection, 'collection', function (node, { type }) {
    switch (type) {
      case 'folder':
        folderSubTrees.push(node);
        break;
      case 'request':
        requestSubTrees.push(node);
        break;
      default:
        break;
    }
  });

  return _.assign({}, collection, {
    folders: folderSubTrees,
    requests: requestSubTrees
  });
}

/**
 * Util function to fix oreder of folder/requests
 * @param {*} collection 
 */
function fixEntityOrdersInCollection (collection) {
  let allFolders = _.map(collection.folders, 'id'),
    allRequests = _.map(collection.requests, 'id'),
    sanitizedFolders = _.filter(collection.folders_order, (fId) => _.includes(allFolders, fId)),
    sanitizedRequests = _.filter(collection.order, (rId) => _.includes(allRequests, rId)),
    ownedFolders = sanitizedFolders,
    ownedRequests = sanitizedRequests;

  _.forEach(collection.folders, (folder) => {
    ownedFolders = _.union(ownedFolders, folder.folders_order);
    ownedRequests = _.union(ownedRequests, folder.order);
  });

  let disownedFolders = _.difference(allFolders, ownedFolders),
    disownedRequests = _.difference(allRequests, ownedRequests);

  collection.folders_order = _.compact(_.union(sanitizedFolders, disownedFolders));
  collection.order = _.compact(_.union(sanitizedRequests, disownedRequests));

  let validFolders = new Set(),
  validRequests = new Set();
  walkCollectionTree(collection, 'collection', (item, { type }) => {
    if (type === 'request' || type === 'response') {
      return;
    }
    item.folders_order = _.filter(item.folders_order, (fId) => _.includes(allFolders, fId) && !validFolders.has(fId));
    item.order = _.filter(item.order, (rId) => _.includes(allRequests, rId) && !validRequests.has(rId));
    _.forEach(item.folders_order, (fId) => {
      validFolders.add(fId);
    });
    _.forEach(item.order, (rId) => {
      validRequests.add(rId);
    });
  });
  return collection;
}

export { walkCollectionTree, getParent, filterDisownedCollectionSubTrees, fixEntityOrdersInCollection };
