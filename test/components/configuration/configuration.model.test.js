var expect = require('chai').expect;
var Configuration = require('../../../src/components/configuration/configuration.model');

describe('Configuration model test', function () {
	it('should have the expected default attributes', function () {
		var config = new Configuration();
		var expectedDefaultAttributes = {
			name: '',
			key: '',
			value: '',
			description: '',
			type: ''
		};
		expect(config.attributes).to.deep.equal(expectedDefaultAttributes);
	});
	it('should ignore extra attributes', function () {
		var config = new Configuration({
			name: 'config name',
			key: 'config key',
			value: 'config value',
			description: 'config description',
			type: 'XML',
			editMode: true
		});
		var json = JSON.stringify(config);
		expect(json).to.equal('{"name":"config name","key":"config key","value":"config value","description":"config description","type":"XML"}');
	});
});
