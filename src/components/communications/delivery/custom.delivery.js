import widget from 'jquery-ui/ui/widget';
import DeliveryModel from './delivery.model';
import DeliveryView from './delivery.view';

export default widget('custom.delivery', {
	_create: function () {
		this._deliveryModel = new DeliveryModel();
		this._deliveryModel.on('change', this._onChange.bind(this));
		this.element.on('save', this._save.bind(this));

		this._deliverView = new DeliveryView({
			el: this.element
		});
		this._deliverView.render();
	},
	_onChange: function (data) {
		this._deliverView.render(data.attributes);
	},
	_save: function (evt, updatedData) {
		this._deliveryModel.save(updatedData);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
