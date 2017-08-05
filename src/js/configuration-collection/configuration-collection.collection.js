window.app = window.app || {};

app.ConfigurationCollection = Backbone.Collection.extend({
  url: './configurations/', //used for fetch
  model: app.Configuration,
  parse: function (response, options) {
    return response.configuration;
  }
});