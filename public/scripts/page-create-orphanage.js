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

//initializing var
let marker

//creates and adds a marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)
    
    //add icon layer
    marker = L.marker([lat,lng], { icon }).addTo(map)
})

//add new photo field
function addPhotoField(){
    //get photo container #images
    const container = document.querySelector('#images')

    //get container for duplication .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //make clone from last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verify if field is clean (if true don't to #images container)
    const input = newFieldContainer.children[0]

    //if input is empty, funtion is closed by using the return. After return, noting is executed
    if(input.value == '') {
        return
    }

    //clean field before add to #images container
    input.value = ''

    //add clone to the image container #images
    container.appendChild(newFieldContainer)
}

//currentTarged returns html tag that is being clicked (onclick attribute must be on html tag)
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    
    if(fieldsContainer.length < 2) {
        //cleaning first .new-upload field value using parentNode
        span.parentNode.childre[0].value = ''
        // Using return inside if to break the operation case True, return will exit function
        return
    }

    //delete .new-upload field
    span.parentNode.remove()
}

//open-on-weekends - select yes or no button
function toggleSelect(event) {
    //remove .active class from each button inside .button-select
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))
    
    //insert class '.active' to clicked button (yes or no)
    const button = event.currentTarget
    button.classList.add('active')

    //update hidden input with choosen value selected
    const input = document.querySelector('[name="open_on_weekends"]')
    //defines input value as same as data-value
    input.value = button.dataset.value
}