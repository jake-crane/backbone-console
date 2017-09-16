import forEach from 'lodash/forEach';
import template from 'lodash/template';
import Backbone from 'backbone';
import $ from 'jquery';
import ConfigurationView from '../configuration/configuration.view';
import newConfigTemplate from './new-configuration.html';
import './new-configuration.css';
import collectionTemplate from './configuration-collection.html';
import './configuration-collection.css';

export default Backbone.View.extend({
	events: {
		'click .add-btn': 'add'
	},
	template: template(collectionTemplate),
	add: function () {
		const newConfiguration = {
			key: this.$el.find('.key').val(),
			name: this.$el.find('.name').val(),
			value: this.$el.find('.value').val(),
			description: this.$el.find('.description').val(),
			type: this.$el.find('.type').val()
		};
		this.$el.trigger('add', newConfiguration);
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
		// eslint-disable-next-line backbone/no-view-collection-models
		forEach(this.collection.models, function (config) {
			const $config = new ConfigurationView({
				model: config
			}).render().$el;
			$tbody.append($config);
		});
		$tbody.append(newConfigTemplate);
		return this;
	}
});
