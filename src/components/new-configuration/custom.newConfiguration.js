import widget from 'jquery-ui/ui/widget';
import ConfigView from './new-configuration.view';
import './new-configuration.css';


export default widget('custom.newConfiguration', {
	options: {
		$configCollection: null
	},
	_create: function () {
		const newConfigView = new ConfigView({ el: this.element });
		newConfigView.render();
		this.element.on('create', this._createConfig.bind(this));
	},
	_createConfig: function (evt, newConfig) {
		this.options.$configCollection.configCollection('add', newConfig);
	}
});