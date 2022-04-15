// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:5,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    dots:false,
    stagePadding:25,
    navText: [
        "<i class='bx bx-left-arrow-alt' style='color:#E29857;border-radius:50%;padding:5px;background-color:#F5EBE1'></i>",
        "<i class='bx bx-right-arrow-alt' style='color:#E29857;border-radius:50%;padding:5px;background-color:#F5EBE1'></i> "
	],
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
  });
});