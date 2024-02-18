
let map;
let coordsArray = [];
let coordsString = document.getElementById('coords').innerText;


async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    var coords = coordsString.match(/{lat: ([-\d.]+), lng: ([-\d.]+)}/g);

    coords.forEach(function(coord) {
        // Extract latitude and longitude from each coordinate string
        var matches = coord.match(/{lat: ([-\d.]+), lng: ([-\d.]+)}/);
        var lat = parseFloat(matches[1]);
        var lng = parseFloat(matches[2]);

        coordsArray.push({lat: lat, lng: lng});
    });

    console.log(coordsArray)

    map = new Map(document.getElementById("map"), {
        center: { lat: 50.07991, lng: -5.69756 },
        zoom: 8,
    });

    for (let i=0; i < coordsArray.length; i++){
        new google.maps.Marker({
            position: coordsArray[i],
            map: map
        });
    }

}


initMap();