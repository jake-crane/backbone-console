import forEach from 'lodash/forEach';
import template from 'lodash/template';
import Backbone from 'backbone';
import $ from 'jquery';
import '../configuration/custom.config';
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
		// There are better ways to do this transition. I was just experimenting with things.
		let time = 2000;
		forEach(models, (config) => {
			const $row = $(`<tr class="configuration-row" style="transition: transform ${time}ms;"></tr>`).config({ $tbody, config });
			$tbody.append($row);
			time += 400;
		});
		this.$el.html($template);
		setTimeout(() => {
			$tbody.find('.configuration-row').addClass('transform');
		}, 0);
		componentHandler.upgradeElements(this.el.getElementsByTagName("*"));
		return this;
	}
});
