import template from 'lodash/template';
import Backbone from 'backbone';
import html from './template.html';

export default Backbone.View.extend({
	template: template(html),
	render: function (data) {
		this.$el.html(this.template(data));
		componentHandler.upgradeElements(this.el.getElementsByTagName('*'));
		return this;
	}
});
