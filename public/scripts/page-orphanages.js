//Lisbon coordinates in DD (decimal degree): lon 38.71667, lat -9.13333
const map = L.map("mapid").setView([38.73, -9.15], 14);

//creates and adds a titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

//creates a icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//a function that adds a marker and has a destructuring operator as parameter for the object that it will recieve
function addMarker({id, name, lat, lng}){
    // crates a popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>`)

    //creates and adds a market
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
}

//getting spans from div orphanages on html
const orphanagesSpan = document.querySelectorAll('.orphanages span')

//looping each span to extract information, generate objects, using each object information on function add marker
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng        
    }
    addMarker(orphanage)
})