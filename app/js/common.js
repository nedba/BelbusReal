$(function() {

	$('.item__top').equalHeights();
	$('.advantages__wrapper').equalHeights();





	$(document).ready(function(){
		$('.menuicon').click(function(){
			$(this).toggleClass('change');
		});
	});

	$(document).ready(function(){
		$('.menuicon').click(function(){
			$('.menu__list').toggleClass('active');
		});
	});


	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			dots: false,
			autoplay: true
		});
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
