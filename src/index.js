'use strict';

import './styles.css';
import getGeoPosition from "./getGeoPosition";
import fetchWeather from "./fetchWeather";

import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

getGeoPosition()
  .then(position => {
  PNotify.alert(`${position.longitude}, ${position.latitude}`)
    // fetchWeather(position.longitude, position.latitude)
})
  .catch(error=> PNotify.alert(error));

