import CommunicationsBaseModel from '../CommunicationsBaseModel';

export default CommunicationsBaseModel.extend({
	defaults: function () {
		return {
			authKey: '',
			authFilterTolerance: '',
			authRedirectTolerance: '',
			authRequestTolerance: '',
			authServletTolerance: ''
		};
	},
	urlRoot: './communications/systemsecurity',
	parse: function (xmlDoc) {
		const authKeyNode = xmlDoc.querySelector('authKey');
		const authFilterToleranceNode = xmlDoc.querySelector('authFilterTolerance');
		const authRedirectToleranceNode = xmlDoc.querySelector('authRequestTolerance');
		const authRequestToleranceNode = xmlDoc.querySelector('authRedirectTolerance');
		const authServletToleranceNode = xmlDoc.querySelector('authRequestTolerance');
		return {
			authKey: authKeyNode && authKeyNode.textContent,
			authFilterTolerance: authFilterToleranceNode && authFilterToleranceNode.textContent,
			authRedirectTolerance: authRedirectToleranceNode && authRedirectToleranceNode.textContent,
			authRequestTolerance: authRequestToleranceNode && authRequestToleranceNode.textContent,
			authServletTolerance: authServletToleranceNode && authServletToleranceNode.textContent
		};
	},
	toXML: function () {
		return `
			<systemSecuritySettings>
				<authKey>${this.get('authKey')}</authKey>
				<authFilterTolerance>${this.get('authFilterTolerance')}</authFilterTolerance>
				<authRedirectTolerance>${this.get('authRedirectTolerance')}</authRedirectTolerance>
				<authRequestTolerance>${this.get('authRequestTolerance')}</authRequestTolerance>
				<authServletTolerance>${this.get('authServletTolerance')}</authServletTolerance>
			</systemSecuritySettings>
		`;
	}
});
