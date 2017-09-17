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
	render: function (models) {
		this.$el.html(this.template());
		const $tbody = this.$('tbody');
		forEach(models, function (config) {
			const $config = new ConfigurationView({
				model: config
			}).render().$el;
			$tbody.append($config);
		});
		$tbody.append(newConfigTemplate);
		return this;
	}
});
