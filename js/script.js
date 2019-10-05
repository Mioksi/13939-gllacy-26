var mapImage = document.querySelector('.contacts-map-image');

ymaps.ready(init);
function init() {
  mapImage.classList.add('map-hide');
  
  var myMap = new ymaps.Map('yandexmap', {
    center: [59.939631, 30.333055],
    zoom: 15
  }),

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'Магазин Глейси'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/pin.svg',
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -135]
    })
  
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
};

var controls = document.querySelectorAll('.slider-control');
var slides = document.querySelectorAll('.slider-item'); 
var backgroundColors = ['#849d8f', '#8996a6', '#9d8b84'];
var previousSlide = 0;
var currentSlide = 0;
var currentColor = 0;

for (var i=0; i<controls.length; i++) {
  (function (i) {
    controls[i].addEventListener('click', function () {
      previousSlide = currentSlide;
      currentSlide = i;
      currentColor = i;
      changeBackgroudSite();
      changeActiveSlide();
    });
  })(i);
}

var changeActiveSlide = function () {
  slides[previousSlide].classList.remove('slider-item-active');
  slides[currentSlide].classList.add('slider-item-active');
  controls[previousSlide].classList.remove('slider-control-active');
  controls[currentSlide].classList.add('slider-control-active');    
}

var changeBackgroudSite =  function () { 
  document.body.style.backgroundColor = backgroundColors[currentColor];
}

var feedbackLink = document.querySelector('.contacts-button');

var popupOverlay = document.querySelector('.modal-overlay');
var popupClose = popupOverlay.querySelector('.close-button');

var feedbackForm = popupOverlay.querySelector('.feedback-form');
var feedbackName = feedbackForm.querySelector('[name=feedback-name]');
var feedbackEmail = feedbackForm.querySelector('[name=feedback-email]');
var feedbackMessage = feedbackForm.querySelector('[name=feedback-message]');

feedbackLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupOverlay.classList.add('modal-show');
  feedbackName.focus();
});

popupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupOverlay.classList.remove('modal-show');
  feedbackName.classList.remove('modal-invalid');
  feedbackEmail.classList.remove('modal-invalid');
  feedbackMessage.classList.remove('modal-invalid');
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value) {
    evt.preventDefault();
    feedbackName.classList.add('modal-invalid');
  } else {
    feedbackName.classList.remove('modal-invalid');
  }
  if (!feedbackEmail.value) {
    evt.preventDefault();
    feedbackEmail.classList.add('modal-invalid');
  } else {
    feedbackEmail.classList.remove('modal-invalid');
  }
  if (!feedbackMessage.value) {
    evt.preventDefault();
    feedbackMessage.classList.add('modal-invalid');
  } else {
    feedbackMessage.classList.remove('modal-invalid');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupOverlay.classList.contains('modal-show')) {
      popupOverlay.classList.remove('modal-show');
      feedbackName.classList.remove('modal-invalid');
      feedbackEmail.classList.remove('modal-invalid');
      feedbackMessage.classList.remove('modal-invalid');
    }
  }
});