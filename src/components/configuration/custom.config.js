import widget from 'jquery-ui/ui/widget';
import ConfigurationView from '../configuration/configuration.view';

export default widget('custom.config', {
	options: {
		config: null
	},
	_configCollectionView: null,
	_create: function () {
		this._configCollectionView = new ConfigurationView({
			el: this.element,
			id: this.options.config.id,
			hidden: this.options.config.attributes.hidden
		});
		this._configCollectionView.render(this.options.config);
		this._initEventHandlers();
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	},
	_initEventHandlers: function () {
		this.element.on('edit', this._edit.bind(this));
		this.element.on('cancel', this._cancel.bind(this));
		this.element.on('delete', this._delete.bind(this));
		this.element.on('save', this._save.bind(this));
	},
	_edit: function () {
		this.options.config.set({
			editMode: true
		});
	},
	_cancel: function () {
		this.options.config.set({
			editMode: false
		});
	},
	_delete: function () {
		this.options.config.destroy();
	},
	_save: function (evt, updatedConfig) {
		this.options.config.save(updatedConfig);
	},
	update: function () {
		this._configCollectionView.render(this.options.config);
	}
});