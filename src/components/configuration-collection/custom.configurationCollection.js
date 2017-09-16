import widget from 'jquery-ui/ui/widget';
import ConfigurationCollection from '../configuration-collection/configuration-collection.collection';
import ConfigurationCollectionView from '../configuration-collection/configuration-collection.view';

export default widget('custom.configCollection', {
	options: {

	},
	_configCollection: null,
	_configCollectionView: null,

	_create: function () {
		this._configCollection = new ConfigurationCollection();
		this._configCollectionView = new ConfigurationCollectionView({
			collection: this._configCollection,
			el: this.element
		});
		this._initEventHandlers();
	},

	_destroy: function () {
		this.element.empty();
	},

	_initEventHandlers: function () {
		this.element.on('add', this.add.bind(this));
		this._configCollection.on('update', this._configCollectionView.render.bind(this._configCollectionView)); //used to render after fetch
		this._configCollection.on('filterComplete', this._configCollectionView.render.bind(this._configCollectionView)); //used to render after search
		this._configCollection.on('change', this._configCollectionView.change.bind(this._configCollectionView)); //used to render after enabling edit mode
	},

	add: function (evt, newConfig) {
		this._configCollection.create(newConfig);
	}
});