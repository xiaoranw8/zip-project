// add Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoieHJ3IiwiYSI6ImNrOWZ2NDJoYzA5cTczZXBueHdmMWFqeWoifQ.xDiLhWviR4rm1ryO_6frlw";

var map = new mapboxgl.Map({
  container: 'map', // Specify the container ID
  style: 'mapbox://styles/mapbox/light-v10', // Specify which map style to use
  center: [-96.955487, 40.000594], // Specify the starting position
  zoom: 3.5, // Specify the starting zoom
//  maxZoom: 11 // set max zoom level to ensure mapFlyTo always works
});

// load data
//define variables and dataset links
var dataset = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/"+yesterday+".csv";
var markers;


$(document).ready(function() {
  map.on('load', function(){

// end mark
  });
});
