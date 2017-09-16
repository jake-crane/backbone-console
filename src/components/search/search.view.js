import Backbone from 'backbone';

export default Backbone.View.extend({
	events: {
		'keyup': 'search',
	},
	search: function(e) {
		Backbone.trigger('search', e.target.value);
	}
});
