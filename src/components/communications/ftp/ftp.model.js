import CommunicationsBaseModel from '../CommunicationsBaseModel';

export default CommunicationsBaseModel.extend({
	defaults: function () {
		return {
			id: '',
			address: '',
			port: '',
			user: '',
			password: '',
			ftppath: ''
		};
	},
	urlRoot: './communications/ftpsettings',
	parse: function (xmlDoc) {
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
	},
	toXML: function () {
		return `
			<ftpSettings>
				<id>${this.get('id')}</id>
				<address>${this.get('address')}</address>
				<port>${this.get('port')}</port>
				<user>${this.get('user')}</user>
				<password>${this.get('password')}</password>
				<ftppath>${this.get('ftppath')}</ftppath>
			</ftpSettings>
		`;
	},
	//eslint-disable-next-line lodash/prefer-constant
	isNew: function() {
		return true;
	}
});
