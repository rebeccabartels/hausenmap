//variables 
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var geojsonLayer = new L.GeoJSON();

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
var user_profile = { 
  "username" : "SammyShark",
  "social_media" : [
    {
      "description" : "twitter",
      "link" : "https://twitter.com/digitalocean"
    },
    {
      "description" : "facebook",
      "link" : "https://www.facebook.com/DigitalOceanCloudHosting"
    },
    {
      "description" : "github",
      "link" : "https://github.com/digitalocean"
    }
  ]
}

var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}';

var obj = JSON.parse(s)
