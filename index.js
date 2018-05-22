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

//var leafletDraw = require(leaflet-draw); - not sure if needed yet 
//icons 
//worms 
L.marker([49.6341, 8.3507]).addTo(map)
    .bindPopup("Worms, 1171-1175")
//Mainz 
L.marker([49.9929, 8.2473]).addTo(map)
    .bindPopup("Mainz")

//geojson 
var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [49.6341, 8.3507],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [49.6341, 8.3507],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];


L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Locations of Hausen': return {color: "#ff0000"};
            case 'The Jewish Pogroms':   return {color: "#0000ff"};
        }
    }
}).addTo(map);

