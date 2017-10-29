import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			authKey: '',
			authFilterTolerance: '',
			authRedirectTolerance: '',
			authRequestTolerance: '',
			authServletTolerance: ''
		};
	},
	initialize: function () {
		//TODO look into doing this using backbone
		fetch(this.urlRoot)
			.then(response => response.text())
			.then(xml => this._parseXML(xml))
			.then(delivery => this.set(delivery));
	},
	urlRoot: './communications/systemsecurity',
	_parseXML: function (xmlString) {
		const xmlDoc = new DOMParser().parseFromString(xmlString, 'text/xml');
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
	}
});
