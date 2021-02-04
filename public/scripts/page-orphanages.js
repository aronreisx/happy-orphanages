//Lisbon coordinates in DD (decimal degree): lon 38.71667, lat -9.13333
const map = L.map("mapid").setView([38.73, -9.15], 14);

//creates and adds a titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//creates a icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// crates a popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//creates and adds a market
L.marker([38.73, -9.15], { icon })
.addTo(map)
.bindPopup(popup);