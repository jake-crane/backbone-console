import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			device: '',
			imageUrl: '',
			xfRenderingServer: '',
			maxFileUploadSize: '',
			maxImageDpi: '',
			minImageDpi: '',
			maxImagePixels: '',
			minImagePixels: ''
		};
	},
	initialize: function () {
		this.fetch();
	},
	urlRoot: './communications/contentmanagement',
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
	parse: function (xmlDoc) {
		const deviceNode = xmlDoc.querySelector('device');
		const imageUrlNode = xmlDoc.querySelector('imageUrl');
		const xfRenderingServerNode = xmlDoc.querySelector('xfRenderingServer');
		const maxFileUploadSizeNode = xmlDoc.querySelector('maxFileUploadSize');
		const maxImageDpiNode = xmlDoc.querySelector('maxImageDpi');
		const minImageDpiNode = xmlDoc.querySelector('minImageDpi');
		const maxImagePixelsNode = xmlDoc.querySelector('maxImagePixels');
		const minImagePixelsNode = xmlDoc.querySelector('minImagePixels');
		return {
			device: deviceNode && deviceNode.textContent,
			imageUrl: imageUrlNode && imageUrlNode.textContent,
			xfRenderingServer: xfRenderingServerNode && xfRenderingServerNode.textContent,
			maxFileUploadSize: maxFileUploadSizeNode && maxFileUploadSizeNode.textContent,
			maxImageDpi: maxImageDpiNode && maxImageDpiNode.textContent,
			minImageDpi: minImageDpiNode && minImageDpiNode.textContent,
			maxImagePixels: maxImagePixelsNode && maxImagePixelsNode.textContent,
			minImagePixels: minImagePixelsNode && minImagePixelsNode.textContent
		};
	}
});
