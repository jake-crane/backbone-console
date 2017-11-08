import widget from 'jquery-ui/ui/widget';
import ClientCollection from './client.collection';
import ClientCollectionView from './clientCollectionView';

export default widget('custom.clientCollection', {
	_create: function () {
		this._clientCollection = new ClientCollection();
		this._clientCollectionView = new ClientCollectionView({
			el: this.element
		});
		this._initEventHandlers();
	},
	_initEventHandlers: function() {
		this._clientCollection.on('update', this._renderAll.bind(this)); //used to render after fetch
		this._clientCollection.on('change', this._renderAll.bind(this));
	},
	_renderAll: function () {
		this._clientCollectionView.render.call(this._clientCollectionView, this._clientCollection.models);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});

