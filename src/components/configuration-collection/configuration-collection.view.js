import forEach from 'lodash/forEach';
import template from 'lodash/template';
import Backbone from 'backbone';
import $ from 'jquery';
import '../configuration/custom.config';
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
		const $template = $(this.template());
		const $tbody = $template.find('tbody');
		forEach(models, function (config) {
			const $row = $('<tr></tr>').config({ $tbody, config });
			$tbody.append($row);
		});
		$tbody.append(newConfigTemplate);
		this.$el.html($template);
		componentHandler.upgradeElements(this.el.getElementsByTagName("*"));
		return this;
	}
});
