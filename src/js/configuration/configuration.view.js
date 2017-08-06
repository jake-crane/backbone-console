window.app = window.app || {};

app.ConfigurationView = Backbone.View.extend({
  tagName: 'tr',
  className: 'configuration-view',
  template: _.template($('#configuration-template').html()),
  attributes: function () {
    var attributes = {};
    if (this.model.attributes.hidden)
      attributes.hidden = '';
    return attributes;
  },
  events: {
    'click .delete-btn': 'delete',
    'click .edit-btn': 'edit',
    'click .cancel-btn': 'cancel',
    'click .save-btn': 'save'
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  edit: function (e) {
    this.model.edit();
  },
  delete: function (e) {
    this.model.delete();
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