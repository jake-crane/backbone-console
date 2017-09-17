import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults: function () {
		return {
			name: '',
			key: '',
			value: '',
			description: '',
			type: ''
		};
	},
	urlRoot: './configurations/', //used for save, destroy etc.
	toJSON: function () {
		return {
			name: this.get('name'),
			key: this.get('key'),
			value: this.get('value'),
			description: this.get('description'),
			type: this.get('type'),
			id: this.get('id')
		};
	}
});
