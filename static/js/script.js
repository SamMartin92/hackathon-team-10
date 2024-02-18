// Initializes Google maps and displays map
let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");


    map = new Map(document.getElementById("map"), {
        center: { lat: 50.07991, lng: -5.69756 },
        zoom: 8,
    });
    new google.maps.Marker({
        position: { lat: 50.07991, lng: -5.69756 },
        map: map
    });

}

initMap();