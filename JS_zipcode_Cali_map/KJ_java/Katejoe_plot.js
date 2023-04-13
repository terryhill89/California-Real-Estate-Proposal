d3.json("dem.json").then(function(data) {
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
    //buildBubbleChart(medianHomePrice, passingStudents, numberStudents);
}
function buildBarChart(Zipcode, selectedField, //County, 
Incomepercapita, Medianhouseholdincome, Poverty, Medianage, Medianhomevalue, TotalPopulation, Transitpublictransport) {
    let trace1 = {
        x: Zipcode,
        y: eval(selectedField),
        type: "bar",
        mode: "group",
        //text: County
    };
    let layout = {
        xaxis: {
            title: "Zipcode"
        },
        yaxis: {
            title: selectedField
        }
        };
        let traceData = [trace1];
        Plotly.newPlot("bar", traceData, layout);
}
function optionChanged(selectedField) {
    d3.json("dem.json").then(function(data) {
        generateData(data, selectedField);
    });
};