import Backbone from 'backbone';
import widget from 'jquery-ui/ui/widget';
import ConfigurationCollection from '../components/configuration-collection/configuration-collection.collection';
import ConfigurationCollectionView from '../components/configuration-collection/configuration-collection.view';

widget('custom.configConsole', {
	options: {

	},
	_create: function () {
		new ConfigurationCollectionView({
			collection: new ConfigurationCollection(),
			el: this.element
		});
	},

	_destroy: function () {
		this.element.empty();
	},
});