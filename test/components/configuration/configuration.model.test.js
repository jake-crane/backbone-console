import { expect } from 'chai';
import Configuration from '../../../src/components/configuration/configuration.model';

describe('Configuration model test', function () {
	it('should have the expected default attributes', function () {
		const config = new Configuration();
		const expectedDefaultAttributes = {
			name: '',
			key: '',
			value: '',
			description: '',
			type: ''
		};
		expect(config.attributes).to.deep.equal(expectedDefaultAttributes);
	});
	it('should ignore extra attributes', function () {
		const config = new Configuration({
			name: 'config name',
			key: 'config key',
			value: 'config value',
			description: 'config description',
			type: 'XML',
			editMode: true
		});
		const json = JSON.stringify(config);
		expect(json).to.equal('{"name":"config name","key":"config key","value":"config value","description":"config description","type":"XML"}');
	});
});
