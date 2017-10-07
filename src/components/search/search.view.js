import Backbone from 'backbone';
import template from 'lodash/template';
import searchTemplate from './search.html';
import './search.css';

export default Backbone.View.extend({
	events: {
		'keyup': 'search',
	},

	template: template(searchTemplate),
	render: function () {
		this.$el.html(this.template());
		return this;
	},
	search: function (e) {
		Backbone.trigger('search', e.target.value);
	}
});
