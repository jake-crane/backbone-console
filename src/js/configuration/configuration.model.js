window.app = window.app || {};

app.Configuration = Backbone.Model.extend({
  urlRoot: './configurations/', //used for save, destroy etc.
  defaults: function () {
    return {
      name: '',
      key: '',
      value: '',
      description: '',
      type: ''
    };
  },
  edit: function () {
    this.set({
      editMode: true
    });
  },
  cancelEdit: function () {
    this.set({
      editMode: false
    });
  },
  saveConfig: function (updatedConfiguration) {
    this.save(updatedConfiguration);
  },
  delete: function () {
    this.destroy();
  },
  toJSON: function () {
    return {
      name: this.attributes.name,
      key: this.attributes.key,
      value: this.attributes.value,
      description: this.attributes.description,
      type: this.attributes.type,
      id: this.attributes.id
    };
  }
});