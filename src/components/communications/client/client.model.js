import CommunicationsBaseModel from '../CommunicationsBaseModel';

export default CommunicationsBaseModel.extend({
	defaults: function () {
		return {
			id: '',
			name: '',
			thirdParty: false,
			billingId: ''
		};
	},
	urlRoot: './communications/clients',
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
	},
	toXML: function () {
		return `
			<clientDetail href="client/${this.get('id')}">
				<id>${this.get('id')}</id>
				<name>${this.get('name')}</name>
				<thirdParty>${this.get('thirdParty')}</thirdParty>
				<billingId>${this.get('billingId')}</billingId>
			</clientDetail>
		`;
	}
});
