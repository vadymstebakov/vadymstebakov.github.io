$(document).ready(function(){
 $('.slide-one').owlCarousel({
    loop: true,
    margin:40,
    autoplay: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1,
            nav:true
        },
         600:{
            items:2,
            nav:true
        },
       
        1000:{
            items:3,
            nav:true
        }
    }
});

 $('.slide-two').owlCarousel({
    loop: true,
    margin:60,
    autoplay: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        800:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            
        }
    }
});

  $('.slide-three').owlCarousel({
    loop: true,
    margin:20,
    autoplay: true,
    navText: ["",""],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            
        }
    }
})
  new WOW().init();

});
