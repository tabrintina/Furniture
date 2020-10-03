(function ($) {
    "use strict";

    /*----------------------------
       		Preloader Active
       	------------------------------*/

    $(window).on('load', function () {
        $(".preloader").fadeOut(500);
    });

    /*----------------------------
       		main menu Active
       	------------------------------*/

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });
	
    /*----------------------------
    		Product Popup Active
    	------------------------------*/

    $(".product-popup").magnificPopup({
        type: "image"
    });
	
    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });

    /*----------------------------
         		home 1 main slider 1 active
         	------------------------------*/
    $(".homestyle-main-1-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*----------------------------
       		tooltip Active
       	------------------------------*/

    $('[data-toggle="tooltip"]').tooltip()
    /*----------------------------
    		   isotop type 1 active
    	------------------------------*/
    $('.folio-menu-1 li').on('click', function () {
        $('.folio-menu-1 li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#container').imagesLoaded(function () {
        $('.folio-menu-1 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios2.isotope({
                filter: filterValue
            });
        });
        var $folios2 = $('.typ1-all-folio').isotope({
            itemSelector: '.typ1-folios-item',
            percentPosition: true,
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ1-folios-item'
            },
        });
    });

    /*---------------------
    	// popup active
    --------------------- */
    $('.folio-hvr-pop a').magnificPopup({
        type: 'image'
    });
    /*----------------------------
        		testimonial slider Active
        	------------------------------*/

    $(".homestyle-testi-typ-1-all-wrape").owlCarousel({
        loop: true,
        autoplay: true,
        animateIn: 'fadeInDown',
        smartSpeed: 1000,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*----------------------------
         		scrolltop active
         	------------------------------*/

    $('body').materialScrollTop();

    /*----------------------------
        		WOW active
        	------------------------------*/

    new WOW().init();

})(jQuery);