jQuery(document).ready(function () {
	jQuery(document).foundation();
	jQuery(document).on('click', '.dots', function(e) {
		e.preventDefault();
	});
	jQuery(document).on('change', '.radio-accordion .radio-input', function(e) {
		let name = $(this).attr('name');
		$('.radio-accordion input[name="' + name + '"]').parents('.radio-accordion-item').find('.radio-accordion-content').slideUp(250);
		$(this).parents('.radio-accordion-item').find('.radio-accordion-content').slideDown(250);
	});
});
