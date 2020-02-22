$(document).ready(function() {
    $('.swiper-wrapper').theta_carousel({
        // distance: 120,
        distance: 130,
        sensitivity: 1.5,
        numberOfElementsToDisplayRight: 2,
        numberOfElementsToDisplayLeft: 2,

        // numberOfElementsToDisplayRight: 4,
        // numberOfElementsToDisplayLeft: 4,
        // scaleY: 0.4,
        // path: {
        //     settings: {
        //         rotationAngleXY: 90
        //     }
        // },
        // rotationAnimationEasing: 'linear',
        // rotationAnimationDuration: 300,
        // verticalRotation: true,
        // inertiaHighFriction: 100,
        // fadeAway: true,
        // fadeAwayNumberOfConfigurableElements: 4,
        // fadeAwayBezierPoints: {
        //     p1: {
        //         x: 0,
        //         y: 100
        //     },
        //     p2: {
        //         x: 50,
        //         y: 50
        //     },
        //     p3: {
        //         x: 50,
        //         y: 50
        //     },
        //     p4: {
        //         x: 100,
        //         y: 0
        //     }
        // },
        // rotation: true,
        // rotationBezierPoints: {
        //     p1: {
        //         x: 0,
        //         y: 0
        //     },
        //     p2: {
        //         x: 50,
        //         y: 0
        //     },
        //     p3: {
        //         x: 50,
        //         y: 0
        //     },
        //     p4: {
        //         x: 100,
        //         y: 0
        //     }
        // }
    });

    $('.swiper-wrapper').on('change', function(e, data) {
        if (data.index >= 20) {
            setTimeout(function() {
                $('.swiper-wrapper').theta_carousel('moveBack');
            }, 400);
        }
    });


    $('.slide').clipthru({
        autoUpdate: true,
        autoUpdateInterval: 1,
        keepClonesInHTML: true,
    });
});