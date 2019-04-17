jQuery(document).ready(function () {
	jQuery(document).foundation();

	$('.user input[type=checkbox]').on('change', function() {
		$(this).parents('.user').toggleClass('is-active');
	});
});
