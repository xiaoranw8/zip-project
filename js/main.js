// add Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoieHJ3IiwiYSI6ImNrOWZ2NDJoYzA5cTczZXBueHdmMWFqeWoifQ.xDiLhWviR4rm1ryO_6frlw";

var map = new mapboxgl.Map({
  container: 'map', // Specify the container ID
  style: 'mapbox://styles/mapbox/light-v10', // Specify which map style to use
  center: [-96.955487, 40.000594], // Specify the starting position
  zoom: 3.5, // Specify the starting zoom
});


// load data
var dataset = "https://raw.githubusercontent.com/xiaoranw8/zip-project/master/final_zip.geojson";



$(document).ready(function() {
  map.on('load', function(){

  // add point layer
  map.addSource('zipData', {
    type: 'geojson',
    data: dataset
  });

  map.addLayer({
    'id': 'zipData',
    'type': 'circle',
    'source': 'zipData',
    'layout': {},
    'paint': {
      'circle-radius': 2,
      'circle-color':  ['match', ['get', 'Status'], 'Full Service', '#FFB14E', 'Curbside Only', '#349E97', 'In home room of choice, no handling or removal of existing bedding', '#FF8587', /* other */ '#030204'],
      'circle-opacity': 1
    }
  });

  map.on('click', 'zipData', function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var zipcode = e.features[0].properties.Deliver_Zip;
    var zone = e.features[0].properties.Zone;
    var status = e.features[0].properties.Status;
    var current_info = 'Zip code: ' + zipcode + "<br>" + "Zone: "+ zone + "<br>"  + 'Hub status: ' + status;

    // click to zoom in
    map.flyTo({
      center: e.features[0].geometry.coordinates,
      zoom: 6});

    new mapboxgl.Popup()
    .setLngLat(coordinates)
    .setHTML(current_info)
    .addTo(map);

  });


// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'zipData', function() {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', 'zipData', function() {
map.getCanvas().style.cursor = '';
});

// end mark
  });
});
