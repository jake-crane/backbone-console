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
    'click .edit-btn': 'edit'
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  edit: function (e) {
    this.model.edit();
  },
  delete: function (e) {
    this.model.delete();
  }
});