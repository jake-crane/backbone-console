var expect = require('chai').expect;
var Configuration = require('../../../src/components/configuration/configuration.model');

describe('Configuration model test', function () {
	it('JSON.stringify should ignore extra attributes', function () {
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
