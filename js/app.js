/**
 * todo self host the fonts: https://google-webfonts-helper.herokuapp.com/
 */


!function( window, document, $ ){

	$(document).ready(function() {
		$('.tabs[data-transition]').map(function() {
			var el = $(`.tabs-content[data-tabs-content=${this.id}]`);
			el.attr('data-transition', true);
			el.find('.tabs-panel.is-active').show();
			el.find('.tabs-panel.is-active-tab').show();
		});
	});
	$(document).on('click', '.tabs[data-transition] .tabs-title a', function() {
		var tab_id = $(this).attr('href') ? $(this).attr('href') : ( $(this).attr('data-tabs-target') ? '#' + $(this).attr('data-tabs-target') : '' );
		var tabs_id = $(this).parents('.tabs').attr('id');
		var tabs_title = $(this).parents('.tabs-title');
		var tabs_content = $(`.tabs-content[data-tabs-content=${tabs_id}]`);
		if ( tabs_title.hasClass('is-active') || tabs_title.hasClass('is-active-tab') ) {
			tabs_content.find(`.tabs-panel:not(${tab_id})`).slideUp(250, 'swing');
			tabs_content.find(`.tabs-panel${tab_id}`).slideDown(250, 'swing');
		} else {
			tabs_content.find(`.tabs-panel${tab_id}`).slideUp(250, 'swing');
		}
	});


	$(document).ready(function() {
		update_accordion_collapse();
	});
	function update_accordion_collapse() {
		var accordion = $('.accordion[data-collapse]');
		var breakpoint = accordion.attr('data-collapse');
		var max = Foundation.MediaQuery.queries.findIndex(element => element.name == breakpoint) + 1;
		var max_breakpoint = Foundation.MediaQuery.queries[max].name;
		if ( Foundation.MediaQuery.upTo(max_breakpoint) && Foundation.MediaQuery.atLeast(breakpoint)) {
			// accordion.foundation('hideAll');
			accordion.find('.accordion-item').removeClass('is-active');
			accordion.find('.accordion-content').slideUp();

		} else {
			// ...
		}
	}

	//data-collapse
}( window, document, jQuery );


