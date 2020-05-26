// add Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoieHJ3IiwiYSI6ImNrOWZ2NDJoYzA5cTczZXBueHdmMWFqeWoifQ.xDiLhWviR4rm1ryO_6frlw";

var map = new mapboxgl.Map({
  container: 'map', // Specify the container ID
  style: 'mapbox://styles/mapbox/light-v10', // Specify which map style to use
  center: [-96.955487, 40.000594], // Specify the starting position
  zoom: 3.5, // Specify the starting zoom
});


// load data
var dataset = "https://raw.githubusercontent.com/xiaoranw8/zip-project/master/final_zip.csv";



$(document).ready(function() {

// end mark
});
