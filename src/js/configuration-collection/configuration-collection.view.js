window.app = window.app || {};

app.ConfigurationCollectionView = Backbone.View.extend({
  template: _.template($('#configuration-collection-template').html()),
  el: $('#configuration-collection-container'),
  newConfigurationMarkup: $('#new-configuration-template').html(),
  events: {
    'click .add-btn': 'add'
  },
  initialize: function () {
    this.model.on('update', this.render, this); //used to render after fetch
    this.model.on('search', this.render, this); //used to render after search
    this.model.on('change', this.change, this); //used to render after enabling edit mode
  },
  add: function() {
    var newConfiguration = {
      key: this.$el.find('.key').val(),
      name: this.$el.find('.name').val(),
      value: this.$el.find('.value').val(),
      description: this.$el.find('.description').val(),
      type: this.$el.find('.type').val()
    };
    this.model.create(newConfiguration);
  },
  change: function (model, options) {
    //We do not want to re-render all of the configurations each time one changes due to a search
    if (!options.searching)
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
    $tbody.append(this.newConfigurationMarkup);
    return this;
  }
});