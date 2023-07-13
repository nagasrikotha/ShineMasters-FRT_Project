 $(document).ready(function () {
 	jQuery(document).ready(function ($) {
 		$(".scroll ").click(function (event) {
 			event.preventDefault();

 			$('html,body').animate({
 				scrollTop: $(this.hash).offset().top
 			}, 1000);
 		});
 	});

 	$(document).ready(function () {
 		$().UItoTop({
 			easingType: 'easeOutQuart'
 		});

 	});

 });