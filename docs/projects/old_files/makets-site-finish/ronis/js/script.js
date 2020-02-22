$(document).ready(function(){
    new WOW().init();

//SCROLL NAV 
    redrawDotNav();

    $(window).bind('scroll',function(e){
      redrawDotNav();
    });

    $('.section-first').click(function(){
      $('html, body').animate({
        scrollTop:0
      }, 1000, function() {
      });
      return false;
    });
    $('.section-second').click(function(){
      $('html, body').animate({
        scrollTop:$('#about-plea').offset().top
      }, 1000, function() {
      });
      return false;
    });
    $('.section-third').click(function(){
      $('html, body').animate({
        scrollTop:$('#answer-first').offset().top
      }, 1000, function() {
      });
      return false;
    });
    $('.section-fourth').click(function(){
      $('html, body').animate({
        scrollTop:$('#answer-second').offset().top
      }, 1000, function() {
      });
      return false;
    });
    $('.section-fifth').click(function(){
      $('html, body').animate({
        scrollTop:$('#range').offset().top
      }, 1000, function() {
      });
      return false;
    });
    $('.section-sixth').click(function(){
      $('html, body').animate({
        scrollTop:$('#why').offset().top
      }, 1000, function() {
      });
      return false;
    });

    $('#primary a').hover(
      function(){$(this).prev('.title').show();
    },
      function(){$(this).prev('.title').hide();
    });

  function redrawDotNav(){
    var section1Top =  0;
    var section2Top =  $('#about-plea').offset().top - (($('#answer-first').offset().top - $('#about-plea').offset().top) / 2);
    var section3Top =  $('#answer-first').offset().top - (($('#answer-second').offset().top - $('#answer-first').offset().top) / 2);
    var section4Top =  $('#answer-second').offset().top - (($('#range').offset().top - $('#answer-second').offset().top) / 2);
    var section5Top =  $('#range').offset().top - (($('#why').offset().top - $('#range').offset().top) / 2);
    var section6Top =  $('#why').offset().top - (($('#find').offset().top - $('#why').offset().top) / 2);
    var section7Top =  $('#find').offset().top - (($(document).height() - $('#find').offset().top) / 2);

    $('#primary a').removeClass('active');
    if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
      $('#primary .section-first').addClass('active');
    } 
    else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
      $('#primary .section-second').addClass('active');
    } 
    else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
      $('#primary .section-third').addClass('active');
    }
    else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
      $('#primary .section-fourth').addClass('active');
    }
    else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
      $('#primary .section-fifth').addClass('active');
    }
    else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
      $('#primary .section-sixth').addClass('active');
    }
  }

// CAROUSEL
    $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace) return
      var carousel = e.relatedTarget
    $('#info').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length)
    })
    $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
      0:{
          items:1
      }
    }
});
  
})