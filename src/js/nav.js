import $ from 'jquery';

const $pages = $('.page');
const $comspage = $('.coms-page');
const $configpage = $('.application-page');
const $configLinks = $('.application-link');
const $comsLinks = $('.coms-link');

let applicationLoaded = false;
let comsLoaded = false;

function navigateToApplication() {
	if (!applicationLoaded) {
		const $configCollection = $('#configuration-collection-container').configCollection();
		$('#new-config').newConfiguration({
			$configCollection
		});
		applicationLoaded = true;
	}
	$comsLinks.parent().removeClass('selected');
	$configpage.removeClass('no-display');
	$configLinks.parent().addClass('selected');
}

function navigateToCommunications() {
	if (!comsLoaded) {
		$('#communications').communications();
		comsLoaded = true;
	}
	$comsLinks.parent().addClass('selected');
	$comspage.removeClass('no-display');
	$configLinks.parent().removeClass('selected');
}

$(window).on('hashchange', (e) => {
	$pages.addClass('no-display');

	switch (location.hash) {
	case '#application':
		navigateToApplication();
		break;
	case '#communications':
		navigateToCommunications();
		break;
	default:
		navigateToApplication();
		break;
	}
}).trigger('hashchange');
