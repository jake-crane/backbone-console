import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			address: '',
			port: '',
			filePath: '',
			userId: '',
			password: ''
		};
	},
	initialize: function () {
		this.fetch();
	},
	urlRoot: './communications/aftsettings',
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
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
	}
});
