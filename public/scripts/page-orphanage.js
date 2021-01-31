const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

//Lisbon coordinates in DD (decimal degree): lon 38.71667, lat -9.13333
const map = L.map("mapid", options).setView([38.73, -9.15], 14);

//creates and adds a titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//creates a icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//creates and adds a market
L.marker([38.73, -9.15], { icon }).addTo(map);

/* Image gallery */

function selectImage(event) {
  //stores the current clicked button, known as currentTarget
  const button = event.currentTarget;

  //remove all the active classes
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //select currentTarget button image

  //upgrade image container with currentTarget button image


  //add active class for the currentTarget button
  button.classList.add('active')

}