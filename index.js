//variables
var characters = []; 



var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});



// initialize map object with view
var map = L.map('map', { measureControl:true}, {drawControl: true}).setView([49.8857, 7.5515], 8);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community', 
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    attribution: 'L.geoJSON(geojsonFeature).addTo(map);'
}).addTo(map);

 
$(".legend-container").append( $("#legend") );
$(".legend-toggle").append( "<i class='legend-toggle-icon fa fa-info fa-2x' style='color: #000'></i>" );

/*Legend specific*/
var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Tegnforklaring</h4>";
  div.innerHTML += '<i style="background: #477AC2"></i><span>Spring</span><br>';
  div.innerHTML += '<i style="background: #448D40"></i><span>Summer</span><br>';
  div.innerHTML += '<i style="background: #E6E696"></i><span>Fall</span><br>';
  div.innerHTML += '<i style="background: #E8E6E0"></i><span>Winter</span><br>';
  return div;
};

legend.addTo(map);

//localities hausen map 1 

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