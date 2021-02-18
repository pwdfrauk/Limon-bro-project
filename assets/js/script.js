(function($) {
	
	"use strict";


    // Back to top
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
     
    // Bootstrap Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
	// Date Picker
    $( function() {
        $( "#datepicker" ).datepicker();
    });

    //js code for mobile menu toggle
   $(".menu-toggle").on("click", function() {
       $(this).toggleClass("is-active");
   });

    // Hero Slider
    $('.hero-slider').owlCarousel({
        loop:true,
        dots: false,
        autoplay: false,
        mouseDrag: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 10000,
        smartSpeed: 1000,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            576:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // jackpots Slider
    $('.jackpots').owlCarousel({
        loop:true,
        autoplay: true,
        mouseDrag: true,
        animateOut: 'fadeOut',
        margin: 30,
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav:false,
        dots:false,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            576:{
                items:2
            },
            1024:{
                items:4
            },
            1200:{
                items:6
            }
        }
    });

    // Testimonial Slider
    $('.testimonials').owlCarousel({
        loop:true,
        dots: false,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav:true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1,                
            },
            576:{
                items:1
            },
            1000:{
                items:1,                
                nav:false,
            },
            1024:{
                items:1
            }
        }
    });


    //Team Carousel

	$('#team-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        nav: false,
        dots: false,
        autoplayTimeout:3000,
        navSpeed:800,
        autoplaySpeed:1500,
        responsive: true,
            responsive : {
                0 : {
                    items: 1
                },
                480 : {
                    items: 2,
                },
                768 : {
                    items: 3,
                },
                1024 : {
                    items: 4,
                }
            }
    }); 

    //App Carousel
	$('.app-content-slider').owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        autoplayTimeout:6000,
        navSpeed:800,
        autoplaySpeed:1500,
        responsive: true,
            responsive : {
                0 : {
                    items: 1
                },
                480 : {
                    items: 1,
                },
                768 : {
                    items: 1,
                },
                1024 : {
                    items: 1,
                }
            }
    }); 

    // News Carousel
    
    $('.news-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        smartSpeed: 500,
        autoplay: false,
        navText: [ '<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },		
            1200:{
                items:2
            }

        }
    });  

    
    // screenshot popup

    $(".screenshot-gallery").each(function () {
        $(this).find(".popup-screenshot").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });
    }); 

    $('.video-popup').magnificPopup({
        type: 'iframe',
    });

    //Counter-JS
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });




    // Preloader Js
    $(window).on('load', function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // Wow js active
    // new WOW().init(); 


    // Full Screen Search
    $(".search-btn").on('click', function(){
        $(".search-full").removeClass("close");
        $(".search-full").addClass("open");
    })

    $(".search-close").on('click', function(){
        $(".search-full").removeClass("open");
        $(".search-full").addClass("close");
    })
    


    //Faq area Accordion
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	$('.accordion a').on( 'click',function(j) {
		var dropDown = $(this).closest('li').find('p');

		$(this).closest('.accordion').find('p').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	 });
// radient progress bar 


})(jQuery);
$(function(){

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});



