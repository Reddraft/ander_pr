$(document).ready(function() {

// if(jQuery.browser.mobile)
// {
//    console.log('You are using a mobile device!');
// }
// else
// {
//    console.log('You are not using a mobile device!');
// }



  /*******************************
  **** FULL SCREEN NAVIGATION ****
  ********************************/

  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#menu-overlay').toggleClass('open');
  });

  $('.main-nav li a').click(function() {
    $('#toggle').toggleClass('active');
    $('#menu-overlay').toggleClass('open');
  });

  $('.logo').click(function() {
    $('#menu-overlay').removeClass('open');
    $('#toggle').removeClass('active');
  });


  /***********************
  *** STICKY NAVIGATION **
  ************************/
  $('.js-section-about').waypoint(function(direction) {
    if (direction === 'down') {
      //fadeout hide the nav
      // nav must be fadeOut first in order to fadeIn
      $('nav').fadeOut("fast", function() {
        // then add the sticky class to the nav while is hidden
        $('nav').addClass('sticky');
      });
      //show the nav again with the class sticky already added
      $('nav').fadeIn("slow");

    } else {
      //fadeout the nav again
      $('nav').fadeOut("slow", function() {
        //remove the sticky class
        $('nav').removeClass('sticky');
      });
      $('nav').fadeIn();
    }
  }, {
    offset: '100px;'
  });

  /***********************
  *** STICKY NAVIGATION **
  ************************/
  $('.js-section-about').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav').fadeOut("slow").next().addClass('sticky');
    } else {
      $('nav').fadeOut("slow").next().removeClass('sticky');
    }
  }, {
    offset: '100px;'
  });

  /**************************
  *** SCROLL ON NAVIGATION **
  **************************/
  
  /* https://css-tricks.com/snippets/jquery/smooth-scrolling */
  /* jQuery.browser.mobile (http://detectmobilebrowser.com/) */

  //check if mobile to offset the navigation
  if(jQuery.browser.mobile)
  {
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              //substract 100 to anchor 100px from the top
              scrollTop: target.offset().top - 60
            }, 1000);
            return false;
          }
        }
      });
    });
  }
  else
  {
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              //substract 100 to anchor 100px from the top
              scrollTop: target.offset().top - 99
            }, 1000);
            return false;
          }
        }
      });
    });
  }



  /******************************
  *** ANIMATIONS ON SCROLLING **
  *******************************/

  // header animations
  $('.js-wp-animate-nav').addClass('animated fadeInDown');
  $('.js-wp-animate-hero-text-box').addClass('animated fadeInUp');

  // about animations
  $('.js-section-about').waypoint(function() {
    $('.js-wp-animate-left-box-about').addClass('animated fadeInLeft');
    $('.js-wp-animate-right-box-about').addClass('animated fadeInRight');
  }, {
    offset: '200px;'
  });
  $('.js-wp-animate-left-box-about').waypoint(function() {
    $('.js-wp-animate-expertises').addClass('animated  fadeInUp');
  }, {
    offset: '200px;'
  });

  // leadership animations
  $('.js-section-leadership').waypoint(function() {
      $('.js-wp-animate-founder1').addClass('animated fadeInLeft');
      $('.js-wp-animate-founder2').addClass('animated fadeInRight');
  }, {
    offset: '200px;'
  });

  // difference animations
  $('.js-section-difference').waypoint(function() {
      $('.js-wp-animate-left-side-difference').addClass('animated fadeInLeft');
      $('.js-wp-animate-right-side-value1').addClass('animated fadeIn');
      $('.js-wp-animate-right-side-value2').addClass('animated fadeIn');
      $('.js-wp-animate-right-side-value3').addClass('animated fadeIn');
      $('.js-wp-animate-right-side-value4').addClass('animated fadeIn');
  }, {
    offset: '200px;'
  });

  // industries animations
  $('.js-section-industries').waypoint(function() {
      $('.js-wp-animate-industries-heading').addClass('animated fadeInDown');
      $('.js-wp-animate-industries-wrapper').addClass('animated fadeInUp');
  }, {
    offset: '200px;'
  });

  // services animations
  $('.js-section-services').waypoint(function() {
      $('.js-wp-animate-services-heading').addClass('animated fadeInDown');
      $('.js-wp-animate-services-list').addClass('animated fadeIn');
      $('.js-wp-animate-services-descriptions').addClass('animated fadeInRight');
  }, {
    offset: '200px;'
  });

  // contact animations
  $('.js-section-contact').waypoint(function() {
      $('.js-wp-animate-contact-map').addClass('animated fadeInLeft');
      $('.js-wp-animate-contact-info').addClass('animated zoomIn');
  }, {
    offset: '200px;'
  });

  /*********************************************************
   click instead of hover on program images on mobile device
  *********************************************************/

  [].slice.call( document.querySelectorAll('figure.founder-photo figcaption a') ).forEach( function(el) {
    el.onclick = function() { return false; }
  } );
  [].slice.call( document.querySelectorAll('ul.right-side li a') ).forEach( function(el) {
    el.onclick = function() { return false; }
  } );
  [].slice.call( document.querySelectorAll('ul.industries .industry-photo a') ).forEach( function(el) {
    el.onclick = function() { return false; }
  } );



  /*******************************
  **** TYPED JS ****
  ********************************/

  $(function(){
    $(".hero-text-box span").typed({
        strings: [ " ^1000 creatives", "organizers", "strategists", "idea makers"],
        typeSpeed: 90,
        loop: false
    });
  });

  /*******************************
  **** SERVICES TABS ****
  ********************************/

  $(".services-list li").removeClass("active");
  $(".service-description").removeClass("active");
  $(".services-list li:first-child").addClass("active");
  $("div#id1").addClass("active");

  $('.tab').click(function(e) {
    // e.preventDefault();
    var currentAttrValue = $(this).attr('href');
    $(".services-list li").removeClass("active");
    $(this).closest('li').addClass('active');
    $(this).closest('section').find('div').removeClass('active');
    $(this).closest('section').find('div' + currentAttrValue).addClass('active');

  });

/******************************
*** GMAPS **
*******************************/

var map = new GMaps({
  div: '.map',
  lat: 32.873229,
  lng: -96.935465,
  zoom: 16,
  draggable: false,
  scrollwheel: false,
  resize: function() {
    this.setCenter({lat: 32.873229, lng: -96.935465 });
  },

  styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "gamma": "0.00"
            },
            {
                "lightness": "74"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#34334f"
            },
            {
                "lightness": "-37"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "3"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2d2c45"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7d7c9b"
            },
            {
                "lightness": "43"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2d2c45"
            },
            {
                "lightness": "1"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7d7c9b"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2d2c45"
            },
            {
                "lightness": "-1"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7d7c9b"
            },
            {
                "lightness": "-31"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2d2c45"
            },
            {
                "lightness": "-36"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2d2c45"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

});

map.addMarker({
  lat: 32.873229,
  lng: -96.935465,
  title: 'crossfitbox',
  click: function(e) {
    window.open('https://goo.gl/maps/rfWEk1G4yG62', '_blank');
  },
  icon: 'resources/img/icons/marker.png',
  animation: google.maps.Animation.BOUNCE
});

var resizingTimeOut;
$(window).resize(function() {
  clearTimeout(resizingTimeOut);
  resizingTimeOut = setTimeout(function() {
    map.refresh();
  }, 200);
});

});
