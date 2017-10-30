import $ from 'jquery';

const $pages = $('.page');
const $comspage = $('.coms-page');
const $configpage = $('.config-page');

let comsLoaded = false;

$('.config-link').on('click', (e) => {
	$pages.addClass('no-display');
	$configpage.removeClass('no-display');
});

$('.coms-link').on('click', (e) => {
	if (!comsLoaded) {
		$('#communications').communications();
		comsLoaded = true;
	}
	$pages.addClass('no-display');
	$comspage.removeClass('no-display');
});
