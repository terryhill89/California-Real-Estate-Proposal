const english_2021 = "Data_and_code_creating_database/education_Kyra/english_2021.json"
const math_2021 = "Data_and_code_creating_database/education_Kyra/math_2021.json"
const english_2022 = "Data_and_code_creating_database/education_Kyra/english_2022.json"
const math_2022 = "Data_and_code_creating_database/education_Kyra/math_2022.json"

d3.json(english_2021).then(function(data) {
    console.log(data);
    generateData(data);
});

function generateData(data) {

    var medianHomePrice = [];
    var passingStudents = [];
    var numberStudents = [];

    for (let i = 0; i < data.length; i++) {
        medianHomePrice.push(data[i].median_home_price);
        passingStudents.push(data[i].percentage_standard_met_and_above);
        numberStudents.push(data[i].students_with_scores);
    }      
        
    buildBubbleChart(medianHomePrice, passingStudents, numberStudents);
}

function buildBubbleChart(medianHomePrice, passingStudents, numberStudents) {
    let trace1 = {
        x: medianHomePrice,
        y: passingStudents,
        type: "scatter",
        mode: "markers",
        marker: {
            size: numberStudents/100,
            color: "blue"
        },
        text: numberStudents
    };

    let layout = {
        xaxis: {
            title: "Median Home Price"
        },
        yaxis: {
                title: "Percentage of Students Meeting or Exceeding standards"
            }
        };

        let traceData = [trace1];

        Plotly.newPlot("scatter", traceData, layout);
}

function optionChanged(newData) {
    if (newData == "english_2021") {
        let dataset = english_2021;
        d3.json(dataset).then(function(data) {
            generateData(data);
        });
    } else if (newData == "math_2021") {
        let dataset = math_2021;
        d3.json(dataset).then(function(data) {
            generateData(data);
        });
    } else if (newData == "english_2022") {
        let dataset = english_2022;
        d3.json(dataset).then(function(data) {
            generateData(data);
        });
    } else {
        let dataset = math_2022;
        d3.json(dataset).then(function(data) {
            generateData(data);
        });
    };
};
