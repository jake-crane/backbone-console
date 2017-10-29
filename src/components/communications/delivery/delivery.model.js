import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			smtpHost: '',
			smtpPort: '',
			smtpUser: '',
			smtpPassword: ''
		};
	},
	initialize: function () {
		this.fetch();
	},
	urlRoot: './communications/deliverychannels',
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
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
	}
});
