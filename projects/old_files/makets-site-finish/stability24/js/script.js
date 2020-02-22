// Timer
var clocksHeader = function() {
    var minutes = document.body.querySelector(".header-minutes");
    var seconds = document.body.querySelector(".header-seconds");    
    var minutes_data = 44;
    var seconds_data = 59;
    
    var timer = setInterval(function() {
        minutes.innerHTML = minutes_data;
        seconds.innerHTML = seconds_data-- ;
        
        if(seconds_data < 10) { 
            seconds.innerHTML = '<span>0</span>' + seconds_data;
        }
        if(minutes_data < 10) {
            minutes.innerHTML = '<span>0</span>' + minutes_data;
        }
        if(seconds_data == 0) {
            seconds_data = 59;
            minutes_data--;
            if(minutes_data < 0) clearInterval(timer)
        }
    }, 1000);  
    
 }
 clocksHeader();

 var clocksMiddle = function() {
    var minutes = document.body.querySelector(".middle-minutes");
    var seconds = document.body.querySelector(".middle-seconds");    
    var minutes_data = 44;
    var seconds_data = 59;
    
    var timer = setInterval(function() {
        minutes.innerHTML = minutes_data;
        seconds.innerHTML = seconds_data-- ;
        
        if(seconds_data < 10) { 
            seconds.innerHTML = '<span>0</span>' + seconds_data;
        }
        if(minutes_data < 10) {
            minutes.innerHTML = '<span>0</span>' + minutes_data;
        }
        if(seconds_data == 0) {
            seconds_data = 59;
            minutes_data--;
            if(minutes_data < 0) clearInterval(timer)
        }
    }, 1000);  
    
 }
 clocksMiddle();

 var clocksFooter = function() {
    var minutes = document.body.querySelector(".footer-minutes");
    var seconds = document.body.querySelector(".footer-seconds");    
    var minutes_data = 44;
    var seconds_data = 59;
    
    var timer = setInterval(function() {
        minutes.innerHTML = minutes_data;
        seconds.innerHTML = seconds_data-- ;
        
        if(seconds_data < 10) { 
            seconds.innerHTML = '<span>0</span>' + seconds_data;
        }
        if(minutes_data < 10) {
            minutes.innerHTML = '<span>0</span>' + minutes_data;
        }
        if(seconds_data == 0) {
            seconds_data = 59;
            minutes_data--;
            if(minutes_data < 0) clearInterval(timer)
        }
    }, 1000);  
    
 }
 clocksFooter();

// Scroll
var linkNav = document.querySelectorAll('[href^="#"]'),
    V = .2;
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { 
        e.preventDefault(); 
        var w = window.pageYOffset,  
            hash = this.href.replace(/[^#]*(.*)/, '$1'); 
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step); 
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash 
            }
        }
    }, false);
}