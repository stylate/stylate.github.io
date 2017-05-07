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

	$("img").hover(function() {

	});

	function redirect() {
		window.location = newLocation;
	}
});


/*
	notes for website:
	jQuery:
		hover effect for sidebar
		fade in/out for page EXCEPT sidebar
*/