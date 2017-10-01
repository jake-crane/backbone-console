import $ from 'jquery';
import '../components/configuration-collection/custom.configCollection';
import '../components/search/custom.search';

const $configCollection = $('#configuration-collection-container');
$configCollection.configCollection();
$('#search').search();


var $dialog = $('.new-config-dialog');
$('#add-button').on('click', () => {
	$dialog[0].showModal();
});

$dialog.find('.cancel').on('click', () => {
	$dialog[0].close();
});
$dialog.find('.create').on('click', () => {
	const newConfig = {
		key: $dialog.find('.key-input').val(),
		name: $dialog.find('.name-input').val(),
		value: $dialog.find('.value-input').val(),
		description: $dialog.find('.description-input').val(),
		type: $dialog.find('.type-input').val()
	};
	$configCollection.configCollection('add', newConfig, () => {
		$dialog[0].close();
		$dialog.find('.key-input').val('');
		$dialog.find('.name-input').val('');
		$dialog.find('.value-input').val('');
		$dialog.find('.description-input').val('');
		$dialog.find('.type-input').val('');
	});
});
