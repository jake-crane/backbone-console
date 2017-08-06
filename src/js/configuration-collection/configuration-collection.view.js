window.app = window.app || {};

app.ConfigurationCollectionView = Backbone.View.extend({
  template: _.template($('#configuration-collection-template').html()),
  el: $('#configuration-collection-container'),

  initialize: function () {
    this.model.on('update', this.render, this); //used to render after fetch
    this.model.on('search', this.render, this); //used to render after search
    this.model.on('change', this.render, this); //used to render after enabling edit mode
  },
  render: function () {
    this.$el.html(this.template());
    var self = this;
    _.each(this.model.models, function (config) {
      if (!config.attributes.hidden) {
        var view = config.attributes.editMode ? app.EditConfigurationView : app.ConfigurationView;
        var $config = new view({
          model: config
        }).render().$el;
        self.$el.find('tbody').append($config);
      }
    });
    return this;
  }
});