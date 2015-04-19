$(function(){
	
	/////// Mobile Menu ///////
	$('a.menu-icon').click(function() {
		$('#menu-links').slideToggle();
	});

	/////// Fix Window Links on Window Re-size ///////

	$(window).resize(function() {
		if ($(window).width() > 700){
			$('#menu-links').removeAttr('style');
		};
	});

});