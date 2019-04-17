jQuery(document).ready(function () {
	jQuery(document).foundation();

	$(document).on('change', '.user input[type=checkbox]', function() {
		$(this).parents('.user').toggleClass('is-active');
	});
});
