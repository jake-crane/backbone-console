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
			name: this.$el.find('#parent').val(),
			// thirdParty: this.$el.find('#').val(),
			// billingId: this.$el.find('#').val()
		};
		this.$el.trigger('save', updatedData);
	}
});
