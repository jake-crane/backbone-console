import $ from 'jquery';

const $pages = $('.page');
const $comspage = $('.coms-page');

$('.coms-link').on('click', (e) => {
	$pages.hide();
	$comspage.show();
});
