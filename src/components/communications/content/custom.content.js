import widget from 'jquery-ui/ui/widget';
import ContentModel from './content.model';
import ContentView from './content.view';

export default widget('custom.content', {
	_create: function () {
		this._contentModel = new ContentModel();
		this._contentModel.on('change', this._onChange.bind(this));
		this.element.on('save', this._save.bind(this));

		this._contentView = new ContentView({
			el: this.element
		});
		this._contentView.render();
	},
	_onChange: function (data) {
		this._contentView.render(data.attributes);
	},
	_save: function (evt, updatedData) {
		this._contentModel.save(updatedData);
	},
	_destroy: function () {
		this.element.off();
		this.element.empty();
	}
});
