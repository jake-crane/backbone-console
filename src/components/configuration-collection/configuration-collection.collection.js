import 'string.prototype.includes';
import forEach from 'lodash/forEach';
import Backbone from 'backbone';
import $ from 'jquery';
import Configuration from '../configuration/configuration.model';

export default Backbone.Collection.extend({
	url: './configurations/', //used for fetch
	model: Configuration,
	initialize: function () {
		this.fetch({
			success: this.fetchSuccess
		});
		Backbone.on('search', this.filter, this);
	},
	fetchSuccess: function (model, response, options) {
		const csrf = options.xhr.getResponseHeader('CSRF_TOKEN');
		$.ajaxSetup({
			beforeSend: function (xhr) {
				xhr.setRequestHeader('CSRF_TOKEN', csrf);
			}
		});
	},
	parse: function (response) {
		return response.configuration;
	},
	stringContainsIgnoreCase: function (s1, s2) {
		// eslint-disable-next-line lodash/prefer-lodash-method
		return s1 && (s2 || s2 === '') && s1.toUpperCase().includes(s2.toUpperCase());
	},
	filter: function (s) {
		// eslint-disable-next-line backbone/no-collection-models
		forEach(this.models, config => {
			config.set({
				hidden: !(
					this.stringContainsIgnoreCase(config.attributes.name, s) ||
					this.stringContainsIgnoreCase(config.attributes.key, s) ||
					this.stringContainsIgnoreCase(config.attributes.value, s) ||
					this.stringContainsIgnoreCase(config.attributes.description, s) ||
					this.stringContainsIgnoreCase(config.attributes.type, s))
			}, {
				searching: true
			});
		});
		// eslint-disable-next-line backbone/no-collection-models
		this.trigger('filtercomplete');
	}
});
