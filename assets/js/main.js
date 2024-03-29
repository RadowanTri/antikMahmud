$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    // Banner slider
    var $companiesSlider = $(".home-slider");
    $companiesSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        smartSpeed: 5000,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1399: {
                items: 1,
            },
        }
    });

    // Magnific popup
    $('.videos-icon').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
    });
    // focusSlider 
    var $focusSlider = $(".focus-slider");
    $focusSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1399: {
                items: 1,
            },
        }
    });
    // collaborator-slider 
    var $collaboratorSlider = $(".collaborator-slider");
    $collaboratorSlider.owlCarousel({
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-long-arrow-alt-left"></i>',
            '<i class="fas fa-long-arrow-alt-right"></i>',
        ],
        dots: false,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            },
            1399: {
                items: 5,
            },
        }
    });
    // testimonial-slider 
    var $testimonialSlider = $(".testimonial-slider");
    $testimonialSlider.owlCarousel({
        loop: false,
        nav: true,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
        ],
        dots: false,
        autoplayTimeout: 7000,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1300: {
                items: 2,
            },

        }
    });
    // broadcasting-slider 
    var $broadcastingSlider = $(".broadcasting-slider");
    $broadcastingSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 3,
            },
        }
    });
    var $reviewSlider = $(".review-carousel");
    $reviewSlider.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        margin: 30,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1399: {
                items: 5,
            },
        }
    });
    // ambassador

    $(function() {
        $(".apply-items").click(function() {
            $(".apply-items.active").removeClass("active");
            $(this).addClass("active");
        });
    });

    $('#myModal').on('show.bs.modal', function() {
        owl.trigger('owl.stop');
    });


    // counter
    $('.counter').counterUp({
        delay: 50,
        time: 1000
      });

// price
    

}(jQuery));