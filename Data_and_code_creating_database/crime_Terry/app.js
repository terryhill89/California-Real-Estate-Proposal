// Create an array of each county's numbers
let AlamedaCounty = Object.entries(data.AlamedaCounty)
let AlpineCounty = Object.entries(data.AlpineCounty)
let AmadorCounty = Object.entries(data.AmadorCounty)
let ButteCounty = Object.entries(data.ButteCounty)
let CalaverasCounty = Object.entries(data.CalaverasCounty)
let ColusaCounty = Object.entries(data.ColusaCounty)
let ContraCostaCounty = Object.entries(data.ContraCostaCounty)
let DelNorteCounty = Object.entries(data.DelNorteCounty)
let ElDoradoCounty = Object.entries(data.ElDoradoCounty)
let FresnoCounty = Object.entries(data.FresnoCounty)
let GlennCounty = Object.entries(data.GlennCounty)
let HumboldtCounty = Object.entries(data.HumboldtCounty)
let ImperialCounty = Object.entries(data.ImperialCounty)
let InyoCounty = Object.entries(data.InyoCounty)
let KernCounty = Object.entries(data.KernCounty)
let KingsCounty = Object.entries(data.KingsCounty)
let LakeCounty = Object.entries(data.LakeCounty)
let LassenCounty = Object.entries(data.LassenCounty)
let LosAngelesCounty = Object.entries(data.LosAngelesCounty)
let MaderaCounty = Object.entries(data.MaderaCounty)
let MarinCounty = Object.entries(data.MarinCounty)
let MariposaCounty = Object.entries(data.MariposaCounty)
let MendocinoCounty = Object.entries(data.MendocinoCounty)
let MercedCounty = Object.entries(data.MercedCounty)
let ModocCounty = Object.entries(data.ModocCounty)
let MonoCounty = Object.entries(data.MonoCounty)
let MontereyCounty = Object.entries(data.MontereyCounty)
let NapaCounty = Object.entries(data.NapaCounty)
let NevadaCounty = Object.entries(data.NevadaCounty)
let OrangeCounty = Object.entries(data.OrangeCounty)
let PlacerCounty = Object.entries(data.PlacerCounty)
let PlumasCounty = Object.entries(data.PlumasCounty)
let RiversideCounty = Object.entries(data.RiversideCounty)
let SacramentoCounty = Object.entries(data.SacramentoCounty)
let SanBenitoCounty = Object.entries(data.SanBenitoCounty)
let SanBernardinoCounty = Object.entries(data.SanBernardinoCounty)
let SanDiegoCounty = Object.entries(data.SanDiegoCounty)
let SanFranciscoCounty = Object.entries(data.SanFranciscoCounty)
let SanJoaquinCounty = Object.entries(data.SanJoaquinCounty)
let SanLuisObispoCounty = Object.entries(data.SanLuisObispoCounty)
let SanMateoCounty = Object.entries(data.SanMateoCounty)
let SantaBarbaraCounty = Object.entries(data.SantaBarbaraCounty)
let SantaClaraCounty = Object.entries(data.SantaClaraCounty)
let SantaCruzCounty = Object.entries(data.SantaCruzCounty)
let ShastaCounty = Object.entries(data.ShastaCounty)
let SierraCounty = Object.entries(data.SierraCounty)
let SiskiyouCounty = Object.entries(data.SiskiyouCounty)
let SolanoCounty = Object.entries(data.SolanoCounty)
let SonomaCounty = Object.entries(data.SonomaCounty)
let StanislausCounty = Object.entries(data.StanislausCounty)
let SutterCounty = Object.entries(data.SutterCounty)
let TehamaCounty = Object.entries(data.TehamaCounty)
let TrinityCounty = Object.entries(data.TrinityCounty)
let TulareCounty = Object.entries(data.TulareCounty)
let TuolumneCounty = Object.entries(data.TuolumneCounty)
let VenturaCounty = Object.entries(data.VenturaCounty)
let YoloCounty = Object.entries(data.YoloCounty)
let YubaCounty = Object.entries(data.YubaCounty)

// Create an array of category labels
let labels = Object.keys(data);

