import $ from 'jquery';
import '../components/configuration-collection/custom.configCollection';
import '../components/new-configuration/custom.newConfiguration';
import '../components/search/custom.search';

const $configCollection = $('#configuration-collection-container').configCollection();
$('#new-config').newConfiguration({ $configCollection });
$('#search').search();
