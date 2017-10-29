import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			address: '',
			port: '',
			filePath: '',
			userId: '',
			password: ''
		};
	},
	initialize: function () {
		//TODO look into doing this using backbone
		fetch(this.urlRoot)
			.then(response => response.text())
			.then(xml => this._parseXML(xml))
			.then(delivery => this.set(delivery));
	},
	urlRoot: './communications/aftsettings',
	_parseXML: function (xmlString) {
		const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
		const addressNode = xmlDoc.querySelector('address');
		const portNode = xmlDoc.querySelector('port');
		const filePathNode = xmlDoc.querySelector('filePath');
		const userIdNode = xmlDoc.querySelector('userId');
		const passwordNode = xmlDoc.querySelector('password');
		return {
			address: addressNode && addressNode.textContent,
			port: portNode && portNode.textContent,
			filePath: filePathNode && filePathNode.textContent,
			userId: userIdNode && userIdNode.textContent,
			password: passwordNode && passwordNode.textContent
		};
	}
});
