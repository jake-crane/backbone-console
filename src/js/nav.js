import $ from 'jquery';

const $pages = $('.page');
const $comspage = $('.coms-page');
const $configpage = $('.config-page');

$('.config-link').on('click', (e) => {
	$pages.addClass('no-display');
	$configpage.removeClass('no-display');
});

$('.coms-link').on('click', (e) => {
	$pages.addClass('no-display');
	$comspage.removeClass('no-display');
});
