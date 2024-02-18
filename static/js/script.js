
let map;
let coordsArray = [];
let coordsString = document.getElementById('coords').innerText;


async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

    var coords = coordsString.match(/{lat: ([-\d.]+), lng: ([-\d.]+)}/g);

    coords.forEach(function(coord) {
        // Extract latitude and longitude from each coordinate string
        var matches = coord.match(/{lat: ([-\d.]+), lng: ([-\d.]+)}/);
        var lat = parseFloat(matches[1]);
        var lng = parseFloat(matches[2]);

        coordsArray.push({lat: lat, lng: lng});
    });


    map = new Map(document.getElementById("map"), {
        center: { lat: 50.07991, lng: -5.69756 },
        zoom: 4,
    });

    for (let i=0; i < coordsArray.length; i++){
        const marker = new google.maps.Marker({
            position: coordsArray[i],
            map,
            title: "Uluru (Ayers Rock)",
          });
        marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
          });
    }

}


initMap();