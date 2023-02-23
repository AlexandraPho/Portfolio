// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

// Click Zoom
$(document).ready(
	function(){
		$('.overlay-infos .overlay-item-zoom').click(
			function( event ){
				var scale = 150/100;
				var pos = $(this).offset();
				var clickX = event.pageX - pos.left;
				var clickY = event.pageY - pos.top;
				var container = $(this).parent().get(0);

				$(this).css({
								width: this.width*scale, 
								height: this.height*scale
							});

				container.scrollLeft = ($(container).width() / -2 ) + clickX * scale;
				container.scrollTop = ($(container).height() / -2 ) + clickY * scale;
			}
		);
	}
);
