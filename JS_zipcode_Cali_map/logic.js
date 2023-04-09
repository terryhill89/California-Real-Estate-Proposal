// Load the JSON data using d3.json()
d3.json('table2.json')
  .then(data => {
    // Define the layers
    var lowPriceLayer = L.layerGroup();
    var mediumPriceLayer = L.layerGroup();
    var highPriceLayer = L.layerGroup();
    var heatArray = [];

    // Loop through the data and add the markers to the appropriate layer
    //create the lowPriceLayer 
    for (var i = 0; i < data.length; i++) {
      var zipCode = data[i].zip_code;
      var medianPrice = data[i].Median;
      var mortgage = data[i].mortgage;
      var lat = data[i].lat;
      var lng = data[i].lng;

      var circle;
      if (medianPrice < 850000) {
        circle = L.circleMarker([lat, lng], {
          radius: 5,
          fillColor: "red",
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7
        }).bindPopup("Zip Code: " + zipCode + "<br>Median Price: $" + medianPrice);

        //add the lowPriceLayer
        lowPriceLayer.addLayer(circle);
      }
      //create the mediumPriceLayer 
      else if (medianPrice < 1400000) {
        circle = L.circleMarker([lat, lng], {
          radius: 10,
          fillColor: "yellow",
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }).bindPopup("Zip Code: " + zipCode + "<br>Median Price: $" + medianPrice);

        //add the mediumPriceLayer
        mediumPriceLayer.addLayer(circle);
      }
      //create the highPriceLayer  
      else {
        circle = L.circleMarker([lat, lng], {
          radius: 15,
          fillColor: "green",
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        }).bindPopup("Zip Code: " + zipCode + "<br>Median Price: $" + medianPrice);

        //add the highPriceLayer
        highPriceLayer.addLayer(circle);
      }

      // Add the location coords for the heat array
      heatArray.push([lat, lng, mortgage]);
    }

    // Define the base layers
    var baseLayers = {
      "StreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    };

    // Define the overlay layers
    var overlayLayers = {
      "Median Price < $850k": lowPriceLayer,
      "Median Price $850k-$1.4M": mediumPriceLayer,
      "Median Price > $1.4M": highPriceLayer,
      "Mortgage Heatmap": L.heatLayer(heatArray, {
        radius: 20,
        blur: 35,
        maxZoom: 20,
        max: 0.5
      })
    };

    // Create the map with the layers
    var map = L.map('map', {
      center: [37.25, -119.75],
      zoom: 6,
      layers: [baseLayers.StreetMap]
});

// Add layer control
L.control.layers(baseLayers, overlayLayers).addTo(map);
});
