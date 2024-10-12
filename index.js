var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">By João Preto </a> Contribuições De Jonh'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();

var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


navigator.geolocation.getCurrentPosition(posicionamento)


map.on('click', onMapClick);

function posicionamento(localizacao) {
    console.log(localizacao)
    console.log("Latitude", localizacao.coords.latitude)
    console.log("Longitude", localizacao.coords.longitude)

    var nos = L.marker([localizacao.coords.latitude, localizacao.coords.longitude]).addTo(map);
    nos.bindPopup("<b>Nos achou</b>").openPopup();

}
