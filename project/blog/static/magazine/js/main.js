 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	
	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	
  

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var count = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + count,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + count,
        });

        count++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    smartSpeed: 1000,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  // $('.slide-one-item-alt').owlCarousel({
	  //   center: false,
	  //   items: 1,
	  //   loop: true,
			// stagePadding: 0,
			// smartSpeed: 700,
	  //   margin: 0,
	  //   autoplay: true,
	  //   pauseOnHover: false,

	  // });

	  // $('.slide-one-item-alt-text').owlCarousel({
	  //   center: false,
	  //   items: 1,
	  //   loop: true,
			// stagePadding: 0,
			// smartSpeed: 700,
	  //   margin: 0,
	  //   autoplay: true,
	  //   pauseOnHover: false,
	  // });

	  $('.slide-one-item-alt').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    onDragged: function(event) {
	    	console.log('event : ',event.relatedTarget['_drag']['direction'])
	    	if ( event.relatedTarget['_drag']['direction'] == 'left') {
	    		$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	    	} else {
	    		$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	    	}
	    }
	  });
	  $('.slide-one-item-alt-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    pauseOnHover: true,
	    onDragged: function(event) {
	    	console.log('event : ',event.relatedTarget['_drag']['direction'])
	    	if ( event.relatedTarget['_drag']['direction'] == 'left') {
	    		$('.slide-one-item-alt').trigger('next.owl.carousel');
	    	} else {
	    		$('.slide-one-item-alt').trigger('prev.owl.carousel');
	    	}
	    }
	  });
	  

	  $('.custom-next').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('next.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('next.owl.carousel');
	  });
	  $('.custom-prev').click(function(e) {
	  	e.preventDefault();
	  	$('.slide-one-item-alt').trigger('prev.owl.carousel');
	  	$('.slide-one-item-alt-text').trigger('prev.owl.carousel');
	  });
	  
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	// siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();


  var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	    // filter items on button click
	  $('#filters').on( 'click', 'button', function() {
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters button').removeClass('active');
	    $(this).addClass('active');
	  });
  }

  siteIstotope();


  $('.fancybox').on('click', function() {
	  var visibleLinks = $('.fancybox');

	  $.fancybox.open( visibleLinks, {}, visibleLinks.index( this ) );

	  return false;
	});

});


