function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 52.068, lng: -1.773},
        zoom: 7,
        mapTypeId: "hybrid",
    });
  
    // Define the symbol, using one of the predefined paths ('CIRCLE')
    // supplied by the Google Maps JavaScript API.
    const lineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 8,
      strokeColor: "#393",
    };
  
    // Create the polyline and add the symbol to it via the 'icons' property.
    const line = new google.maps.Polyline({
      path: [
        {lat: 50.854, lng: -0.555},
        {lat: 51.504, lng: -0.124},
        {lat: 51.463, lng: -0.650},
        {lat: 51.381, lng: -2.359},
        {lat: 51.454, lng: -2.627},
        {lat: 51.449, lng: -2.608},
        {lat: 51.452, lng: -2.592},
        {lat: 51.415, lng: -2.474},
        {lat: 53.382, lng: -2.937},
        {lat: 53.548, lng: -3.102},
        {lat: 53.430, lng: -2.960},
        {lat: 51.178, lng: -1.826},
        {lat: 50.816, lng: -0.1389},
      ],
      icons: [
        {
          icon: lineSymbol,
          offset: "100%",
        },
      ],
      map: map,
    });
  
 animateCircle(line);
}
  
// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.
function animateCircle(line) {
  let count = 0;
     window.setInterval(() => {
     count = (count + 1) % 200;
  
     const icons = line.get("icons");
  
     icons[0].offset = count / 2 + "%";
     line.set("icons", icons);
    }, 80);
}

window.initMap = initMap;
