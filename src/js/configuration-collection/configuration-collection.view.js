window.app = window.app || {};

app.ConfigurationCollectionView = Backbone.View.extend({
  template: _.template($('#configuration-collection-template').html()),
  el: $('#configuration-collection-container'),

  initialize: function () {
    this.model.on('update', this.render, this); //used to render after fetch
    this.model.on('search', this.render, this); //used to render after search
    this.model.on('change', this.change, this); //used to render after enabling edit mode
  },
  change: function () {
    //We do not want to re-render all of the configurations each time one changes due to a search
    if (!this.model.searching)
      this.render();
  },
  render: function () {
    this.$el.html(this.template());
    var $tbody = this.$el.find('tbody');
    _.each(this.model.models, function (config) {
      var $config = new app.ConfigurationView({
        model: config
      }).render().$el;
      $tbody.append($config);
    });
    return this;
  }
});