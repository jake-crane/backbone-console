window.app = window.app || {};

app.Configuration = Backbone.Model.extend({
  urlRoot: './configurations/', //used for save, destroy etc.
  defaults: function () {
    return {
      name: '',
      key: '',
      value: '',
      description: '',
      type: '',
      id: -1
    };
  },
  edit: function () {
    this.set('editMode', true);
  },
  cancelEdit: function () {
    this.set('editMode', false);
  },
  delete: function () {
    this.destroy();
  }
});