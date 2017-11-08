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
	urlRoot: './communications/clients/',
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
