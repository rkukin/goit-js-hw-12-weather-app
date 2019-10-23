'use strict';

import './styles.css';
import * as getGeoPosition from "./getGeoPosition";
import './fetchWeather.js';

import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

console.log(getGeoPosition)

getGeoPosition().then(function (position) {
  PNotify.alert(`${position.longitude}, ${position.latitude}`)
});
