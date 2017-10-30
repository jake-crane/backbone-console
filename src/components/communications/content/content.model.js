import CommunicationsBaseModel from '../CommunicationsBaseModel';

export default CommunicationsBaseModel.extend({
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
	urlRoot: './communications/contentmanagement',
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
	},
	toXML: function () {
		return `
			<contentManagementSettings>
				<device>${this.get('device')}</device>
				<imageUrl>${this.get('imageUrl')}</imageUrl>
				<xfRenderingServer>${this.get('xfRenderingServer')}</xfRenderingServer>
				<maxFileUploadSize>${this.get('maxFileUploadSize')}</maxFileUploadSize>
				<maxImageDpi>${this.get('maxImageDpi')}</maxImageDpi>
				<minImageDpi>${this.get('minImageDpi')}</minImageDpi>
				<maxImagePixels>${this.get('maxImagePixels')}</maxImagePixels>
				<minImagePixels>${this.get('minImagePixels')}</minImagePixels>
			</contentManagementSettings>
		`;
	}
});
