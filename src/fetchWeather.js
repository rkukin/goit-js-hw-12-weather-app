'use strict';

export default function (coordinates) {

  // Location Name	query = New York	The standard way of passing a location name to the API.
  // Coordinates (Lat/Lon)	query = 40.7831,-73.9712

  const ACCESS_KEY = '02a147ec3a44e145b334fac4a63397f3';

  // return fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates}`)

  return new Promise((resolve, reject) => {
    fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates}`).then(response => {
      console.log();
      response.json().then(resp => {
        if (!resp.error)
        resolve(resp);
        else {
          reject(resp.error.info);
        }

      })
    });
  })
}
