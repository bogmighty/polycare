$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
    items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dotsSpeed : 600,
		dragEndSpeed : 600,
}); });

// arrows for input product



//calc
$(document).ready(function() {
	var $quantity = document.getElementById('quantity').value;
	var $quantity = parseInt(quantity);

	var $result = $quantity * 900

	document.getElementById('calcprice').innerHTML = $result;

});

$(document).ready(function () {
	$('.popup-with-form').magnificPopup({
	   type: 'inline',
	   focus: '#name'
	});
	function closePopup() {
  $.magnificPopup.close();
}
});
