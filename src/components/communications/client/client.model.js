import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			id: '',
			name: '',
			thirdParty: false,
			billingId: ''
		};
	},
	initialize: function () {
		this.fetch();
	},
	urlRoot: './communications/clients',
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
	parse: function (xmlDoc) {
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
