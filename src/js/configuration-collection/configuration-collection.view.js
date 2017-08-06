window.app = window.app || {};

app.ConfigurationCollectionView = Backbone.View.extend({
  template: _.template($('#configuration-collection-template').html()),
  el: $('#configuration-collection-container'),

  initialize: function () {
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);
    this.model.on('change', this.render, this);
  },
  render: function () {
    this.$el.html(this.template());
    var self = this;
    _.each(this.model.models, function (configuration) {
      var view = configuration.attributes.editMode ? app.EditConfigurationView : app.ConfigurationView;
      var $config = new view({
        model: configuration
      }).render().$el;
      self.$el.find('tbody').append($config);
    });
    return this;
  }
});