$(document).ready(function () {
	"use strict";
  
	var window_width = $(window).width(),
	  window_height = window.innerHeight,
	  header_height = $(".default-header").height(),
	  header_height_static = $(".site-header.static").outerHeight(),
	  fitscreen = window_height - header_height;
  
  
	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);
  
	if (document.getElementById("default-select")) {
	  $('select').niceSelect();
	};
  
	$('.img-pop-up').magnificPopup({
	  type: 'image',
	  gallery: {
		enabled: true
	  }
	});
  
	$('.single-charity').magnificPopup({
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
  
  
	//  Counter Js 
	if (document.getElementById("facts-area")) {
	  $('.counter').counterUp({
		delay: 10,
		time: 1000
	  });
	};
  
	$('.counter').counterUp({
	  delay: 10,
	  time: 1000
	});
  
  
  
  
	// Initiate superfish on nav menu
	$('.nav-menu').superfish({
	  animation: {
		opacity: 'show'
	  },
	  speed: 400
	});
  
  
	$(function () {
	  $("#datepicker").datepicker();
	  $("#datepicker2").datepicker();
	});
  
  
	// Mobile Navigation
	if ($('#nav-menu-container').length) {
	  var $mobile_nav = $('#nav-menu-container').clone().prop({
		id: 'mobile-nav'
	  });
	  $mobile_nav.find('> ul').attr({
		'class': '',
		'id': ''
	  });
	  $('body').append($mobile_nav);
	  $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
	  $('body').append('<div id="mobile-body-overly"></div>');
	  $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');
  
	  $(document).on('click', '.menu-has-children i', function (e) {
		$(this).next().toggleClass('menu-item-active');
		$(this).nextAll('ul').eq(0).slideToggle();
		$(this).toggleClass("lnr-chevron-up lnr-chevron-down");
	  });
  
	  $(document).on('click', '#mobile-nav-toggle', function (e) {
		$('body').toggleClass('mobile-nav-active');
		$('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
		$('#mobile-body-overly').toggle();
	  });
  
	  $(document).click(function (e) {
		var container = $("#mobile-nav, #mobile-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
		  if ($('body').hasClass('mobile-nav-active')) {
			$('body').removeClass('mobile-nav-active');
			$('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
			$('#mobile-body-overly').fadeOut();
		  }
		}
	  });
	} else if ($("#mobile-nav, #mobile-nav-toggle").length) {
	  $("#mobile-nav, #mobile-nav-toggle").hide();
	}
  
	// Smooth scroll for the menu and links with .scrollto classes
	$('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		if (target.length) {
		  var top_space = 0;
  
		  if ($('#header').length) {
			top_space = $('#header').outerHeight();
  
			if (!$('#header').hasClass('header-fixed')) {
			  top_space = top_space;
			}
		  }
  
		  $('html, body').animate({
			scrollTop: target.offset().top - top_space
		  }, 1500, 'easeInOutExpo');
  
		  if ($(this).parents('.nav-menu').length) {
			$('.nav-menu .menu-active').removeClass('menu-active');
			$(this).closest('li').addClass('menu-active');
		  }
  
		  if ($('body').hasClass('mobile-nav-active')) {
			$('body').removeClass('mobile-nav-active');
			$('#mobile-nav-toggle i').toggleClass('lnr-times lnr-bars');
			$('#mobile-body-overly').fadeOut();
		  }
		  return false;
		}
	  }
	});
  
  
	$(document).ready(function () {
  
	  $('html, body').hide();
  
	  if (window.location.hash) {
  
		setTimeout(function () {
  
		  $('html, body').scrollTop(0).show();
  
		  $('html, body').animate({
  
			scrollTop: $(window.location.hash).offset().top - 62
  
		  }, 1000)
  
		}, 0);
  
	  }
  
	  else {
  
		$('html, body').show();
  
	  }
  
	});
  
  
	// Header scroll class
	$(window).scroll(function () {
	  if ($(this).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	  } else {
		$('#header').removeClass('header-scrolled');
	  }
	})
  
	if ($('.owl-banner').length) {
	  $('.owl-banner').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		nav: true,
		navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"]
	  });
	}
  
	if ($('.owl-condition').length) {
	  $('.owl-condition').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		nav: true,
		navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"]
	  });
	}
  
	if ($('.owl-brand').length) {
	  $('.owl-brand').owlCarousel({
		loop: true,
		margin: 30,
		items: 5,
		nav: false,
		dots: false,
		responsiveClass: true,
		autoplay: 2500,
		slideSpeed: 300,
		paginationSpeed: 500,
		responsive: {
		  0: {
			items: 1,
		  },
		  768: {
			items: 3,
		  },
		  1024: {
			items: 4,
		  },
		  1224: {
			items: 5
		  }
		}
	  })
	}
  
	if ($('.owl-event').length) {
	  $('.owl-event').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		dots: false,
		autoplay: true,
		nav: true,
		navText: ["<span class='lnr lnr-arrow-up'></span>", "<span class='lnr lnr-arrow-down'></span>"]
	  });
	}
  
  
	// Causes
	$(".skill_main").each(function () {
	  $(this).waypoint(function () {
		var progressBar = $(".progress-bar");
		progressBar.each(function (indx) {
		  $(this).css("width", $(this).attr("aria-valuenow") + "%")
		})
	  }, {
		  triggerOnce: true,
		  offset: 'bottom-in-view'
  
		});
	});
  
  
	//  Start Google map 
  
	// When the window has finished loading create our google map below
  
	if (document.getElementById("map")) {
  
	  google.maps.event.addDomListener(window, 'load', init);
  
	  function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
		  // How zoomed in you want the map to start at (always required)
		  zoom: 11,
  
		  // The latitude and longitude to center the map (always required)
		  center: new google.maps.LatLng(40.6700, -73.9400), // New York
  
		  // How you would like to style the map. 
		  // This is where you would paste any style found on Snazzy Maps.
		  styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
		};
  
		// Get the HTML DOM element that will contain your map 
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');
  
		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);
  
		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
		  position: new google.maps.LatLng(40.6700, -73.9400),
		  map: map,
		  title: 'Snazzy!'
		});
	  }
	}
  
  
	$(document).ready(function () {
	  $('#mc_embed_signup').find('form').ajaxChimp();
	});
  
  
  
  
  
  
  
  
  });
  