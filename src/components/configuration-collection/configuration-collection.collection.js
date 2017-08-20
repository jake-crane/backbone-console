var forEach = require('lodash').forEach;
var Backbone = require('backbone');
var $ = require('jquery');
var Configuration = require('../configuration/configuration.model');

module.exports = Backbone.Collection.extend({
	url: './configurations/', //used for fetch
	model: Configuration,
	initialize: function () {
		this.fetch({
			success: this.fetchSuccess
		});
		this.on('search', this.filter, this);
	},
	fetchSuccess: function (model, response, options) {
		var csrf = options.xhr.getResponseHeader('CSRF_TOKEN');
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
		return s1 && (s2 || s2 === '') && s1.toUpperCase().indexOf(s2.toUpperCase()) > -1;
	},
	filter: function (s) {
		var self = this;
		forEach(this.models, function (config) {
			config.set({
				hidden: !(
					self.stringContainsIgnoreCase(config.attributes.name, s) ||
					self.stringContainsIgnoreCase(config.attributes.key, s) ||
					self.stringContainsIgnoreCase(config.attributes.value, s) ||
					self.stringContainsIgnoreCase(config.attributes.description, s) ||
					self.stringContainsIgnoreCase(config.attributes.type, s))
			}, {
				searching: true
			});
		});
	}
});
