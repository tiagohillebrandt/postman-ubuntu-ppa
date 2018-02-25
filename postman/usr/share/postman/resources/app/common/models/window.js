module.exports = {
  identity: 'Window',
  tableName: 'window',
  datastore: 'persistent-nedb',
  primaryKey: 'id',
  attributes: {
    id: {
      type: 'string',
      required: true
    },
    browserWindowId: {
      type: 'number',
      meta: { index: true }
    },
    type: {
      type: 'string',
      required: true,
      meta: { index: true }
    },
    activeSession: {
      type: 'string',
      defaultsTo: ''
    },
    position: { type: 'json' },
    size: {
      type: 'json',
      defaultsTo: { width: 1280, height: 800 }
    },
    visibility: {
      type: 'json',
      defaultsTo: { maximized: false, isFullScreen: false }
    }
  }
};
