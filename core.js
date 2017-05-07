$(document).ready(function() {
	// fade in
	/*$("body").css("display", "none");
	$("body").fadeIn("slow");
	*/

	// fade out
	$("a").click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$("p").fadeOut("slow", redirect);
	});

	function redirect() {
		window.location = newLocation;
	}
});


/*
flickr api -> jquery this shit (PHOTO)
*/


/*
	notes for website:
	jQuery:
		hover effect for sidebar
		fade in/out for page EXCEPT sidebar
*/