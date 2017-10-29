import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			smtpHost: '',
			smtpPort: '',
			smtpUser: '',
			smtpPassword: ''
		};
	},
	initialize: function () {
		//TODO look into doing this using backbone
		fetch(this.urlRoot)
			.then(response => response.text())
			.then(xml => this._parseXML(xml))
			.then(delivery => this.set(delivery));
	},
	urlRoot: './communications/deliverychannels',
	_parseXML: function (xmlString) {
		const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
		const hostNode = xmlDoc.querySelector('smtpHostName');
		const portNode = xmlDoc.querySelector('smtpHostPort');
		const userNode = xmlDoc.querySelector('user');
		const passwordNode = xmlDoc.querySelector('password');
		return {
			smtpHost: hostNode && hostNode.textContent,
			smtpPort: portNode && portNode.textContent,
			smtpUser: userNode && userNode.textContent,
			smtpPassword: passwordNode && passwordNode.textContent
		};
	}
});
