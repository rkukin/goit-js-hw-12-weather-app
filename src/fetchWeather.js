'use strict';

export default function (coordinates) {

  // Location Name	query = New York	The standard way of passing a location name to the API.
  // Coordinates (Lat/Lon)	query = 40.7831,-73.9712

  const ACCESS_KEY = '02a147ec3a44e145b334fac4a63397f3\n';
  fetch(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${coordinates},`
  .then(response=>{
    if (response.ok) return response.json();

    throw new Error(`Error while fetching: ${response.statusText}`);
  })
    .then(data=> {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    }))
}
