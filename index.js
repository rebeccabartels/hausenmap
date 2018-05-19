//variables 

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

  // initialize map object with view

var map = L.map('map', { measureControl:true}, {drawControl: true}).setView([51.1657, 10.4515], 4);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community', 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    attribution: 'L.geoJSON(geojsonFeature).addTo(map);'
}).addTo(map);

//var leafletDraw = require(leaflet-draw);


Esri_WorldImagery.addTo(map);
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


  // add multiple data layers (defined above ... sloppy!)
  //window.data1 = L.geoJson(data1).addTo(map);
  //window.data2 = L.geoJson(data2).addTo(map);


  // toggle variable to use in togglePoints();
  window.toggle = false;

function togglePoints() {
  if(!toggle) {
    map.removeLayer(data1);
  } else {
    map.addLayer(data1);
  }
  toggle = !toggle;
}
//window.onload = init();

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [52.5097, 13.3728]
    }
};




