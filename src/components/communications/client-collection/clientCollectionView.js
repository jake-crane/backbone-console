import template from 'lodash/template';
import Backbone from 'backbone';
import html from './template.html';
import ClientView from '../client/client.view';

export default Backbone.View.extend({
	template: template(html),
	render: function (models) {
		this.$el.html(this.template());
		const $form = this.$el.find('form');
		//componentHandler.upgradeElements(this.el.getElementsByTagName('*'));
		models.forEach( (client) => {
			const cv = new ClientView().render(client.attributes);
			$form.append(cv.$el);
		});

		return this;
	}
});
