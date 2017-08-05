window.app = window.app || {};

app.ConfigurationView = Backbone.View.extend({
  tagName: 'tr',
  className: 'configuration-view',
  template: _.template($('#configuration-template').html()),
  events: {
    'click .delete-btn': 'delete',
    'click .edit-btn': 'edit'
  },

  initialize: function () {
    this.listenTo(this.model, "change", this.render);
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