import widget from 'jquery-ui/ui/widget';
import FtpModel from './ftp.model';
import FtpView from './ftp.view';

export default widget('custom.ftp', {
	_create: function () {
		this._ftpModel = new FtpModel();
		this._ftpModel.on('change', this._onChange.bind(this));

		this._ftpView = new FtpView({
			el: this.element
		});
		this._ftpView.render();
	},
	_onChange: function (data) {
		this._ftpView.render(data.attributes);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
