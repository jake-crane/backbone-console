import template from 'lodash/template';
import Backbone from 'backbone';
import html from './template.html';

export default Backbone.View.extend({
	events: {
		'click .coms-save-button': 'save'
	},
	template: template(html),
	render: function (data) {
		this.$el.html(this.template(data));
		componentHandler.upgradeElements(this.el.getElementsByTagName('*'));
		return this;
	},
	save: function () {
		const updatedData = {
			address: this.$el.find('#aft-address').val(),
			port: this.$el.find('#aft-port').val(),
			filePath: this.$el.find('#aft-file-path').val(),
			userId: this.$el.find('#aft-user-id').val(),
			password: this.$el.find('#aft-password').val()
		};
		this.$el.trigger('save', updatedData);
	}
});
