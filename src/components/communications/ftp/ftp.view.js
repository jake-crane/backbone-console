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
			address: this.$el.find('#ftp-address').val(),
			port: this.$el.find('#ftp-port').val(),
			user: this.$el.find('#ftp-user').val(),
			password: this.$el.find('#ftp-password').val(),
			ftppath: this.$el.find('#ftp-folder-path').val()
		};
		this.$el.trigger('save', updatedData);
	}
});
