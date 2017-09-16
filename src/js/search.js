import Backbone from 'backbone';
import $ from 'jquery';

export default {
	init: function () {
		$('#search').on('keyup', function (e) {
			Backbone.trigger('search', e.target.value);
		});
	}
};
