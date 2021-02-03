//Creates map
const map = L.map("mapid").setView([38.73, -9.15], 14)

//creates and adds a titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map)

//creates a icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker

//creates and adds a marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    //remove icon
    marker && map.removeLayer(marker)
    
    //add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
})