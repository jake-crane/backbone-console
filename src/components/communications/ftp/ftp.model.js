import Backbone from 'backbone';

export default Backbone.Model.extend({
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
	initialize: function () {
		this.fetch();
	},
	urlRoot: './communications/ftpsettings',
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
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
	}
});
