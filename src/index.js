'use strict';

import './styles.css';
import './getGeoPosition.js';
import './fetchWeather.js';

// import PNotify from 'node_modules/pnotify/dist/es/PNotify.js';
// import PNotifyButtons from 'node_modules/pnotify/dist/es/PNotifyButtons.js';

window.onload = function() {
  let geoSuccess = function(position) {
    let startPos = position;
    console.log(startPos.coords);
    return startPos.coords;
  };
  let geoError = function() {
    alert('Please use input');
  };

  const options = {
    maximumAge: 1800000,
    enableHighAccuracy: true,
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
};
