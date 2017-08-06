window.app = window.app || {};

app.ConfigurationCollection = Backbone.Collection.extend({
  url: './configurations/', //used for fetch
  model: app.Configuration,
  initialize: function () {
    this.fetch({
      success: this.fetchSuccess
    });
    this.on('search', this.filter, this);
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
  },
  stringContainsIgnoreCase(s1, s2) {
    return s1 && (s2 || s2 === '') && s1.toUpperCase().indexOf(s2.toUpperCase()) > -1;
  },
  filter(s) {
    var self = this;
    _.each(this.models, function (config) {
      config.set({
        hidden: !(
          self.stringContainsIgnoreCase(config.attributes.name, s) ||
          self.stringContainsIgnoreCase(config.attributes.key, s) ||
          self.stringContainsIgnoreCase(config.attributes.value, s) ||
          self.stringContainsIgnoreCase(config.attributes.description, s) ||
          self.stringContainsIgnoreCase(config.attributes.type, s))
      });
    });
  }
});