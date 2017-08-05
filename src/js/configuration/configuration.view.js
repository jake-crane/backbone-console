window.app = window.app || {};

app.ConfigurationView = Backbone.View.extend({
  tagName: 'tr',
  className: 'configuration-view',
  template: _.template($('#configuration-template').html()),

  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});