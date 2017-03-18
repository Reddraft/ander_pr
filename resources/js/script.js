$(document).ready(function() {

  /*******************************
  **** FULL SCREEN NAVIGATION ****
  ********************************/

  $('#toggle').click(function() {
    $(this).toggleClass('active');
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

});
