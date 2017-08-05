window.app = window.app || {};

app.Configuration = Backbone.Model.extend({
  urlRoot: './configurations/', //used for save, destroy etc.
  defaults: function () {
    return {
      name: '',
      key: '',
      value: '',
      description: '',
      type: '',
      id: -1
    };
  }
});