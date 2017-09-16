import widget from 'jquery-ui/ui/widget';
import ConfigurationCollection from '../configuration-collection/configuration-collection.collection';
import ConfigurationCollectionView from '../configuration-collection/configuration-collection.view';

export default widget('custom.configConsole', {
	options: {

	},
	_configCollection: null,
	
	_create: function () {
		this._configCollection = new ConfigurationCollection();
		new ConfigurationCollectionView({
			collection: this._configCollection,
			el: this.element
		});
	},

	_destroy: function () {
		this.element.empty();
	},
});