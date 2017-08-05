window.app = window.app || {};

app.ConfigurationCollectionView = Backbone.View.extend({
  template: _.template($('#configuration-collection-template').html()),
  el: $('#configuration-collection-container'),

  initialize: function () {
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);
  },
  render: function () {
    this.$el.html(this.template(this.model.models));
    return this;
  }
});