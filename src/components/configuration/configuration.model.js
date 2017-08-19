var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: './configurations/', //used for save, destroy etc.
  defaults: function () {
    return {
      name: '',
      key: '',
      value: '',
      description: '',
      type: ''
    };
  },
  toJSON: function () {
    return {
      name: this.attributes.name,
      key: this.attributes.key,
      value: this.attributes.value,
      description: this.attributes.description,
      type: this.attributes.type,
      id: this.attributes.id
    };
  }
});