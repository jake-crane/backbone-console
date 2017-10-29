import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			id: -1,
			name: '',
			thirdParty: false,
			billingId: ''
		};
	},
	initialize: function () {
		//TODO look into doing this using backbone
		fetch(this.urlRoot)
			.then(response => response.text())
			.then(xml => this._parseXML(xml))
			.then(delivery => this.set(delivery));
	},
	urlRoot: './communications/clients',
	_parseXML: function (xmlString) {
		const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
		const idNode = xmlDoc.querySelector('id');
		const nameNode = xmlDoc.querySelector('name');
		const thirdPartyNode = xmlDoc.querySelector('thirdParty');
		const billingIdNode = xmlDoc.querySelector('billingId');
		return {
			id: idNode && idNode.textContent,
			name: nameNode && nameNode.textContent,
			thirdParty: thirdPartyNode && thirdPartyNode.textContent,
			billingId: billingIdNode && billingIdNode.textContent,
		};
	}
});
