$(document).ready(function(){
    new WOW().init();

    $( function() {
    var currentDate = new Date();
    $( "#datepicker" ).datepicker({
      altField: "#datepicker",
      altFormat: "dd M yy" ,
      autoSize: 'true',
    });
    $("#datepicker").datepicker("setDate", currentDate);

    });

    $('.menu-toggle').click(function(){
      $(this).toggleClass('open')
      $('.banner-home-header__menu ul').slideToggle(400)
    });

    $(function(){
      var r = $('#slider');
      r.on('mouseenter',function(){
        var p = r.val();
        r.on('click',function(){
          p = r.val();
          bg(p);
        });
        r.on('mousemove',function(){
          p = r.val();
          bg(p);
        });
      });
      function bg(n){
          r.css({
            'background-image':'-webkit-linear-gradient(left ,#1db1ae 0%,#1db1ae '+(n*100)/3+'%,#e4e4e4 '+(n*100)/3+'%, #e4e4e4 100%)'
          });
      }
    });

    $( function(){
      var width = $(window).on('resize load', function(){
        if($(window).width() > 1182) {
          width = 1140;
          return
        }
        else if($(window).width() > 974) {
          width = 925;
          return
        }
        else if($(window).width() > 749) {
          width = 715;
          return
        }
      })

      var list = carousel.querySelector('.carousel-list');

      document.getElementById('slider').addEventListener('input', function() {
        list.style.marginLeft = (-width * this.value) + 'px';
      });
    });

    $('.carousel-first').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    autoplay:true,
    autoplayTimeout:6000,
    responsive:{
      0:{
        items:1
      }
    }
});

  $('.carousel-second').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      992:{
        items:3,
      }
    }
});
    
})