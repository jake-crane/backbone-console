import widget from 'jquery-ui/ui/widget';
import CommunicationsView from './communications.view';
import DeliveryModel from './delivery/delivery.model';

export default widget('custom.communications', {
	options: {
		title: null
	},
	_create: function () {
		this._communicationsView = new CommunicationsView({
			el: this.element,
			title: this.options.title
		});
		this._communicationsView.render();
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
