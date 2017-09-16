import $ from 'jquery';
import '../js/custom.configconsole';
import search from './search';

$('#configuration-collection-container').configConsole();
search.init();

if (module.hot)
	module.hot.accept();
