$(document).ready(function(){

//preloader
$(window).on('load', function () {
    var preloader = $('.preloader');
    var loader = preloader.find('#loader');
    loader.fadeOut('slow');
    preloader.delay(600).fadeOut('slow');
}); 

// menu
    $('.menu-toggle').on('click', function(){
        $('.menu-toggle').toggleClass('menu-toggle-open');
        $('.menu').toggleClass('menu-active');

        $(document).on('click', function (e) {
            var burger = $('.menu-toggle');
            var menu = $('.menu');
            if (!burger.is(e.target) && burger.has(e.target).length === 0 && !menu.is(e.target) && menu.has(e.target).length === 0) {
                $('.menu-toggle').removeClass('menu-toggle-open');
                $('.menu').removeClass('menu-active');
            }
        });  
    });

// scroll
    $('.menu a[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top + 1;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

    $('#about[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top + 1;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

    $('#works[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top + 1;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

    $('#contacts[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top + 1;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

    $('#home[data-target^="anchore"]').bind('click.smoothscroll', function(){
        var element = $(this).attr('href'),
        dist = $(element).offset().top + 1;
        $('html, body').animate({'scrollTop': dist}, 700);
        return false;
    });

// carousel
    var rev = $('.rev-slider');
    rev.on('init', function(event, slick, currentSlide) {
        var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        cur.removeClass('slick-snext').removeClass('slick-sprev');
        slick.$prev = prev;
        slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        var
        cur = $(slick.$slides[nextSlide]);
        slick.$prev.removeClass('slick-sprev');
        slick.$next.removeClass('slick-snext');
        next = cur.next(),
        prev = cur.prev();
        prev.prev();
        prev.next();
        prev.addClass('slick-sprev');
        next.addClass('slick-snext');
        slick.$prev = prev;
        slick.$next = next;
        cur.removeClass('slick-next').removeClass('slick-sprev');
    });

    rev.slick({
        speed: 1000,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: false,
        prevArrow: '<button></button>',
        nextArrow: '<button></button>',
        infinite: true,
        centerMode: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        swipe: true,
        customPaging: function(slider, i) {
            return '';
        },
});

//vadilForms
    var form = $('#form');
    var btn = $('#button');
    var inputName = $('#name');
    var inputMail = $('#email');
    var inputPhone = $('#phone');
    var inputMessage = $('#message');
    var errname = $('#errname');
    var erremail = $('#erremail');
    var errphone = $('#errphone');
    var errmessage = $('#errmessage');

    form.submit(function(event) { 
        $(function ValidName() {
            var name = $('#name').val(); 
            var error = $('#errname'); 
            var reg = /^\D[\D]*$/i;
            var valid = reg.test(name);

            if (!valid) {
                console.log('invalid');
                error.addClass('active');
                event.preventDefault();
                console.log(event.isDefaultPrevented());
            } else {
                console.log('valid');
                error.removeClass('active'); 
            }
        });

        $(function ValidMail() {
            var email = $('#email').val(); 
            var error = $('#erremail'); 
            var reg = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
            var valid = reg.test(email);

            if (!valid) {
                console.log('invalid');
                error.addClass('active');
                event.preventDefault();
                console.log(event.isDefaultPrevented());
            } else {
                console.log('valid');
                error.removeClass('active'); 
            }
        });

        $(function ValidPhone() {
            var phone = $('#phone').val(); 
            var error = $('#errphone'); 
            var reg = /^\d[\d\(\)\ -]{2,12}\d$/;
            var valid = reg.test(phone);

            if (!valid) {
                console.log('invalid');
                error.addClass('active');
                event.preventDefault();
                console.log(event.isDefaultPrevented());
            } else {
                console.log('valid');
                error.removeClass('active'); 
            }
        });

        $(function ValidMessage() {
            var message = $('#message').val(); 
            var error = $('#errmessage'); 
            var reg = /^[\d\D]{1,}$/i;
            var valid = reg.test(message);
            if (!valid) {
                console.log('invalid');
                error.addClass('active');
                event.preventDefault();
                console.log(event.isDefaultPrevented());
            } else {
                console.log('valid');
                error.removeClass('active'); 
            }
        });
        
    });

    inputName.click(function() {
        errname.removeClass('active');
    });

    inputMail.click(function() {
        erremail.removeClass('active');
    });

    inputPhone.click(function() {
        errphone.removeClass('active');
    });

    inputMessage.click(function() {
        errmessage.removeClass('active');
    });

});