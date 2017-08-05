window.app = window.app || {};

app.ConfigurationCollection = Backbone.Collection.extend({
  url: './configurations/', //used for fetch
  model: app.Configuration,
  initialize: function () {
    this.fetch({
      success: this.fetchSuccess
    });
  },
  fetchSuccess: function (model, response, options) {
    var csrf = options.xhr.getResponseHeader('CSRF_TOKEN');
    $.ajaxSetup({
      beforeSend: function (xhr) {
        xhr.setRequestHeader('CSRF_TOKEN', csrf);
      }
    });
  },
  parse: function (response, options) {
    return response.configuration;
  }
});