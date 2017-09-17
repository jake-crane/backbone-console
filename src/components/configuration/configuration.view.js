import template from 'lodash/template';
import Backbone from 'backbone';
import configTemplate from './configuration.html';
import './configuration.css';

export default Backbone.View.extend({
	events: {
		'click .delete-btn': 'delete',
		'click .edit-btn': 'edit',
		'click .cancel-btn': 'cancel',
		'click .save-btn': 'save'
	},
	template: template(configTemplate),
	render: function (model) {
		this.$el.attr('id', model.id);
		this.$el.addClass('configuration-view');
		if (model.attributes.hidden)
			this.$el.hide();
		else
			this.$el.show();
		this.$el.html(this.template(model.attributes));
		return this;
	},
	edit: function () {
		this.$el.trigger('edit');
	},
	delete: function () {
		this.$el.trigger('delete');
	},
	cancel: function () {
		this.$el.trigger('cancel');
	},
	save: function () {
		const updatedConfig = {
			editMode: false,
			name: this.$el.find('.name').val(),
			key: this.$el.find('.key').val(),
			value: this.$el.find('.value').val(),
			description: this.$el.find('.description').val(),
			type: this.$el.find('.type').val(),
			id: this.id
		};
		this.$el.trigger('save', updatedConfig);
	}
});
