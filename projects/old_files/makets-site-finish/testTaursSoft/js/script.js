$(document).ready(function(){

    // menu
    $('.menu-toggle').click(function(){
        $(this).toggleClass('open');
        $('.nav-menu').fadeToggle();  
    });

    // carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dot: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
          0:{
              items:1
            }
        }
    });

    // scroll
    $('.nav-menu a[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top - 86;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

    $('.banner-text a[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top - 86;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

    $(window).scroll(function(){
        $('section[id]').each(function(){
            var id = $(this).attr('id');
            if($(this).offset().top - 87 < $(window).scrollTop()){
                $('.nav-menu a[href^="#'+id+'"]').addClass('nav-active').siblings().removeClass('nav-active');
             
            }
        });
    });

    // fixed-menu
    var menu = $('#header');
    var height = $('#header').offset().top;

    $(window).scroll(function(){
        if ( $(this).scrollTop() > height && menu.hasClass('header')){
            menu.fadeOut('fast', function(){
                $(this).removeClass('header')
                .addClass('fixed')
                .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= height && menu.hasClass('fixed')) {
            menu.fadeOut('fast', function(){
                $(this).removeClass('fixed')
                .addClass('header')
                .fadeIn('fast');
            });
        }

    });
    
})