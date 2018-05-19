

var map = L.map('map').setView([51.1657, 10.4515], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
measureControl.addTo(map);


  // initialize map object with view
  window.map = L.map('map').setView([0, 0], 3);
  // add tile layer
  L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  // add multiple data layers (defined above ... sloppy!)
  window.data1 = L.geoJson(data1).addTo(map);
  window.data2 = L.geoJson(data2).addTo(map);
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
window.onload = init();