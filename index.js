
//variables
var characters = []; 



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

 //- not sure if needed yet 
//icons 
//worms 
L.marker([49.6341, 8.3507]).addTo(map)
    .bindPopup("Worms, 1171-1175")
//Mainz 
L.marker([49.9929, 8.2473]).addTo(map)
    .bindPopup("Mainz, ")

L.marker([49.7500, 6.6371]).addTo(map)
    .bindPopup("Trier")

L.marker([49.9667, 7.9045]).addTo(map)
    .bindPopup("Bingen")

L.marker([49.4874, 8.466]).addTo(map)
    .bindPopup("Mannheim")

L.marker([49.8977, 7.9283]).addTo(map)
    .bindPopup("Gensingen")

L.marker([49.7157, 8.472]).addTo(map)
    .bindPopup("Groß-Rohrheim")

L.marker([49.7157, 8.472]).addTo(map)
    .bindPopup("Groß-Rohrheim")

L.marker([49.9204, 7.0194]).addTo(map)
    .bindPopup("Brauneberg/Lieser")


L.marker([49.7943, 8.258]).addTo(map)
    .bindPopup("Dolgesheim")

L.marker([49.8395, 8.3530]).addTo(map)
    .bindPopup("Dienheim")

L.marker([49.7207, 8.3993]).addTo(map)
    .bindPopup("Worms-Ibersheim")

L.marker([49.8519, 8.3602]).addTo(map)
    .bindPopup("Oppenheim")



