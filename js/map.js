var map;

document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    getLocation();
});

function initializeMap() {
    map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    map.setView([latitude, longitude], 13);
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('You are here').openPopup();
}

function showError(error) {
    console.log("Error")
}
