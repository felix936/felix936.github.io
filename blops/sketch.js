let browserWidth = 1920;
let browserHeight = 1080;
let animals= [];


//Graphs
const GraphWidth = 300, GraphHeight = 200;
const statsGraphXOffset = 20, statsGraphYOffset = 40, statsSpaceBetween = 40;
const time = 500; // number of x tick values

let GraphPopulationData = [], GraphAttractivenessData = [], GraphAggresivenessData = [], GraphIntelligenceData = [];
let highestPopulation = 10;
let averageStat = 0;
let graphPosX, l, totalStat;

let population = {name: "Population: ", data: GraphPopulationData, color: "black"};
let aggresiveness = {name: "⌀ Aggresiveness: ", data: GraphAggresivenessData, color: "red"};
let attractiveness = {name: "⌀ Attractiveness: ", data: GraphAttractivenessData, color: "green"};
let intelligence = {name: "⌀ Intelligence: ", data: GraphIntelligenceData, color: "blue"};
let animalStats = [population, aggresiveness, attractiveness, intelligence];


var customBlop = {};
var timeLastCreatedBlop = 0;
var canvas;



function setup() {
  canvas = createCanvas(browserWidth, browserHeight);
  background(200);

  graphPosX = Float32Array.from({ length: time }, (_, i) => map(i, 0, time, 0, GraphWidth));
}

function draw() {
  background(200);
  for (var i=0; i < animals.length; i++){
    let a = animals[i];
    a.update();
    a.show();
    a.checknearest();
  }


  //Graphs for animal stats
  for(let i = 0; i < animalStats.length; i++){
    totalStat = 0;
    if(animalStats[i] == population){
      averageStat =  animals.length;
      if(animals.length > highestPopulation){
        highestPopulation = animals.length + 10;
      }
    }
    else{
    for(let j=0; j < animals.length; j++){
      if(animalStats[i] == attractiveness){
        totalStat =  totalStat + animals[j].attractiveness;
      }
      if(animalStats[i] == aggresiveness){
        totalStat =  totalStat + animals[j].aggresiveness;
      }
      if(animalStats[i] == intelligence){
        totalStat =  totalStat + animals[j].intelligence;
      }
    }
    if(animals.length > 0){
      averageStat = totalStat / animals.length;
    }
  }

    fill(0);
    strokeWeight(0);
    text(str(animalStats[i].name + Math.floor(averageStat)), statsGraphXOffset, statsGraphYOffset + i * (statsSpaceBetween + GraphHeight) - 5);
    fill(0,0,0,30);
    rect(statsGraphXOffset,statsGraphYOffset + i * (statsSpaceBetween + GraphHeight),GraphWidth,GraphHeight, 4);
    fill(0);
    text("0", (2 + statsGraphXOffset), (GraphHeight + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight) - 3));
    if(animalStats[i] == population){
      text(str(highestPopulation), (2 + statsGraphXOffset), (12 + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)));
    }else{
      text("255", (2 + statsGraphXOffset), (12 + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)));}
    
    l = animalStats[i].data.length - 1 ;
    
    animalStats[i].data.push(averageStat);

    // intelligence curve
    for (let j = 0; j < l; j++) {
      if(animalStats[i] == population){
        y1 = map(GraphPopulationData[j], highestPopulation, 0, 0, GraphHeight);
        y2 = map(GraphPopulationData[j+1], highestPopulation, 0, 0, GraphHeight);}
      else{
        y1 = map(animalStats[i].data[j], 255, 0, 0, GraphHeight);
        y2 = map(animalStats[i].data[j+1], 255, 0, 0, GraphHeight);}
      x1 = graphPosX[j];
      x2 = graphPosX[j+1];
      
      // vertical lines (x-values)
      strokeWeight(0.2);
      line((x1 + statsGraphXOffset), (GraphHeight + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)), (x1 + statsGraphXOffset), (y1 + 2 + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)));
      
      // polyline
      strokeWeight(2);
      stroke(animalStats[i].color);
      line((x1 + statsGraphXOffset), (y1 + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)), (x2 + statsGraphXOffset), (y2 + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)));

      if (i == l - 1) {
        ellipse((x2 + statsGraphXOffset), (y2 + statsGraphYOffset + i * (statsSpaceBetween + GraphHeight)), 4, 4);
      }
      
    }
    
    if (animalStats[i].data.length > time){
      animalStats[i].data.splice(0, 1);
    }

    if (mouseIsPressed === true && ((!(mouseX > 1580 && mouseY < 600)) || (window.getComputedStyle(document.getElementById("dropdown-content")).display == "none"))){
      createCustomBlop();
    }


}


}

