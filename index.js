

var map = L.map('map').setView([51.1657, 10.4515], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
measureControl.addTo(map);


a<link href="css/style.css" rel="stylesheet">


<button onclick="togglePoints();">toggle some data!</button>

<script>
function init() {
  var data1 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            1.0546875,
            21.94304553343818
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            11.6015625,
            1.4061088354351594
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            23.90625,
            26.11598592533351
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            30.234375,
            -0.7031073524364783
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            17.9296875,
            15.623036831528264
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.390625,
            -14.264383087562637
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            44.29687499999999,
            4.214943141390651
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            33.046875,
            -18.646245142670608
          ]
        }
      }
    ]
  };
  var data2 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            -8.7890625,
            14.944784875088372
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            25.6640625,
            -10.833305983642491
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            49.92187499999999,
            11.178401873711785
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},       
        "geometry": {
          "type": "Point",
          "coordinates": [
            46.05468749999999,
            -19.973348786110602
          ]
        }
      }
    ]
  };
  // initialize map object with view
  window.map = L.map('map').setView([0, 0], 3);
  // add tile layer
  L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  // add multiple data layers (defined above ... sloppy!)
  window.data1 = L.geoJson(data1).addTo(map);
  window.data2 = L.geoJson(data2).addTo(map);
  // toggle variable to use in togglePoints();
  window.toggle = false;
}
function togglePoints() {
  if(!toggle) {
    map.removeLayer(data1);
  } else {
    map.addLayer(data1);
  }
  toggle = !toggle;
}
window.onload = init();