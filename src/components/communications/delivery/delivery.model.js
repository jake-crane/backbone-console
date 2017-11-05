import CommunicationsBaseModel from '../CommunicationsBaseModel';

export default CommunicationsBaseModel.extend({
	defaults: function () {
		return {
			id: '',
			smtpHost: '',
			smtpPort: '',
			smtpUser: '',
			smtpPassword: ''
		};
	},
	urlRoot: './communications/deliverychannels',
	parse: function (xmlDoc) {
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
	},
	toXML: function () {
		return `
			<deliveryChannelSettings>
				<smtpHostName>${this.get('smtpHost')}</smtpHostName>
				<smtpHostPort>${this.get('smtpPort')}</smtpHostPort>
				<user>${this.get('smtpUser')}</user>
				<password>${this.get('smtpPassword')}</password>
			</deliveryChannelSettings>
		`;
	}
});
