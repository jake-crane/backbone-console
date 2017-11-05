import CommunicationsBaseModel from '../CommunicationsBaseModel';

export default CommunicationsBaseModel.extend({
	defaults: function () {
		return {
			id: '',
			address: '',
			port: '',
			filePath: '',
			userId: '',
			password: ''
		};
	},
	urlRoot: './communications/aftsettings',
	parse: function (xmlDoc) {
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
	},
	toXML: function () {
		return `
			<aftSettings>
				<address>${this.get('address')}</address>
				<port>${this.get('port')}</port>
				<filePath>${this.get('filePath')}</filePath>
				<userId>${this.get('userId')}</userId>
				<password>${this.get('password')}</password>
			</aftSettings>
		`;
	}
});
