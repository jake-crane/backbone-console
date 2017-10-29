import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			id: -1,
			address: '',
			port: '',
			user: '',
			password: '',
			ftppath: ''
		};
	},
	initialize: function () {
		//TODO look into doing this using backbone
		fetch(this.urlRoot)
			.then(response => response.text())
			.then(xml => this._parseXML(xml))
			.then(delivery => this.set(delivery));
	},
	urlRoot: './communications/ftpsettings',
	_parseXML: function (xmlString) {
		const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
		const idNode = xmlDoc.querySelector('id');
		const addressNode = xmlDoc.querySelector('address');
		const portNode = xmlDoc.querySelector('port');
		const userNode = xmlDoc.querySelector('user');
		const passwordNode = xmlDoc.querySelector('password');
		const ftppathNode = xmlDoc.querySelector('ftppath');
		return {
			id: idNode && idNode.textContent,
			address: addressNode && addressNode.textContent,
			port: portNode && portNode.textContent,
			user: userNode && userNode.textContent,
			password: passwordNode && passwordNode.textContent,
			ftppath: ftppathNode && ftppathNode.textContent
		};
	}
});
