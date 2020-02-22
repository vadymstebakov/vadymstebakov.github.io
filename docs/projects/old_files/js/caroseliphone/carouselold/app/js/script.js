$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        speed: 800,
        mousewheel: false,
        freeMode: true,
        freeModeSticky: true,
        freeModeMinimumVelocity: 0.3,
        freeModeMomentumVelocityRatio: 0.5,
        on: {
            touchMove: function() {
                console.log('slide touchMove');

                // var slidePrevPrev = $('.swiper-slide-prev').prev();
                // if (slidePrevPrev.length) {
                //     var slidePrevPrevPos = slidePrevPrev.offset().top;
                //     console.log('prevPrevPos: ' + slidePrevPrevPos);

                //     if (slidePrevPrevPos >= 275 && slidePrevPrevPos <= 341) {
                //         slidePrevPrev.css('font-size', '30px');
                //     } else {
                //         slidePrevPrev.css('font-size', '20px');
                //     }
                // }

                // var slidePrev = $('.swiper-slide-prev');
                // if (slidePrev.length) {
                //     var slidePrevPos = slidePrev.offset().top;
                //     console.log('prevPos: ' + slidePrevPos);

                //     if (slidePrevPos >= 275 && slidePrevPos <= 341) {
                //         slidePrev.css('font-size', '30px');
                //     } else {
                //         slidePrev.css('font-size', '25px');
                //     }
                // }

                // var slideActive = $('.swiper-slide-active');
                // var slideActivePos = slideActive.offset().top;
                // console.log('activePos: ' + slideActivePos);

                // if (slideActivePos >= 275 && slideActivePos <= 341) {
                //     slideActive.css('font-size', '30px');
                // }

                // var slideNext = $('.swiper-slide-next');
                // if (slideNext.length) {
                //     var slideNextPos = slideNext.offset().top;
                //     console.log('nextPos: ' + slideNextPos);

                //     if (slideNextPos >= 275 && slideNextPos <= 341) {
                //         slideNext.css('font-size', '30px');
                //     } else {
                //         slideNext.css('font-size', '25px');
                //     }
                // }

                // var slideNextNext = $('.swiper-slide-next').next();
                // if (slideNextNext.length) {
                //     var slideNextNextPos = slideNextNext.offset().top;
                //     console.log('prevNextPos: ' + slideNextNextPos);

                //     if (slideNextNextPos >= 275 && slideNextNextPos <= 341) {
                //         slideNextNext.css('font-size', '30px');
                //     } else {
                //         slideNextNext.css('font-size', '20px');
                //     }
                // }

            }
        },
    });

    $('.slide').clipthru({
        autoUpdate: true,
        autoUpdateInterval: 1
    });

});