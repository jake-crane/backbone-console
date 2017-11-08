import template from 'lodash/template';
import Backbone from 'backbone';
import html from './communications.html';
import './communications.css';
import './delivery/custom.delivery';
import './security/custom.security';
import './client-collection/custom.clientCollection';
import './content/custom.content';
import './aft/custom.aft';
import './ftp/custom.ftp';


export default Backbone.View.extend({
	initialize: function (options) {
		this.title = options.title;
	},
	template: template(html),
	render: function (data) {
		this.$el.addClass('communications-view');
		this.$el.html(this.template(data));
		this.$el.find('#delivery-channels').delivery();
		this.$el.find('#security-settings').security();
		this.$el.find('#client-settings').clientCollection();
		this.$el.find('#content-management').content();
		this.$el.find('#aft-settings').aft();
		this.$el.find('#ftp-settings').ftp();
		const cards = this.el.querySelectorAll('.card');
		//eslint-disable-next-line lodash/prefer-lodash-method
		cards.forEach(function (card) {
			card.animate([
				{ transform: 'scale(0) translateY(-50%)' },
				{ transform: 'scale(1) translateY(0)' }
			],
			{duration: 2000, easing: 'cubic-bezier(0, 0, 0.58, 1)'});
		}, this);
		return this;
	}
});
