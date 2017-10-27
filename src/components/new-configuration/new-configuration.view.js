import template from 'lodash/template';
import Backbone from 'backbone';
import newConfigTemplate from './new-configuration.html';
import './new-configuration.css';

export default Backbone.View.extend({
	events: {
		'click .add-btn': 'add',
		'click .cancel': 'cancel',
		'click .create': 'create'
	},
	template: template(newConfigTemplate),
	$dialog: null,
	render: function () {
		this.$el.html(this.template());
		this.$dialog = this.$el.find('.new-config-dialog');
		componentHandler.upgradeElements(this.$dialog[0].getElementsByTagName('*'));
		return this;
	},
	add: function () {
		this.$dialog[0].showModal();
	},
	cancel: function () {
		this._closeDialog();
	},
	_closeDialog: function () {
		//this.$dialog[0].close();
		this.render();
	},
	create: function () {
		const newConfig = {
			key: this.$dialog.find('.key-input').val(),
			name: this.$dialog.find('.name-input').val(),
			value: this.$dialog.find('.value-input').val(),
			description: this.$dialog.find('.description-input').val(),
			type: this.$dialog.find('.type-input').val()
		};
		this.$el.trigger('create', newConfig);
		this._closeDialog();
	}
});
