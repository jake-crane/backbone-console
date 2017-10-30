import Backbone from 'backbone';

/* eslint-disable backbone/model-defaults */
export default Backbone.Model.extend({
	initialize: function () {
		this.fetch();
	},
	fetch: function (options) {
		options = options || {};
		options.dataType = 'xml';
		return Backbone.Model.prototype.fetch.call(this, options);
	},
	sync: function (method, model, options) {
		if (method !== 'create' && method !== 'update')
			return Backbone.sync.apply(this, arguments);
		options = options || {};
		options.dataType = 'xml';
		options.contentType = 'application/xml';
		options.data = this.toXML();
		return Backbone.sync.call(this, method, model, options);
	}
});
