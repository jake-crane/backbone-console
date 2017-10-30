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
			smtpHost: this.$el.find('#smtp-host-name').val(),
			smtpPort: this.$el.find('#smtp-port').val(),
			smtpUser: this.$el.find('#smtp-user').val(),
			smtpPassword: this.$el.find('#smtp-password').val()
		};
		this.$el.trigger('save', updatedData);
	}
});
