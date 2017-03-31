$(document).ready(function() {

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
    var currentAttrValue = $(this).attr('href');
    $(".services-list li").removeClass("active");
    $(this).closest('li').addClass('active');
    $(this).closest('section').find('div').removeClass('active');
    $(this).closest('section').find('div' + currentAttrValue).addClass('active');
  })

});
