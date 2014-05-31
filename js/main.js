(function($) {
	$(document).ready(function() {
		var message = "No peeking";
		$(document).mousedown(function(event) {
			switch (event.which) {
				case 1:
					break;
				case 2:
					alert(message);
					break;
				case 3:
					alert(message);
					break;
				default:
					alert(message);
			}
		});
	});
})(jQuery);