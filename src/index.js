'use strict';

import './styles.css';
import getGeoPosition from "./getGeoPosition";
import fetchWeather from "./fetchWeather";

import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

const weatherSection = document.querySelector('#weather');
const cityForm = document.querySelector('#search-form');
const cityName = document.querySelector('[name="city"]');

const locationValue = document.querySelector('[data-field=location]');
const tempValue = document.querySelector('[data-field=temp]');
const humidityValue = document.querySelector('[data-field=humidity]');
const windValue = document.querySelector('[data-field=wind]');
const conditionsValue = document.querySelector('[data-field=conditions]');

// console.log(locationValue.innerHTML);

getGeoPosition()
  .then(position => {
    fetchWeather(` ${position.latitude}, ${position.longitude}`)
      .then(data => {
        console.log(data);
      })
})
  .catch(error=> PNotify.alert(error));

cityForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  fetchWeather(cityName.value).then(data => {
      console.log(data)
  }).catch(error => PNotify.alert(error)
  );
});
