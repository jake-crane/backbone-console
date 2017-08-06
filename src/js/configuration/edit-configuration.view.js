window.app = window.app || {};

app.EditConfigurationView = Backbone.View.extend({
  tagName: 'tr',
  className: 'edit-configuration-view',
  template: _.template($('#edit-configuration-template').html()),
  events: {
    'change .key': 'changeKey',
    'click .cancel-btn': 'cancel',
    'click .save-btn': 'save'
  },

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  cancel: function (e) {
    this.model.cancelEdit();
  },
  save: function (e) {
    var updatedconfiguration = {
      editMode: false,
      name: this.$el.find('.name').val(),
      key: this.$el.find('.key').val(),
      value: this.$el.find('.value').val(),
      description: this.$el.find('.description').val(),
      type: this.$el.find('.type').val(),
      id: this.model.id
    };
    this.model.saveConfig(updatedconfiguration);
  }
});