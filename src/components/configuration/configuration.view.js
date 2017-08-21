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
	tagName: 'tr',
	className: 'configuration-view',
	template: template(configTemplate),
	attributes: function () {
		const attributes = {
			id: this.model.id
		};
		if (this.model.get('hidden'))
			attributes.hidden = '';
		return attributes;
	},
	render: function () {
		// eslint-disable-next-line backbone/no-view-model-attributes
		this.$el.html(this.template(this.model.attributes));
		return this;
	},
	edit: function () {
		this.model.set({
			editMode: true
		});
	},
	delete: function () {
		this.model.destroy();
	},
	cancel: function () {
		this.model.set({
			editMode: false
		});
	},
	save: function () {
		const updatedConfig = {
			editMode: false,
			name: this.$el.find('.name').val(),
			key: this.$el.find('.key').val(),
			value: this.$el.find('.value').val(),
			description: this.$el.find('.description').val(),
			type: this.$el.find('.type').val(),
			id: this.model.id
		};
		this.model.save(updatedConfig);
	}
});
