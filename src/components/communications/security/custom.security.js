import widget from 'jquery-ui/ui/widget';
import DeliveryModel from './security.model';
import SecurityView from './security.view';

export default widget('custom.security', {
	_create: function () {
		this._securityModel = new DeliveryModel();
		this._securityModel.on('change', this._onChange.bind(this));

		this._securityView = new SecurityView({
			el: this.element
		});
		this._securityView.render();
	},
	_onChange: function (data) {
		this._securityView.render(data.attributes);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
