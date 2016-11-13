$(document).ready(function() {
	$("body").css("display", "none");
	$("body").fadeIn("slow");

	$("a").click(function(event) {
		event.preventDefault();
		newLocation = this.href;
		$("body").fadeOut("slow", redirect);
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