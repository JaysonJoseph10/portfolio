mapboxgl.accessToken = 'pk.eyJ1IjoiamF5c29uam9zZXBoMTAiLCJhIjoiY2pudXFoYWhsMGRmYzNxbnJpZGl2dnR0dCJ9.zrdHlpax4BLFcx1ynTsUeQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jaysonjoseph10/cjnv0cgug1bl82sju392f0glw',
  zoom: 9,
  center: [-.700, 52.800209]
});
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// add markers to map

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-1.149787,52.953739]
    },
    properties: {
      title: 'Doughnotts Nottingham',
      description: '26A Long Row W,<br>Nottingham,<br>NG1 2DR'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-1.478232, 52.923328]
    },
    properties: {
      title: 'Doughnotts Derby',
      description: '11 Sadler Gate,<br>Derby,<br>DE1 3NF'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-1.134114, 52.635576]
    },
    properties: {
      title: 'Doughnotts Leicester',
      description: '3 Silver Arcade,<br>Leicester,<br>LE1 5FA'
    }
  }]
};

geojson.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 30 }) // add popups
  .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
  .addTo(map);
});

// new mapboxgl.Marker(el)
//   .setLngLat(marker.geometry.coordinates)
//   .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//   .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
//   .addTo(map);
