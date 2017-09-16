import $ from 'jquery';
import '../components/config-console/custom.configconsole';
import '../components/search/custom.search';

$('#configuration-collection-container').configConsole();
$('#search').search();

if (module.hot)
	module.hot.accept();
