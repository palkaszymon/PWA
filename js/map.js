function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMap);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showMap(position) {
    var mapOptions = {
        center: [position.coords.latitude, position.coords.longitude],
        zoom: 15
    }
    var map = new L.map('map', mapOptions);
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
    marker.bindPopup("You are here").openPopup();
}
getLocation()