// Display the default plot
function start() {
  let data = [{
    values: AlamedaCounty.map(obj => obj[1]),
    labels: AlamedaCounty.map(obj => obj[0]),
    type: "pie"
  }];

  let layout = {
    height: 700,
    width: 900
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'AlamedaCounty') {
      data = AlamedaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'AlpineCounty') {
      data = AlpineCounty.map(obj => obj[1]);
  }
  else if (dataset == 'AmadorCounty') {
      data = AmadorCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ButteCounty') {
      data = ButteCounty.map(obj => obj[1]).map(obj => obj[1]);
  }
  else if (dataset == 'CalaverasCounty') {
      data = CalaverasCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ColusaCounty') {
      data = ColusaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ContraCostaCounty') {
     data = ContraCostaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'DelNorteCounty') {
     data = DelNorteCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ElDoradoCounty') {
     data = ElDoradoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'FresnoCounty') {
     data = FresnoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'GlennCounty') {
     data = GlennCounty.map(obj => obj[1]);
  }
  else if (dataset == 'HumboldtCounty') {
     data = HumboldtCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ImperialCounty') {
     data = ImperialCounty.map(obj => obj[1]);
  }
  else if (dataset == 'InyoCounty') {
     data = InyoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'KernCounty') {
     data = KernCounty.map(obj => obj[1]);
  }
  else if (dataset == 'KingsCounty') {
     data = KingsCounty.map(obj => obj[1]);
  }
  else if (dataset == 'LakeCounty') {
     data = LakeCounty.map(obj => obj[1]);
  }
  else if (dataset == 'LassenCounty') {
     data = LassenCounty.map(obj => obj[1]);
  }
  else if (dataset == 'LosAngelesCounty') {
      data = LosAngelesCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MaderaCounty') {
     data = MaderaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MarinCounty') {
     data = MarinCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MariposaCounty') {
  data = MariposaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MendocinoCounty') {
     data = MendocinoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MercedCounty') {
     data = MercedCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ModocCounty') {
     data = ModocCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MonoCounty') {
     data = MonoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'MontereyCounty') {
     data = MontereyCounty.map(obj => obj[1]);
  }
  else if (dataset == 'NapaCounty') {
     data = NapaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'NevadaCounty') {
     data = NevadaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'OrangeCounty') {
     data = OrangeCounty.map(obj => obj[1]);
  }
  else if (dataset == 'PlacerCounty') {
     data = PlacerCounty.map(obj => obj[1]);
  }
  else if (dataset == 'PlumasCounty') {
     data = PlumasCounty.map(obj => obj[1]);
  }
  else if (dataset == 'RiversideCounty') {
     data = RiversideCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SacramentoCounty') {
     data = SacramentoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SanBenitoCounty') {
     data = SanBenitoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SanBernardinoCounty') {
     data = SanBernardinoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SanDiegoCounty') {
     data = SanDiegoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SanFranciscoCounty') {
     data = SanFranciscoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SanJoaquinCounty') {
     data = SanJoaquinCount.map(obj => obj[1]);
  }
  else if (dataset == 'SanLuisObispoCounty') {
     data = SanLuisObispoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SanMateoCounty') {
     data = SanMateoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SantaBarbaraCounty') {
     data = SantaBarbaraCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SantaClaraCounty') {
     data = SantaClaraCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SantaCruzCounty') {
     data = SantaCruzCounty.map(obj => obj[1]);
  }
  else if (dataset == 'ShastaCounty') {
     data = ShastaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SierraCounty') {
     data = SierraCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SiskiyouCounty') {
     data = SiskiyouCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SolanoCounty') {
     data = SolanoCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SonomaCounty') {
     data = SonomaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'StanislausCounty') {
     data = StanislausCounty.map(obj => obj[1]);
  }
  else if (dataset == 'SutterCounty') {
      data = SutterCounty.map(obj => obj[1]);
  }  
  else if (dataset == 'TehamaCounty') {
     data = TehamaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'TrinityCounty') {
     data = TrinityCounty.map(obj => obj[1]);
  }
  else if (dataset == 'TulareCounty') {
     data = TulareCounty.map(obj => obj[1]);
  }
  else if (dataset == 'TuolumneCounty') {
     data = TuolumneCounty.map(obj => obj[1]);
  }
  else if (dataset == 'VenturaCounty') {
     data = VenturaCounty.map(obj => obj[1]);
  }
  else if (dataset == 'YoloCounty') {
     data = YoloCounty.map(obj => obj[1]);
  }
  else if (dataset == 'YubaCounty') {
     data = YubaCounty.map(obj => obj[1]);
  }

// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

start();
