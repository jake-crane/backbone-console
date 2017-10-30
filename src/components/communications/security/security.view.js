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
			authKey: this.$el.find('#authentication-key').val()
			// authFilterTolerance: this.$el.find('#ftp-address').val(),
			// authRedirectTolerance: this.$el.find('#ftp-address').val(),
			// authRequestTolerance: this.$el.find('#ftp-address').val(),
			// authServletTolerance: this.$el.find('#ftp-address').val()
		};
		this.$el.trigger('save', updatedData);
	}
});
