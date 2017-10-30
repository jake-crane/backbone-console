import template from 'lodash/template';
import Backbone from 'backbone';
import html from './template.html';

export default Backbone.View.extend({
	events: {
		'click .coms-save-button': 'save'
	},
	template: template(html),
	render: function (data) {
		this.$el.html(this.template(data));
		componentHandler.upgradeElements(this.el.getElementsByTagName('*'));
		return this;
	},
	save: function () {
		const updatedData = {
			device: this.$el.find('#device').val(),
			imageUrl: this.$el.find('#image-url').val(),
			xfRenderingServer: this.$el.find('#xf-rendering-server').val(),
			maxFileUploadSize: this.$el.find('#max-file-upload-size').val()
			// maxImageDpi: this.$el.find('#').val(),
			// minImageDpi: this.$el.find('#').val(),
			// maxImagePixels: this.$el.find('#').val(),
			// minImagePixels: this.$el.find('#').val()
		};
		this.$el.trigger('save', updatedData);
	}
});
