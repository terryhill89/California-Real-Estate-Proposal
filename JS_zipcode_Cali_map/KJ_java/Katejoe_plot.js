d3.json("JS_zipcode_Cali_map/KJ_java/dem.json").then(function(data) {
    console.log(data);
    generateData(data, "Poverty");
});
function generateData(data, selectedField) {
    var Zipcode= []
    //var County = []
    var Incomepercapita = []
    var Medianhouseholdincome = []
    var Poverty = []
    var Medianage = []
    var Medianhomevalue = []
    var TotalPopulation = []
    var Transitpublictransport =[]

    for (let i = 0; i < data.length; i++) {
        Zipcode.push(data[i].Zipcode);
        //County.push(data[i].County);
        Incomepercapita.push(data[i].Income_per_capita);
        Medianhouseholdincome.push(data[i].Median_household_income);
        Poverty.push(data[i].Poverty);
        Medianage.push(data[i].Median_age);
        Medianhomevalue.push(data[i].Median_home_value);
        TotalPopulation.push(data[i].Total_Population);
        Transitpublictransport.push(data[i].Transit_public_transport);
        
    }
    buildBarChart(Zipcode, selectedField, //County, 
    Incomepercapita, Medianhouseholdincome, Poverty, Medianage, Medianhomevalue, TotalPopulation, Transitpublictransport);

}
function buildBarChart(Zipcode, selectedField, //County, 
Incomepercapita, Medianhouseholdincome, Poverty, Medianage, Medianhomevalue, TotalPopulation, Transitpublictransport) {
    var trace = {
        x: Zipcode,
        y: eval(selectedField),
        type: 'bar',
        mode: 'markers',
        text: Zipcode,
        marker: {
         color: 'Indigo',
       }
    }
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
d3.selectAll("#selectField").on("change", optionChanged)

function optionChanged() {
    let menu = d3.select("#selectField");

    let selectedField = menu.property("value")

    d3.json("JS_zipcode_Cali_map/KJ_java/dem.json").then(function(data) {
        generateData(data, selectedField);
    });
};