function createCustomBlop() {
  if (timeLastCreatedBlop + 3 < frameCount){
    sliders()
    let animal = new Animal(mouseX,mouseY,int(customBlop.customAggresiveness),int(customBlop.customAttractiveness),int(customBlop.customIntelligence),int(customBlop.customSize),255, frameCount,p5.Vector.normalize(createVector((Math.random()-0.5)*this.health/25,(Math.random()-0.5)*this.health/25)));
    animals.push(animal);
    animal.show();
    timeLastCreatedBlop = frameCount
  }
} 

function spawnRandomBlops(amountOfRandomBlops) {
  for (var i = 0; i < amountOfRandomBlops; i++ ){
    let animal = new Animal(Math.random()*browserWidth,Math.random()*browserHeight,Math.random()*255,Math.random()*255,Math.random()*255,20+Math.random()*10,255, frameCount,p5.Vector.normalize(createVector((Math.random()-0.5)*this.health/25,(Math.random()-0.5)*this.health/25)));
    animals.push(animal);
    animal.show();
    
  }
} 








//Sliders
window.onload = sliders;

function sliders(){
  const aggresivenessSlider = document.getElementById("aggresivenessSlider");
  const aggresivenessValue = document.getElementById("aggresivenessValue");
  aggresivenessValue.innerHTML = aggresivenessSlider.value;
  aggresivenessSlider.style.backgroundColor = "rgba(255, 0, 0, " + aggresivenessSlider.value/255 + ")";

  aggresivenessSlider.oninput = function() {
    aggresivenessValue.innerHTML = this.value;
    aggresivenessSlider.style.backgroundColor = "rgba(255, 0, 0, " + this.value/255 + ")";
    adjustResultingBlop()
  }
  const attractivenessSlider = document.getElementById("attractivenessSlider");
  const attractivenessValue = document.getElementById("attractivenessValue");
  attractivenessValue.innerHTML = attractivenessSlider.value;
  attractivenessSlider.style.backgroundColor = "rgba(0, 255, 0, " + this.value/255 + ")";

  attractivenessSlider.oninput = function() {
    attractivenessValue.innerHTML = this.value;
    attractivenessSlider.style.backgroundColor = "rgba(0, 255, 0, " + this.value/255 + ")";
    adjustResultingBlop()
  }
  const intelligenceSlider = document.getElementById("intelligenceSlider");
  const intelligenceValue = document.getElementById("intelligenceValue");
  intelligenceValue.innerHTML = intelligenceSlider.value;
  intelligenceSlider.style.backgroundColor = "rgba(0, 0, 255, " + this.value/255 + ")";

  intelligenceSlider.oninput = function() {
    intelligenceValue.innerHTML = this.value;
    intelligenceSlider.style.backgroundColor = "rgba(0, 0, 255, " + this.value/255 + ")";
    adjustResultingBlop()
  }
  const sizeSlider = document.getElementById("sizeSlider");
  const sizeValue = document.getElementById("sizeValue");
  sizeValue.innerHTML = sizeSlider.value;
  sizeSlider.style.backgroundColor = "rgba(50, 50, 50, " + sizeSlider.value/255 + ")";

  sizeSlider.oninput = function() {
    sizeValue.innerHTML = this.value;
    sizeSlider.style.backgroundColor = "rgba(50, 50, 50, " + this.value/255 + ")";
    adjustResultingBlop()
  }

  const amountSlider = document.getElementById("amountSlider");
  const amountValue = document.getElementById("amountValue");
  amountValue.innerHTML = sizeSlider.value;
  amountSlider.style.backgroundColor = "rgba(50, 50, 50, " + sizeSlider.value/255 + ")";

  amountSlider.oninput = function() {
    amountValue.innerHTML = this.value;
    amountSlider.style.backgroundColor = "rgba(50, 50, 50, " + this.value/255 + ")";
    adjustResultingBlop()
  }

  adjustResultingBlop();
  function adjustResultingBlop(){
    const resultingBlop = document.getElementById("resultingBlop");
    resultingBlop.style.width = str(sizeSlider.value) + "px";
    resultingBlop.style.height = str(sizeSlider.value) + "px";
    resultingBlop.style.backgroundColor = "rgba(" + str(aggresivenessSlider.value) + ", " + str(attractivenessSlider.value) + ", " + str(intelligenceSlider.value) + ", 1)";
    customBlop = {customAggresiveness: aggresivenessSlider.value, customAttractiveness: attractivenessSlider.value, customIntelligence: intelligenceSlider.value, customSize: sizeSlider.value}
  }
}
