// Function to add commas as thousands separators
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
    //create the lowPriceLayer 
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

      var circle;
      if (medianPrice < 850000) {
        circle = L.circleMarker([lat, lng], {
          radius: 5,
          fillColor: "red",
          color: "black",
          weight: 1,
          opacity: 1,
          fillOpacity: 0.7
        }).bindPopup("Zip Code: " + zipCode + "<br>City: " + city + "<br><strong><span style='font-size: 1.2em;'>Median Price: $" + numberWithCommas(medianPrice) + "</span></strong><hr>Population (zipcode): " + numberWithCommas(population) + "<br>Density (zipcode): " + density + " persons per sq. mile" + "<hr>County: " + county + "<br>County Seat: " + county_seat + "<hr>Area (county): " + numberWithCommas(area) + "<hr>GDP (county): $" + numberWithCommas(gdp) + "<br>GDP Rank: " + gdp_rank + " of 58");


       
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
        }).bindPopup("Zip Code: " + zipCode + "<br>City: " + city + "<br><strong><span style='font-size: 1.2em;'>Median Price: $" + numberWithCommas(medianPrice) + "</span></strong><hr>Population (zipcode): " + numberWithCommas(population) + "<br>Density (zipcode): " + density + " persons per sq. mile" + "<hr>County: " + county + "<br>County Seat: " + county_seat + "<hr>Area (county): " + numberWithCommas(area) + "<hr>GDP (county): $" + numberWithCommas(gdp) + "<br>GDP Rank: " + gdp_rank + " of 58");

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
        }).bindPopup("Zip Code: " + zipCode + "<br>City: " + city + "<br><strong><span style='font-size: 1.2em;'>Median Price: $" + numberWithCommas(medianPrice) + "</span></strong><hr>Population (zipcode): " + numberWithCommas(population) + "<br>Density (zipcode): " + density + " persons per sq. mile" + "<hr>County: " + county + "<br>County Seat: " + county_seat + "<hr>Area (county): " + numberWithCommas(area) + "<hr>GDP (county): $" + numberWithCommas(gdp) + "<br>GDP Rank: " + gdp_rank + " of 58");

        //add the highPriceLayer
        highPriceLayer.addLayer(circle);
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
    d3.json('gz_2010_us_040_00_500k.json')
      .then(statesData => {
        L.geoJSON(statesData, {
          filter: feature => feature.properties.NAME == 'California',
          style: style
        }).addTo(map);
      });
  });


