var mapImage = document.querySelector('.contacts-map-image');

ymaps.ready(init);
function init() {
  mapImage.classList.add("map-hide");
  
  var myMap = new ymaps.Map("yandexmap", {
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