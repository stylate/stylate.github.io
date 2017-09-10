$(document).ready(function() {
	$("#photo").justifiedGallery();
	$('#photo').justifiedGallery( {
		rowHeight: 340,
		maxRowHeight: false,
		lastRow: 'hide',
		margins: 3,
		border: 10,
		cssAnimation: true,
		imagesAnimationDuration: 500,
	});
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
		$(".wrapper").addClass('animated fadeOutRight');
		$("#particles-js").addClass('animated fadeOut');
		$(".wrapper").fadeOut("slow", redirect);
	});

	function redirect() {
		window.location = newLocation;
	}
});
