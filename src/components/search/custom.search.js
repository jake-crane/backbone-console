import widget from 'jquery-ui/ui/widget';
import SearchView from './search.view';

export default widget('custom.search', {
	options: {
	},
	_searchView: null,
	_create: function () {
		this._searchView = new SearchView({
			el: this.element
		});
	},
});