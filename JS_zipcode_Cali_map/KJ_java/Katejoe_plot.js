d3.json("dem.json").then(function(data) {
    console.log(data);
    generateData(data, "Poverty");
});
function generateData(data, selectedField) {
    var Zipcode= []
    var Incomepercapita = []
    var Medianhouseholdincome = []
    var Poverty = []
    var Medianage = []
    var Medianhomevalue = []
    var TotalPopulation = []
    var Transitpublictransport =[]

    for (let i = 0; i < data.length; i++) {
        Zipcode.push(data[i].Zipcode);
        Incomepercapita.push(data[i].Income_per_capita);
        Medianhouseholdincome.push(data[i].Median_household_income);
        Poverty.push(data[i].Poverty);
        Medianage.push(data[i].Median_age);
        Medianhomevalue.push(data[i].Median_home_value);
        TotalPopulation.push(data[i].Total_Population);
        Transitpublictransport.push(data[i].Transit_public_transport);
        
    }
    buildLineChart(Zipcode, selectedField, Incomepercapita, Medianhouseholdincome, Poverty, Medianage, Medianhomevalue, TotalPopulation, Transitpublictransport);
    
}
function buildLineChart(Zipcode, selectedField, Incomepercapita, Medianhouseholdincome, Poverty, Medianage, Medianhomevalue, TotalPopulation, Transitpublictransport) {
    
    var trace = {
        x: Zipcode,
        y: eval(selectedField),
        type: 'bar',
        mode: 'markers',
        text: Zipcode,
        marker: {
          color: 'Indigo'
        }
      };
      
      // Define layout object
      var layout = {
        title: 'Demographics',
        xaxis: {
          title: 'Zipcode',
          type: 'category'
        },
        yaxis: {
          title: selectedField
        }
      };
      
      // Create array of trace objects
      var data = [trace];
      
      // Create line chart
      Plotly.newPlot('chart', data, layout);
 
}
function optionChanged(selectedField) {
    d3.json("dem.json").then(function(data) {
        generateData(data, selectedField);
    });
};



