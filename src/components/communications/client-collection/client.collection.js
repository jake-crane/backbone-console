import Backbone from 'backbone';
import $ from 'jquery';
import Client from '../client/client.model';

export default Backbone.Collection.extend({
	url: './communications/clients/',
	model: Client,
	initialize: function () {
		this.fetch({
			success: this.fetchSuccess
		});
	},
	fetchSuccess: function (model, response, options) {
		const csrf = options.xhr.getResponseHeader('CSRF_TOKEN');
		$.ajaxSetup({
			beforeSend: function (xhr) {
				xhr.setRequestHeader('CSRF_TOKEN', csrf);
			}
		});
	},
	parse: function (xmlDoc) {
		const clientDetailNodes = xmlDoc.querySelectorAll('clientDetail');
		const clientDetails = [];
		clientDetailNodes.forEach(function (clientNode) {
			const idNode = clientNode.querySelector('id');
			const nameNode = clientNode.querySelector('name');
			const thirdPartyNode = clientNode.querySelector('thirdParty');
			const billingIdNode = clientNode.querySelector('billingId');
			clientDetails.push({
				id: idNode && idNode.textContent,
				name: nameNode && nameNode.textContent,
				thirdParty: thirdPartyNode && thirdPartyNode.textContent,
				billingId: billingIdNode && billingIdNode.textContent,
			});
		}, this);
		return clientDetails;
	},
	sync: function (method, model, options) {
		options = options || {};
		options.dataType = 'xml';
		options.contentType = 'application/xml';
		if (method !== 'create' && method !== 'update')
			return Backbone.sync.apply(this, arguments);
		options.data = this.toXML();
		return Backbone.sync.call(this, method, model, options);
	}
});
