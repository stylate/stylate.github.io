$(document).ready(function() {
	// fade out
	$("a").click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$('#sidebar').animate({
		    	opacity: 'hide', // animate fadeOut
		    	width: 'hide'  // animate slideUp
			}, 'slow', 'linear', function() {
		    	$(this).remove();
	    	});
		$(".wrapper").fadeOut("slow", redirect);
	});

	function redirect() {
		window.location = newLocation;
	}
});


/*
flickr api -> jquery this shit (PHOTO)
*/