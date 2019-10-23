'use strict';

import './styles.css';
import getGeoPosition from './getGeoPosition';
import fetchWeather from './fetchWeather';

import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';

const weatherSection = document.querySelector('#weather');
const cityForm = document.querySelector('#search-form');
const cityName = document.querySelector('[name="city"]');

const weatherIcon = document.querySelector('.icon');
const locationValue = document.querySelector('[data-field=location]');
const tempValue = document.querySelector('[data-field=temp]');
const humidityValue = document.querySelector('[data-field=humidity]');
const windValue = document.querySelector('[data-field=wind]');
const conditionsValue = document.querySelector('[data-field=conditions]');

// console.log(locationValue.innerHTML);

function renderWeather(weatherData) {
  weatherSection.classList.remove('is-hidden');
  weatherIcon.setAttribute('src', weatherData.current.weather_icons[0]);
  weatherIcon.setAttribute('alt', weatherData.current.weather_descriptions[0]);
  locationValue.innerHTML = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
  tempValue.innerHTML = weatherData.current.temperature;
  humidityValue.innerHTML = weatherData.current.humidity;
  windValue.innerHTML = `${weatherData.current.wind_speed} kph, ${weatherData.current.wind_dir}`;
  conditionsValue.innerHTML = weatherData.current.weather_descriptions[0];
}

function hideWaetherSection() {
  weatherSection.classList.add('is-hidden');
}

getGeoPosition()
  .then(position => {
    fetchWeather(` ${position.latitude}, ${position.longitude}`).then(data => {
      renderWeather(data);
    });
  })
  .catch(error => {
    PNotify.alert(error);
    hideWaetherSection();
  });

cityForm.addEventListener('submit', e => {
  e.preventDefault();
  fetchWeather(cityName.value)
    .then(data => {
      renderWeather(data);
    })
    .catch(error => {
      PNotify.alert(error);
      hideWaetherSection();
    });
});
