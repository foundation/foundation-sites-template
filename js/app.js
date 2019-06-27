jQuery(document).ready(function () {
	$(document).foundation();
	$(document).on('click', '.dots', function(e) {
		e.preventDefault();
	});
	$(document).on('change', '.radio-accordion .radio-input', function(e) {
		let name = $(this).attr('name');
		$('.radio-accordion input[name="' + name + '"]').parents('.radio-accordion-item').find('.radio-accordion-content').slideUp(250);
		$(this).parents('.radio-accordion-item').find('.radio-accordion-content').slideDown(250);
	});

	$(document)
	.one('focus.auto-expand', 'textarea.auto-expand', function(){
		var savedValue = this.value;
		this.value = '';
		this.baseScrollHeight = this.scrollHeight;
		this.value = savedValue;
	})
	.on('input.auto-expand', 'textarea.auto-expand', function(){
		var minRows = this.getAttribute('data-min-rows')|0, rows;
		var lineHeight = parseInt($(this).css('line-height'), 10);
		this.rows = minRows;
		rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / lineHeight);
		this.rows = minRows + rows;
	});
});
