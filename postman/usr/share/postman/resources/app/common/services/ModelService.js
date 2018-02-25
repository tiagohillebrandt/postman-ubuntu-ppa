let createEvent = require('../model-event').createEvent;
let _ = require('lodash');

const EVENT_CREATE = 'create',
      EVENT_UPDATE = 'update',
      EVENT_DELETE = 'delete',
      EVENT_CLEAR = 'clear';

let ModelService = {
  /**
   * Resolves with the waterline Model for this service.
   *
   * @returns {Promise<WaterlineModel>}
   */
  getModel (modelName) {
    if (!modelName) {
      return Promise.reject(new Error('Could not get waterline model. Missing model name.'));
    }

    if (!global.pm || !global.pm.models) {
      return Promise.reject(new Error(`Could not get waterline model for ${modelName}. ORM not initialized.`));
    }

    let model = global.pm.models[modelName];

    if (!model) {
      return Promise.reject(new Error(`Could not get waterline model for ${modelName}. Model not defined.`));
    }

    return Promise.resolve(model);
  },


  /**
   * Returns the number of records matching the criteria.
   *
   * @param {String} modelName
   * @param {Object} criteria
   */
  count (modelName, criteria) {
    if (!criteria) {
      return Promise.reject(new Error('ModelService: Missing criteria'));
    }

    return this
      .getModel(modelName)
      .then((Model) => {
        return Model.count(criteria);
      });

  },

  /**
   * Fetches a list of entities with a given criteria.
   *
   * @param {String} modelName
   * @param {Object} criteria
   */
  find (modelName, criteria) {
    if (!criteria) {
      return Promise.reject(new Error('CModelService~find: Missing criteria'));
    }

    return this
      .getModel(modelName)
      .then(function (Model) {
        return Model.find(criteria);
      });
  },

  /**
   * Fetches an entity.
   *
   * @param {String} modelName
   * @param {Object} criteria
   */
  findOne (modelName, criteria) {
    if (!criteria) {
      return Promise.reject(new Error('ModelService~findOne: Missing criteria'));
    }

    return this
      .getModel(modelName)
      .then(function (Model) {
        return Model.findOne(criteria);
      });
  },

  /**
   * Performs a deep create with the given definition. Create also attaches the newly created item to a parent.
   *
   * @param {String} modelName
   * @param {Object} definition
   *
   * @returns {Promise}
   */
  create (modelName, definition) {
    if (!definition) {
      return Promise.reject(new Error('Missing definition for create'));
    }

    let createAction = createEvent(EVENT_CREATE, modelName, definition);

    return this.commitEvents([createAction]).then(([completedAction]) => { return completedAction; });
  },

  /**
   * Performs a shallow update on a Collection entity.
   *
   * @param {String} modelName
   * @param {Object} definition
   *
   * @returns {Promise}
   */
  update (modelName, definition) {
    let updateAction = createEvent(EVENT_UPDATE, modelName, definition);

    return this.commitEvents([updateAction]).then(([completedAction]) => { return completedAction; });
  },

  /**
   * Performs a shallow update on a Collection entity.
   *
   * @param {String} modelName
   * @param {Object} definition
   *
   * @returns {Promise}
   */
  delete (modelName, definition) {
    let deleteAction = createEvent(EVENT_DELETE, modelName, definition);

    return this.commitEvents([deleteAction]).then(([completedAction]) => { return completedAction; });
  },

  /**
   * Clears all items in the table for the given model.
   *
   * There's no going back, use this only when you know what you're doing.
   *
   * @param {String} modelName
   */
  clear (modelName) {
    let clearEvent = createEvent(EVENT_CLEAR, modelName);

    return this.commitEvents([clearEvent]).then(([completedAction]) => { return completedAction; });
  },

  /**
   * Persists a set of model events on DB.
   *
   * @param {ModelEvent.[]} events
   *
   * @returns {Promise}
   */
  commitEvents (events) {
    let eventExecutions = _.map(events, (event) => {
      let { namespace, name, data } = event;

      if (!name || !namespace) {
        return Promise.reject(new Error('Invalid event format'));
      }

      return this
        .getModel(namespace)
        .then((Model) => {
          // Delegate Instruction names to ORM Models.
          switch (name) {
            case 'create': {
              return Model
                .create(data)
                .meta({ fetch: true })
                .then((createdModel) => {
                  return createEvent('created', namespace, createdModel);
                });
            }

            case 'update': {
              let primaryKey = Model.primaryKey;

              return Model
                .update({ [primaryKey]: data[primaryKey] }, data)
                .fetch()
                .then(([updatedModel]) => {
                  // extract all updated keys other than primarykey
                  let updatedKeys = _.chain(data).omit([primaryKey]).keys().value();

                  // attach the updated keys to event meta, some consumers might be interested in what keys got updated
                  return createEvent('updated', namespace, updatedModel, null, { updatedKeys });
                });
            }

            case 'delete': {
              let primaryKey = Model.primaryKey;

              return Model
                .destroy({ [primaryKey]: data[primaryKey] })
                .meta({ fetch: true })
                .then((deletedModels) => {
                  return _.map(deletedModels, (deletedModel) => {
                    return createEvent('deleted', namespace, deletedModel);
                  });
                });
            }

            case 'clear': {
              return Model
                .destroy({})
                .then(() => {
                  return createEvent('cleared', namespace);
                });
            }

            default: {
              return Promise.reject(new Error(`Could not find a handler for the name ${name}`));
            }
          }
        });
    });

    return Promise
      .all(eventExecutions)
      .then((successEvents) => {
        return _.flatten(successEvents);
      });
  }
};

module.exports = ModelService;
