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
			el: this.element
		});
		this._initEventHandlers();
	},

	_destroy: function () {
		this.element.empty();
	},

	_initEventHandlers: function () {
		this._configCollection.on('update', this._renderAll.bind(this)); //used to render after fetch
		this._configCollection.on('filterComplete', this._renderAll.bind(this)); //used to render after search
		this._configCollection.on('change', this._renderConfig.bind(this)); //used to render after enabling edit mode
	},

	_renderAll: function () {
		this._configCollectionView.render.call(this._configCollectionView, this._configCollection.models);
	},

	_renderConfig: function (config) {
		if (config)
			this._configCollectionView.reRenderOne.call(this._configCollectionView, config);
	},

	add: function (newConfig, addSuccess) {
		this._configCollection.create(newConfig, { wait: true, success: addSuccess });
	}
});