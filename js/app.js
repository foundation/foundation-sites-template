/**
 * todo self host the fonts: https://google-webfonts-helper.herokuapp.com/
 */
jQuery.getScript("https://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js", function () {
	WebFont.load({
		google: {
			families: ['PT+Sans:400,700', 'Roboto:400,700']
		}
	});
});
