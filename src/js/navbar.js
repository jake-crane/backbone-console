import $ from 'jquery';

const $layout = $('.layout');
$('.nav-toggle').on('click', (e) => {
	$layout.toggleClass('sidenav-open');
	$layout.toggleClass('sidenav-closed');
});
