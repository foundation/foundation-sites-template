jQuery(document).ready(function () {
	jQuery(document).foundation();

	jQuery(document).on('change', '.user input[type=checkbox]', function() {
		jQuery(this).parents('.user').toggleClass('is-active');
	});
});
