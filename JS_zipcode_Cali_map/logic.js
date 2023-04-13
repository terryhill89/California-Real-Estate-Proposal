// Function to add commas as thousands separators
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to create Awesome Markers
function createAwesomeMarker(lat, lng, iconColor, iconPrefix, icon, popupContent, iconSize) {
  var marker = L.marker([lat, lng], {
    icon: L.AwesomeMarkers.icon({
      icon: icon,
      prefix: iconPrefix,
      markerColor: iconColor,
      iconSize: iconSize 
    })
  }).bindPopup(popupContent);

  return marker;
}

// Load the JSON data using d3.json()
d3.csv('JS_zipcode_Cali_map/median_prices.csv')
  .then(data => {
    // Define the layers
    var lowPriceLayer = L.layerGroup();
    var mediumPriceLayer = L.layerGroup();
    var highPriceLayer = L.layerGroup();
    var heatArray = [];

    // Loop through the data and add the markers to the appropriate layer
    for (var i = 0; i < data.length; i++) {
      var zipCode = data[i].zipcode;
      var medianPrice = data[i].median;
      var mortgage = data[i].mortgage;
      var lat = data[i].lat_x;
      var lng = data[i].lng_x;
      var county = data[i].county;
      var county_seat = data[i].county_seat;
      var density = data[i].density;
      var population = data[i].population;
      var area = data[i].area;
      var gdp = data[i].gdp_usd;
      var gdp_rank = data[i].gdp_rank;
      var city = data[i].city

      var popupContent = "Zip Code: " + zipCode + "<br>City: " + city + "<br><strong><span style='font-size: 1.2em;'>Median Price: $" + numberWithCommas(medianPrice) + "</span></strong><hr>Population (zipcode): " + numberWithCommas(population) + "<br>Density (zipcode): " + density + " persons per sq. mile" + "<hr>County: " + county + "<br>County Seat: " + county_seat + "<hr>Area (county): " + numberWithCommas(area) + "<hr>GDP (county): $" + numberWithCommas(gdp) + "<br>GDP Rank: " + gdp_rank + " of 58";

      var marker;
      if (medianPrice < 850000) {
        marker = L.circleMarker([lat, lng], {
          radius: 5,
          fillColor: "red",
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7
        }).bindPopup(popupContent);
        lowPriceLayer.addLayer(marker);
      } else if (medianPrice < 1400000) {
        marker = createAwesomeMarker(lat, lng, 'lightblue', 'fa', 'windows', popupContent, [20, 30]);
        mediumPriceLayer.addLayer(marker);
      } else {
        marker = createAwesomeMarker(lat, lng, 'lightgreen', 'fa', 'apple', popupContent, [30, 42]);
        highPriceLayer.addLayer(marker);
      }
    
      // Add the location coords for the heat array
      heatArray.push([lat, lng, mortgage]);
    }
    // Define the base layers
    var streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var topoLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org/about">OpenTopoMap</a> contributors'
    });

    // Define the base layers
    let baseLayers = {
      "StreetMap": streetLayer,
      "Topography": topoLayer
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

    // Add a definitive border for the State of California
    function style(feature) {
      return {
        color: 'orangered',
        weight: 5,
        opacity: 1,
        fillOpacity: 0
      };
    }

    // Load the JSON data using d3.json()
    d3.json('JS_zipcode_Cali_map/gz_2010_us_040_00_500k.json')
      .then(statesData => {
        L.geoJSON(statesData, {
          filter: feature => feature.properties.NAME == 'California',
          style: style
        }).addTo(map);
      });
  });