let ModelService = require('../services/ModelService');

const WINDOW = 'window';

module.exports = {
  type: WINDOW,

  bootstrap (definition, options) {
    global.pm.window = { id: definition.id };
    return Promise.resolve([definition, options]);
  },

  get: function (criteria) {
    return ModelService.findOne(this.type, criteria);
  },

  getAll: function (criteria) {
    return ModelService.find(this.type, criteria);
  },

  create: function (definition, options) {
    return ModelService.create(this.type, definition);
  },

  count: function (definition) {
    return ModelService.count(this.type, definition);
  },

  update: function (definition) {
    return ModelService.update(this.type, definition);
  },

  delete: function (definition) {
    return ModelService.delete(this.type, definition);
  },

  getCurrentWindow () {
    if (!pm.window || !pm.window.id) {
      return Promise.resolve();
    }

    return this.get({ id: pm.window.id });
  }
};
