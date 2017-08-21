import forEach from 'lodash/forEach';
import template from 'lodash/template';
import Backbone from 'backbone';
import $ from 'jquery';
import ConfigurationView from '../configuration/configuration.view';

export default Backbone.View.extend({
	events: {
		'click .add-btn': 'add'
	},
	initialize: function () {
		this.listenTo(this.collection, 'update', this.render); //used to render after fetch
		this.listenTo(this.collection, 'search', this.render); //used to render after search
		this.listenTo(this.collection, 'change', this.change); //used to render after enabling edit mode
	},
	template: template($('#configuration-collection-template').html()),
	el: $('#configuration-collection-container'),
	newConfigurationMarkup: $('#new-configuration-template').html(),
	add: function () {
		const newConfiguration = {
			key: this.$el.find('.key').val(),
			name: this.$el.find('.name').val(),
			value: this.$el.find('.value').val(),
			description: this.$el.find('.description').val(),
			type: this.$el.find('.type').val()
		};
		this.collection.create(newConfiguration);
	},
	change: function (model, options) {
		// We do not want to re-render the entire collection
		// each time one changes due to a search
		if (!options.searching)
			this.render();
	},
	render: function () {
		this.$el.html(this.template());
		const $tbody = this.$('tbody');
		forEach(this.collection.models, function (config) {
			const $config = new ConfigurationView({
				model: config
			}).render().$el;
			$tbody.append($config);
		});
		$tbody.append(this.newConfigurationMarkup);
		return this;
	}
});
