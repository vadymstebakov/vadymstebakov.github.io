document.addEventListener('DOMContentLoaded', function(event) {
    var carosel = document.getElementById('carosel');
    var img = document.getElementById('image');
    var imgSet = ['img/arsenal.jpg', 'img/bavaria.png', 'img/braca.png', 'img/real.png', 'img/sevila.png'];
    var next = document.getElementById('next');
    var prev = document.getElementById('prev');
    var number = 0;

    img.src = imgSet[number];    
 
    next.addEventListener('click', function(event){
    	event = event || window.event;
    	number++;

    	if (number == imgSet.length) {
    		number = 0;
    	}

    	img.src = imgSet[number];
    }, false);

    prev.addEventListener('click', function(event){
    	event = event || window.event;
    	number--;

    	if (number < 0) {
    		number = imgSet.length - 1;
    	}
    	
    	img.src = imgSet[number];
    }, false);

    var autoPlay = setInterval(function(){
    	number++;

    	if (number == imgSet.length) {
    		number = 0;
    	}

    	img.src = imgSet[number];
    }, 2000);


}, false);