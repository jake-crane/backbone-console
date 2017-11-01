import $ from 'jquery';

const $pages = $('.page');
const $comspage = $('.coms-page');
const $configpage = $('.config-page');
const $configLinks = $('.config-link');
const $comsLinks = $('.coms-link');

let comsLoaded = false;

$configLinks.on('click', (e) => {
	$pages.addClass('no-display');
	$comsLinks.parent().removeClass('selected');
	$configpage.removeClass('no-display');
	$configLinks.parent().addClass('selected');
});

$comsLinks.on('click', (e) => {
	if (!comsLoaded) {
		$('#communications').communications();
		comsLoaded = true;
	}
	$pages.addClass('no-display');
	$configLinks.parent().removeClass('selected');
	$comspage.removeClass('no-display');
	$comsLinks.parent().addClass('selected');
});
