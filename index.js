
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

//var leafletDraw = require(leaflet-draw); - not sure if needed yet 
//icons 
//worms 
//L.marker([49.6341, 8.3507]).addTo(map)
   // .bindPopup("Worms, 1171-1175")
//Mainz 
//L.marker([49.9929, 8.2473]).addTo(map)
    //.bindPopup("Mainz")

//geojson 
// The GeoJSON representing a point feature with a property of 'video' for the Vimeo iframe


require(["esri/map",
      "esri/toolbars/draw",
      "esri/layers/StreamLayer",
      "esri/InfoTemplate",
      "esri/graphic",
      "esri/symbols/SimpleFillSymbol",
      "esri/symbols/SimpleLineSymbol",
      "dojo/_base/Color",
      "dojo/on",
      "dojo/domReady!"
    ], function(Map, Draw, StreamLayer, InfoTemplate, Graphic, SimpleFillSymbol,
                SimpleLineSymbol, Color, on) {
      var map,
          drawTools,
          streamLayer;

      function init(){
        map = new Map("map", {
          basemap: "gray",
          center: [-117.98118, 34.00679],
          zoom: 10
        });

        drawTools = new Draw(map);

        //connect click events to UI buttons
        on(dojo.byId("cmdToggleStreamLayer"), "click", toggleStreamLayer);
        on(dojo.byId("cmdToggleSpatialFilter"), "click", toggleSpatialFilter);

        on(drawTools, "draw-end", function(evt){
          drawTools.deactivate();
          setSpatialFilter(evt.geometry);
          dojo.byId("cmdToggleSpatialFilter").value = "Clear Spatial Filter";
        });
      }

      /*************************************************
       *
       * Functions to add and remove Stream Layer
       *
       *************************************************/
      function toggleStreamLayer(){
        if(streamLayer){
          removeStreamLayer();
        }
        else{
          addStreamLayer();
        }
      }
      function addStreamLayer(){
        //url to stream service
        var svcUrl = dojo.byId("txtStreamUrl").value;

        //construct Stream Layer
        streamLayer = new StreamLayer(svcUrl, {
          purgeOptions: { displayCount: 10000 },
          infoTemplate: new InfoTemplate("Attributes", "${*}")
        });

        //When layer loads, register listeners for layer events and add layer to map
        streamLayer.on("load", function(){
          //Connect and Disconnect events
          streamLayer.on("connect", processConnect);
          streamLayer.on("disconnect", processDisconnect);

          //FilterChange event
          streamLayer.on("filter-change", processFilterChange);

          //Add layer to map
          map.addLayer(streamLayer);
        });
      }

      function removeStreamLayer(){
        if (streamLayer){
          map.removeLayer(streamLayer);
          streamLayer = null;
          map.graphics.clear();
        }
      }

      /*********************************************************
       *
       * Stream layer event handlers
       *
       *********************************************************/
      function processConnect(){
        dojo.byId("cmdToggleStreamLayer").value = "Remove Stream Layer";
        dojo.byId("txtStreamUrl").style.backgroundColor = "#008000";
        dojo.byId("cmdToggleSpatialFilter").value = "Draw Extent";
        dojo.byId("divFilterControls").style.display = "block";
      }

      function processDisconnect(){
        dojo.byId("cmdToggleStreamLayer").value = "Add Stream Layer";
        dojo.byId("txtStreamUrl").style.backgroundColor = "#8b0000";
        dojo.byId("divFilterControls").style.display = "none";
      }

      function processFilterChange(evt){
        //clear layer graphics
        streamLayer.clear();

        //the event contains a filter property that is the current filter set on the service
        //update map graphic to show current spatial filter
        var bbox = evt.filter.geometry;
        map.graphics.clear();
        if(bbox){
          map.graphics.add(new Graphic(bbox,
              new SimpleFillSymbol(SimpleFillSymbol.STYLE_NULL,
                  new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                      new Color( [5, 112, 176] ), 2),
                  new Color( [5, 112, 176, 0] ))));
        }
      }

      /************************************************
       *
       * Functions to set and clear spatial filter
       *
       ************************************************/
      function toggleSpatialFilter(){
        var currentSpatialFilter = null;
        if(streamLayer){
          currentSpatialFilter = streamLayer.getFilter().geometry;
        }
        if (!currentSpatialFilter){
          drawTools.activate(Draw.EXTENT);
        }
        else{
          setSpatialFilter(null);
          dojo.byId("cmdToggleSpatialFilter").value = "Draw Extent";
        }
      }

      //Set spatial filter on stream layer. Setting to null clears filter
      function setSpatialFilter(bbox){
        if (streamLayer){
          streamLayer.setGeometryDefinition(bbox);
        }
      }

      init();
    });