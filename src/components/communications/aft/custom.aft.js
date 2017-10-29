import widget from 'jquery-ui/ui/widget';
import AftModel from './aft.model';
import AftView from './aft.view';

export default widget('custom.aft', {
	_create: function () {
		this._aftModel = new AftModel();
		this._aftModel.on('change', this._onChange.bind(this));

		this._aftView = new AftView({
			el: this.element
		});
		this._aftView.render();
	},
	_onChange: function (data) {
		this._aftView.render(data.attributes);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
