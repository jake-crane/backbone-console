import widget from 'jquery-ui/ui/widget';
import ClientModel from './client.model';
import ClientView from './client.view';

export default widget('custom.client', {
	_create: function () {
		this._clientModel = new ClientModel();
		this._clientModel.on('change', this._onChange.bind(this));
		this.element.on('save', this._save.bind(this));

		this._clientView = new ClientView({
			el: this.element
		});
		this._clientView.render();
	},
	_onChange: function (data) {
		this._clientView.render(data.attributes);
	},
	_save: function (evt, updatedData) {
		this._clientModel.save(updatedData);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
