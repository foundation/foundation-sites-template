jQuery(document).ready(function ($) {
	var $ = jQuery;
	$(document).foundation();
	$(document).on('click', '.dots', function(e) {
		e.preventDefault();
	});
	$(document).on('change', '.radio-accordion .radio-input', function(e) {
		let name = $(this).attr('name');
		$('.radio-accordion input[name="' + name + '"]').parents('.radio-accordion-item').find('.radio-accordion-content').slideUp(250);
		$(this).parents('.radio-accordion-item').find('.radio-accordion-content').slideDown(250);
	});
	$(document).one('focus.auto-expand', 'textarea.auto-expand', function(){
		var savedValue = this.value;
		this.value = '';
		this.baseScrollHeight = this.scrollHeight;
		this.value = savedValue;
	}).on('input.auto-expand', 'textarea.auto-expand', function(){
		var minRows = this.getAttribute('data-min-rows')|0, rows;
		var lineHeight = parseInt($(this).css('line-height'), 10);
		this.rows = minRows;
		rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / lineHeight);
		this.rows = minRows + rows;
	});
	$(document).on('mouseenter', '[data-touch-toggle]', function() {
		let target = $('#' + $(this).attr('data-touch-toggle'));
		target.addClass(target.attr('data-touch-toggler'));
	}).on('mouseleave', '[data-touch-toggle]', function(e) {
		let target = $('#' + $(this).attr('data-touch-toggle'));
		target.removeClass(target.attr('data-touch-toggler'));
	});
	$(document).on('click', '[data-stay-open-on-click-inside] .is-dropdown-submenu', function(e) {
		$(this).parents('.is-dropdown-submenu-parent').attr('data-is-click', true);
	});
});
