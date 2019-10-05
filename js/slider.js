var controls = document.querySelectorAll('.slider-control');
var slides = document.querySelectorAll('.slider-item'); 
var backgroundColors = ['#849d8f', '#8996a6', '#9d8b84'];
var previousSlide = 0;
var currentSlide = 0;
var currentColor = 0;

for (var i=0; i<controls.length; i++) {
  (function (i) {
    controls[i].addEventListener('click', function() {
      previousSlide = currentSlide;
      currentSlide = i;
      currentColor = i;
      changeBackgroudSite();
      changeActiveSlide();
    });
  })(i);
}

var changeActiveSlide = function() {
  slides[previousSlide].classList.remove('slider-item-active');
  slides[currentSlide].classList.add('slider-item-active');
  controls[previousSlide].classList.remove('slider-control-active');
  controls[currentSlide].classList.add('slider-control-active');    
}

function changeBackgroudSite() { 
  document.body.style.backgroundColor = backgroundColors[currentColor];
}