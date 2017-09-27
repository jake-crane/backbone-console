import $ from 'jquery';
import '../components/configuration-collection/custom.configCollection';
import '../components/search/custom.search';

$('#configuration-collection-container').configCollection();
$('#search').search();

var dialog = document.querySelector('dialog');
$('#add-button').on('click', () => {
	dialog.showModal();
});
