
let map;
let coordsArray = []

const locations = [
  { id: 6, name: "Banff National Park: A Majestic Alpine Love Affair", coords: { lat: 51.1784, lng: -115.5708 } },
  { id: 22, name: "Barcelona: Catalonian Tapestry of Romantic Discoveries", coords: { lat: 41.3851, lng: 2.1734 } },
  { id: 15, name: "Bibury: A Picturesque Haven for Romantic Escapades", coords: { lat: 51.7578, lng: -1.7131 } },
  { id: 18, name: "Bigbury-on-Sea: A Coastal Haven for Seaside Romance", coords: { lat: 50.2792, lng: -3.8809 } },
  { id: 2, name: "Bora Bora: A Romantic Paradise", coords: { lat: -16.5004, lng: -151.7415 } },
  { id: 14, name: "Brecon Beacons: A Romantic Odyssey Amidst Nature's Grandeur", coords: { lat: 51.8810, lng: -3.4436 } },
  { id: 11, name: "Cambridge: A Romantic Symphony of Academia and Elegance", coords: { lat: 52.2053, lng: 0.1218 } },
  { id: 9, name: "Cappadocia: A Surreal Canvas for Love in the Skies", coords: { lat: 38.6431, lng: 34.8303 } },
  { id: 21, name: "Cinque Terre: Cliffside Villages of Romantic Splendor", coords: { lat: 44.1284, lng: 9.7124 } },
  { id: 10, name: "Edinburgh: A Regal Tapestry of Love Amidst the Hills", coords: { lat: 55.9533, lng: -3.1883 } },
  { id: 23, name: "Hawaii: Pacific Paradise of Eternal Romance", coords: { lat: 19.8968, lng: -155.5828 } },
  { id: 19, name: "Isle of Skye: A Highland Symphony of Romance", coords: { lat: 57.4124, lng: -6.1963 } },
  { id: 20, name: "Jersey: A Coastal Tapestry of Romance", coords: { lat: 49.2144, lng: -2.1313 } },
  { id: 5, name: "Kyoto: Tranquil Gardens and Historic Machiya", coords: { lat: 35.0116, lng: 135.7681 } },
  { id: 12, name: "Lake District: A Majestic Canvas of Nature's Romance", coords: { lat: 54.4609, lng: -3.0886 } },
  { id: 16, name: "Loch Lomond: A Highland Serenade for Two", coords: { lat: 56.1052, lng: -4.6297 } },
  { id: 26, name: "Melbourne: Artsy Laneways and Culinary Delights", coords: { lat: -37.8136, lng: 144.9631 } },
  { id: 4, name: "Paris: The City of Love and Timeless Elegance", coords: { lat: 48.8566, lng: 2.3522 } },
  { id: 8, name: "Prague: A Fairytale Romance on the Vltava", coords: { lat: 50.0755, lng: 14.4378 } },
  { id: 24, name: "Queenstown: Southern Hemisphere's Jewel of Romance", coords: { lat: -45.0312, lng: 168.6626 } },
  { id: 3, name: "Santorini: A Captivating Aegean Romance", coords: { lat: 36.3932, lng: 25.4615 } },
  { id: 17, name: "Scottish Highlands: A Romantic Odyssey Amidst Majestic Landscapes", coords: { lat: 57.3061, lng: -4.7410 } },
  { id: 7, name: "Sedona: A Tapestry of Red Rocks and Desert Romance", coords: { lat: 34.8697, lng: -111.7601 } },
  { id: 25, name: "Sydney: Harbor Elegance and Urban Sophistication", coords: { lat: -33.8688, lng: 151.2093 } },
  { id: 1, name: "Venice: A Serenade on the Canals", coords: { lat: 45.4408, lng: 12.3155 } },
  { id: 13, name: "York: A Tapestry of History and Romance Unveiled", coords: { lat: 53.9591, lng: -1.0812 } }
];


async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    for (let i=0; i < locations.length; i++){
      coordsArray.push(locations[i].coords)
    }

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
          const infowindow = new google.maps.InfoWindow({
            content: `   
            <a href="/location/${locations[i].id}/">${locations[i].name}</a>`,
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