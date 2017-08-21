import $ from 'jquery';

export default {
	init: function (configurationCollection) {
		$('#search').on('keyup', function (e) {
			configurationCollection.trigger('search', e.target.value);
		});
	}
};
