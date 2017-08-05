window.app = window.app || {};

app.Configuration = Backbone.Model.extend({
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