import forEach from 'lodash/forEach';
import template from 'lodash/template';
import Backbone from 'backbone';
import $ from 'jquery';
import '../configuration/custom.config';
import collectionTemplate from './configuration-collection.html';
import './configuration-collection.css';

export default Backbone.View.extend({
	template: template(collectionTemplate),
	reRenderOne: function (config) {
		const $config = this.$el.find(`#${config.id}`);
		$config.config('update');
		componentHandler.upgradeElements($config[0].getElementsByTagName('*'));
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
		componentHandler.upgradeElements(this.el.getElementsByTagName('*'));
		return this;
	}
});
