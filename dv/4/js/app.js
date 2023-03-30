const svg = d3.select('svg');
const width = +svg.style('width').replace('px','');
const height = +svg.style('height'). replace('px','');
const margin = { top:20, bottom: 50, right: 50, left: 60};
const innerwidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
var color, groupByCountry,previous =20,
flagMap = new Map(),
xPos = 20
distanceBetweenEachCounrey = 900,
heightOfRect = 40,
yPosLines = innerHeight/8 +heightOfRect;

imagesNotPresent = ["Heterodontosaurus","Abelisaurus","Alvarezsaurus","Carnotaurus", "Eoraptor","Argentinosaurus","Edmontosaurus","Lambeosaurus","Parksosaurus","Struthiomimus","Antarctosaurus", "Alamosaurus","Achelousaurus","Allosaurus","Ammosaurus","Anchisaurus","Ankylosaurus", "Ankylosaurus"]

Tooltip = d3.select("#div_template")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip") //Referred my own code from Homework 1

const landingPage = document.getElementById('landing-page');
const content = document.getElementById('content');
const continueButton = document.getElementById('continue-button');
const footer = document.getElementById('footer');
continueButton.addEventListener('click', function() {
  landingPage.style.display = 'none';
  content.style.visibility = 'visible';
  footer.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {  
  Promise.all([d3.csv('data/data.csv'), d3.json('data/country.json')])
    .then(function(data){
      dataWrangled = preProcessData(data[0]);
      preProcessFlags(data[1]);
      groupData(dataWrangled);
      colorDefine();
      drawVisualization();
      createLegend();
      d3.select(".lineDiet:nth-child(5)").select(".line")
      .style("opacity","1")
      .attr("stroke-width","6")
      d3.select(".lineDiet:nth-child(5)").select("image")
      .style("width","21px")
      .style("height","21px")
      .attr("transform","translate(-5)")
    })
});

const createLegend = () =>{
  const country_legend_data = document.getElementById("country-legend-data");
  var countries =``;
  Array.from(groupByCountry, ([key, val], index)=>{
     let coun = key.replace(/\s/g, '')
    countries+= `
        <div style="display:inline-flex;place-items:center;padding:2px">
          <div class="country-color" style="display:inline-block;background-color:${color[index]}"></div>
          <span class="li-countries">
            ${key}
          </span>
        </div>
    `
  })
  // countries+=`</ul>`
  country_legend_data.insertAdjacentHTML('beforeend', countries)
}

const preProcessData = (data) =>{
  formattedData = data.map((d)=>{
    d.length = +d["length"].split("m")[0];
    return d;
  })
  return formattedData;
}

const preProcessFlags = (data) =>{
  data.forEach((country)=>{
    flagMap.set(country.name, country.code.toUpperCase());
  })
}

const colorDefine = () =>{
  color = ['#FF6633', '#FFB399',  '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680'
    ]
}

const groupData = (data) => {
  groupByCountry = d3.group(data,(d)=>{return d["lived_in"]});
}

function mouseclick() {
  d3.selectAll(".line")
  .attr("stroke-width","3")
  .style("opacity","0.5")
  d3.selectAll(".diet")
  .style("width","13px")
  .style("height","13px")
  .attr("transform",null)
  d3.selectAll(".diet_omni")
  .style("width","16px")
  .style("height","13px")
  .attr("transform",null)

  var selectedDino = d3.select(this).datum();
  var src = "https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/"
  var dinoImage = document.getElementById('dino-image'); 
  var dinoName = document.getElementById('dino-name-text'); 
  var dinoDiet = document.getElementById('dino-diet-text');
  var dinoEra = document.getElementById('dino-era-text');
  var dinoPlace = document.getElementById('dino-place-text');
  var dinoType = document.getElementById('dino-type-text');
  var dinoLength = document.getElementById('dino-length-text');
  let dinoName1 = selectedDino.name.charAt(0).toUpperCase() + selectedDino.name.slice(1);
  let imageName =selectedDino.name;
  if (imagesNotPresent.includes(dinoName1) ){
    imageName = imageName.split("saurus")[0];
    imageName = imageName.charAt(0).toUpperCase() + imageName.slice(1);
    dinoImage.setAttribute("src",src+imageName+".jpg")
  }
  else{
    imageName = imageName.charAt(0).toUpperCase() + imageName.slice(1);
    dinoImage.setAttribute("src",src+imageName+".jpg")
  }
    
  dinoImage.setAttribute("alt",dinoName1+" Image not present currently")

  dinoName.innerText = dinoName1;
  dinoDiet.innerText = selectedDino.diet.charAt(0).toUpperCase() + selectedDino.diet.slice(1);
  dinoEra.innerText = selectedDino.period;
  dinoPlace.innerText = selectedDino.lived_in;
  dinoType.innerText = selectedDino.type.charAt(0).toUpperCase() + selectedDino.type.slice(1);
  dinoLength.innerText = selectedDino.length+"m";

  d3.select(this.parentNode).select(".line")
  .attr("stroke-width","6")
  .style("opacity","1")
  d3.select(this.parentNode).select("image")
  .style("width","21px")
  .style("height","21px")
  .attr("transform","translate(-5)")
}

function mouseout() {
  Tooltip
        .style("opacity","0")
}
function mousemoveover(event) {
  var selected = d3.select(this);
  var tooltipText;
  let data = selected.datum()
  if (selected.node().tagName.toLowerCase() == "rect"){
    tooltipText = "Country : "+data[0] +"<br>No Of Dinosaurs: "+data[1].length
  }
  else{
    tooltipText = "Name : "+data.name.charAt(0).toUpperCase() + data.name.slice(1) +"<br>Lived in: "+data.lived_in+"<br>Length: "+data.length+"m"
  }
  Tooltip
        .html(tooltipText) //Referred my own code from Homework 1
        .style("left", (event.pageX+15) + "px")
        .style("top", (event.pageY) + "px")
        .style("opacity",1)
}

const drawVisualization = () => {
  const rect = svg.append("g")
    .attr("class","groupchart")

const groupCountry = rect.selectAll(".rect")
  .data(groupByCountry)
  .enter()
  .append("g")
  .attr("class","countryGroup")
  .append("rect")
  .attr("id",(d)=>{
    return d[0].replace(/\s/g, '')
  })
  .attr("x", (d,i)=>{
    if (i==0){
      previous += d[1].length*10+50
      return xPos;
    }
    else{
      xPos = previous
      previous += (d[1].length*10 + 50)
      return xPos;
    }
  })
  .attr("y", innerHeight/8)
  .attr("width", (d)=>{
    return d[1].length*10
  })
  .attr("height", heightOfRect)
  .attr("fill",(d,i)=>{
    return color[i]
  })
  .attr("stroke", (d,i)=>{
    return color[i]
  })
  .attr("stroke-width", "3")
  .on("mouseover", mousemoveover)
  .on("mousemove", mousemoveover)
  .on("mouseout", mouseout)

  d3.select(".cont-btn")
  .on("click", function(){
    d3.selectAll(".countryGroup")
    .each(function(d,j){
      var node = d3.select(this);
      node.selectAll("line")
      .data(d[1])
      .transition()
      .duration(2000)
      .attr("y2", (data)=>{
          const lengthOfDinasaur = data.length * 10
          return yPosLines + lengthOfDinasaur
        });
      node.selectAll("image")
      .data(d[1])
      .transition()
      .duration(2000)
      .attr("y",(data)=>{
        const lengthOfDinasaur = data.length * 10
        return yPosLines + lengthOfDinasaur + 5
      })
    })
  })
    
  d3.selectAll(".countryGroup")
  .each(function(d,j){
    var node = d3.select(this);
    var x = +node.select("rect").attr("x");
    var y = +node.select("rect").attr("y");
    const numLines = d[1].length;
    const lineSpacing = (d[1].length*10) / (numLines + 1);
    let xpos=0;

    var lineGroup = node
    const lineDiet = node.selectAll("g")
    .data(d[1])
    .enter()
    .append("g")
    .attr("class", "lineDiet");

    lineDiet.append("line")
    .attr("class", "line")
    .style("opacity","0.5")
    .attr("x1", (data,i)=>{
      return x + (i+1)*lineSpacing
    }) 
      .attr("y1", yPosLines)
      .attr("x2", (data,i)=>{
        return x + (i+1)*lineSpacing
      }) 
      .attr("y2", yPosLines)
      // .attr("y2", (data)=>{
      //   const lengthOfDinasaur = data.length * 10
      //   return yPosLines + lengthOfDinasaur
      // })
      .attr("stroke", (d,i)=>{
        return color[j]
      })
      .attr("stroke-width", "3")
      .on("mouseover", mousemoveover)
      .on("mousemove", mousemoveover)
      .on("mouseout", mouseout)
      .on("click", mouseclick)

      lineDiet.append("image")
      .attr("class", (data)=>{
        if (data["diet"]== "omnivorous")
          return "diet_omni"
        else
          return "diet"
      })
      .attr("xlink:href", (data) => {
        if (data["diet"]== "herbivorous")
          return "./css/svg/leaf.svg"
        else if (data["diet"]== "carnivorous"){
          return "./css/svg/chicken.svg"
        }
        else{
          return "./css/svg/omni.png"
        }
      })
      .attr("x",(data,i)=>{
        return x + (i+1)*lineSpacing -6
      })
      .attr("y",yPosLines)
      // .attr("y",(data)=>{
      //   const lengthOfDinasaur = data.length * 10
      //   return yPosLines + lengthOfDinasaur + 5
      // })
      .on("mouseover", mousemoveover)
      .on("mousemove", mousemoveover)
      .on("mouseout", mouseout)
      .on("click", mouseclick)
  });
}

const right = () =>{
  console.log("Hello Right")
  var svgArea = document.getElementById("svgArea")
  let rightMargin = parseInt(svgArea.style.right,10);
  console.log(rightMargin)
  if (rightMargin < 363){
    rightMargin+=80
    if (rightMargin>360)
      rightMargin=363
    svgArea.style.right = rightMargin+"%";
  }
}

const left = () =>{
  console.log("Hello Left")
  var svgArea = document.getElementById("svgArea")
  let rightMargin = parseInt(svgArea.style.right,10);
  if (rightMargin > 0){
    rightMargin-=80
    if (rightMargin<0)
      rightMargin=0
    svgArea.style.right = rightMargin+"%";
  }
}