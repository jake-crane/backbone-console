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
		this.fetch();
	},
	urlRoot: './communications/systemsecurity',
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
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
	}
});
