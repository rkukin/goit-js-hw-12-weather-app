'use strict';


const getGeoPosition = function () {
  const options = {
    maximumAge: 1800000,
    enableHighAccuracy: true,
  };
  return new Promise((resolve, reject) => {
    window.onload = function() {
      let geoSuccess = function(position) {
        let startPos = position;
        // console.log(startPos.coords);
        resolve(startPos.coords);
      };
      let geoError = function() {
        reject('Please use input')
        // PNotify.alert('');
      };



      navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
    };

  })
}
export default getGeoPosition;

