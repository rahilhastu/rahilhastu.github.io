// Hint: This is a good place to declare your global variables
const svg = d3.select('svg');
const width = +svg.style('width').replace('px','');
const height = +svg.style('height'). replace('px','');
const margin = { top:20, bottom: 50, right: 50, left: 60};
const innerwidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

Tooltip = d3.select("#div_template")
.append("div")
.style("opacity", 0)
.attr("class", "tooltip")

var countriesSelected = [],
xAxis=[];
var region_dict = {},
duration = 2000
countryRegionMap = new Map();
var attributeSelected = "",
switchValue = "name";
var global_development_wrangling,global_development,switchInput;
var flags, xScale, yScale, groupByCountry, svgBar, colorLines, setOpacityValue=0.7,lineGraph, groupSvg;

window.onload = function() {
    document.getElementById("startYear").value = "1990";
    document.getElementById("endYear").value = "2013";
    document.getElementById("opacityRange").value = "0.7";
    document.getElementById("opacityRange").value = "0.7";
    document.getElementById("selectAllRegions").checked = false
  };
document.addEventListener('DOMContentLoaded', function () {
    var region_country;
    Promise.all([d3.csv('data/countries_regions.csv'),d3.csv('data/global_development.csv'), d3.json('data/country.json')])
    .then(function(data){
        region_country = data[0];
        global_development = data[1];
        country_flag = data[2];
        flags = createCountryFlagDict(country_flag);
        createRegionWiseControl(region_country, flag);
        global_development_wrangling = populateAttributeList(global_development);
        selectDefaultCountry();
        createAxisSVG(global_development_wrangling,countriesSelected,attributeSelected);
        plotLines();
        switchInput = document.querySelector('.switch input[type="checkbox"]');
        switchInput.checked = true;

        switchInput.addEventListener('change', isNameOrFlag)
    })
});

function colorSchemeCountry(){
     colorLines = d3.scaleOrdinal(d3.schemeDark2)
}

function mousemove(event){
    var mouseCoord = d3.pointer(event, this)
    xValue = xScale.invert(mouseCoord[0]).getFullYear()
    yValue = yScale.invert(mouseCoord[1]).toFixed(2)
    var selectedCountryData = d3.select(this).datum()
    var region = countryRegionMap.get(selectedCountryData[0])
    var tooltipText;
    if (d3.select(this).node().tagName.toLowerCase() == "path" ){
        tooltipText="Region: <b>"+region+"</b><br>Country: <b>"+selectedCountryData[0]+"</b><br>Year: <b>"+xValue+"</b><br>"+attributeSelected+": <b>"+yValue+"</b>"
    }
    else{
        tooltipText = "Region: <b>"+region+"</b><br>Country: <b>"+selectedCountryData[0]+"</b>"
    }
    Tooltip
        .html(tooltipText) //Referred my own code from Homework 1
        .style("left", (event.pageX+15) + "px")
        .style("top", (event.pageY) + "px")
        .style("opacity",1)
        .style("color",colorLines(region))
}

function mouseover(event){
    d3.selectAll(".lc-group")
        .style("opacity","0.05")
    d3.select(this.parentNode)
        .style("opacity",(d)=>{
            return "1"
    })
}

function mouseout(){
    d3.selectAll(".lc-group")
        .style("opacity",setOpacityValue)
    Tooltip
        .style("opacity","0")
}

const durationFunc = (d, i) => {
    // const duration = 100 * (d[1][d[1].length - 1].Year - d[1][0].Year);
    // duration=23*100
    // return 3000;
    var timeTake = 5000/24;
    console.log([d[1].length]*timeTake)
    return [d[1].length]*timeTake ;

  };
  
  const delayFunc = (d, i) => {
    // const delay= 10 * (d[1][d[1].length - 1].Year - 1960);
    const startYear = d3.min(d[1], e => e.Year);
    // console.log((d[1][d[1].length - 1].Year - 1990) * 100)
    // return (d[1][d[1].length - 1].Year - 1990) * 100;
    return 100;
  };

function animatePlotLines(){
    var checkboxSelectedCountries= new Map(),
    maxX1 = new Map(),
    maxY1 = new Map();
    countriesSelected.forEach((c)=>{
        if (groupByCountry.has(c)){
            groupByCountry_Array = groupByCountry.get(c)
            checkboxSelectedCountries.set(c,groupByCountry_Array)
            lengthCountry = groupByCountry_Array.length
            maxX1.set(c,new Date(groupByCountry_Array[lengthCountry-1]["Year"],0,1))
            maxY1.set(c,groupByCountry_Array[lengthCountry-1][attributeSelected])
        }
    })
    const lineCircleGroups= lineGraph.selectAll("g")
            .data(checkboxSelectedCountries, function(d){
                if(d!= undefined){
                    return d[0];
                }
            })
            .join(
                enter=>{
                    const g = enter.append("g")
                    g.attr("class","lc-group")
                    .style("opacity",setOpacityValue)
                    g.append("path")
                        .attr("class","line")
                        .attr("stroke",(d,i)=>{
                            return colorLines(countryRegionMap.get(d[0]))
                        })
                        .attr("d", d => {
                            if (countriesSelected.includes(d[0])){
                                return d3.line()
                                        .x((d)=> { 
                                            return xScale(new Date(d["Year"],1,1)); 
                                        })
                                        .y((d)=> { 
                                            var attrVal = d[attributeSelected]
                                            if (attrVal<0)
                                                return yScale(0)
                                            else
                                                return yScale(attrVal); 
                                        })
                                        (d[1])
                                }
                        })
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout)
                        .on("mousemove", mousemove)
                        .transition()
                        .duration(duration)
                        // .duration(durationFunc)
                        // .delay(delayFunc)
                        .attrTween("stroke-dasharray", function() {
                            var totalLength = this.getTotalLength();
                            return function(t) {
                                return d3.interpolateString("0,"+totalLength, totalLength + ",0")(t);
                            };
                        })
                        .on("interrupt", function() {
                            // var node = this;
                            
                            // var totalLength = node.getTotalLength();
                            // var dashGap = node.getAttribute("stroke-dasharray").split(",");
                            // var dashLength = parseFloat(dashGap[0]);
                            // var circle = d3.select(this.parentNode).select("circle").node();
                            
                            // // Get the current position of the circle
                            // var currentTransform = circle.getAttribute("transform");
                            // var currentPosition = currentTransform.slice(10, -1).split(",");
                            // var currentX = parseFloat(currentPosition[0]) - dashLength;
                            // var currentY = parseFloat(currentPosition[1]);
                            
                            // d3.select(node)
                            //   .transition()
                            //   .duration(duration)
                            //   .attrTween("stroke-dasharray", function() {
                            //     return function(t) {
                            //       return d3.interpolateString(dashLength + "," + totalLength, totalLength + ",0")(t);
                            //     };
                            //   })
                            
                            // d3.select(circle)
                            //   .transition()
                            //   .duration(duration)
                            //   .attrTween("transform", function() {
                            //     return function(t) {
                            //       var point = node.getPointAtLength(t * totalLength);
                            //       var newX = point.x;
                            //       var newY = point.y;
                                  
                            //       // Move the circle along with the line
                            //       var translateX = currentX + newX;
                            //       var translateY = newY;
                                  
                            //       return "translate(" + translateX + "," + translateY + ")";
                            //     };
                            //   });
                          });
                          
                        // .on("interrupt", function() {
                        //     var node = this;
                            
                        //     var totalLength = node.getTotalLength();
                        //     var dashGap = node.getAttribute("stroke-dasharray").split(",");
                        //     var dashLength = parseFloat(dashGap[0]);
                        //     // var gapLength = parseFloat(dashGap[1]);
                        //     // var currentStart = totalLength - dashLength;
                        //     var circle = d3.select(this.parentNode).select("circle").node();
                        //     d3.select(node)
                        //         .transition()
                        //         .duration(duration)
                        //         .attrTween("stroke-dasharray", function() {
                        //             return function(t) {
                        //                 return d3.interpolateString(dashLength+"," + totalLength, totalLength + ",0")(t);
                        //             };
                        //         })
                        //     d3.select(circle)
                        //     .transition()
                        //     .duration(duration)
                        //         .attrTween("transform", function() {
                        //             return function(t) {
                        //                 var point = circle.getPointAtLength(t * totalLength);
                        //                 return "translate(" + point.x + "," + point.y + ")";
                        //             };
                        //         })
                        // });
                        g.append("circle")
                            .attr("cx", 0) // start the circle at the beginning of the path
                            .attr("cy", 0)
                            .attr("r", "4")
                            .attr("stroke","black")
                            .attr("stroke-length","3")
                            .attr("class","circle")
                            .attr("fill",(d,i)=>{
                                return colorLines(countryRegionMap.get(d[0]))
                            })
                            .on("mouseover",mouseover)
                            .on("mousemove", mousemove)
                            .on("mouseout",mouseout)
                            .transition()
                            .duration(duration) // match the duration of the line animation
                            .attrTween("transform", function() {
                            var path = d3.select(this.parentNode).select("path").node();
                            var pathLength = path.getTotalLength();
                                return function(t) {
                                    var point = path.getPointAtLength(t * pathLength);
                                    return "translate(" + point.x + "," + point.y + ")";
                                };
                            })
                            // .on("end",(d)=>{
                                g.append("image")
                                    .attr("class", "flag")
                                    .attr("xlink:href", d => {
                                        return "./css/flags/flags/1x1/"+flag[d[0]]+".svg"
                                    })
                                    // .attr("x", (d)=>{
                                    //     return xScale(maxX1.get(d[0]))+15
                                    // })
                                    // .attr("y", (d)=>{
                                    //     var attrVa = maxY1.get(d[0])
                                    //     if (attrVa <0)
                                    //         return yScale(0)
                                    //     else
                                    //         return yScale(maxY1.get(d[0]))-10
                                    // })
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .style("display",(d)=>{
                                        if (switchValue=="name")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                    .on("mousemove",mousemove)
                                    .transition()
                            .duration(duration) // match the duration of the line animation
                            .attrTween("transform", function() {
                            var path = d3.select(this.parentNode).select("path").node();
                            var pathLength = path.getTotalLength();
                                return function(t) {
                                    var point = path.getPointAtLength(t * pathLength);
                                    return "translate(" + (point.x+10) + "," + point.y + ")";
                                };
                            })
                                g.append("text")
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .attr("class",(d)=>{
                                        return "countryText"
                                    })
                                    // .attr("x", (d)=>{
                                    //     return xScale(maxX1.get(d[0]))+15
                                    // })
                                    // .attr("y", (d)=>{
                                    //     var attrVa = maxY1.get(d[0])
                                    //     if (attrVa <0)
                                    //         return yScale(0)
                                    //     else
                                    //         return yScale(maxY1.get(d[0]))+7
                                    // })
                                    .style("display",(d)=>{
                                        if (switchValue=="flag")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .style("fill",(d,i)=>{
                                        return colorLines(countryRegionMap.get(d[0]))
                                    })
                                    // .attr("dx", "1.6em")
                                    .text(d=>d[0])
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                    .on("mousemove",mousemove)
                                    .transition()
                            .duration(duration) // match the duration of the line animation
                            .attrTween("transform", function() {
                            var path = d3.select(this.parentNode).select("path").node();
                            var pathLength = path.getTotalLength();
                                return function(t) {
                                    var point = path.getPointAtLength(t * pathLength);
                                    return "translate(" + (point.x +10) +"," + point.y + ")";
                                };
                            })
                            .on("end",function(){
                                // console.log(d3.select(this))
                                d3.select(this)
                                .attr("transform",(d)=>{
                                    return "none"
                                })
                                .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                })
                                .attr("y", (d)=>{
                                    var attrVa = maxY1.get(d[0])
                                    if (attrVa <0)
                                        return yScale(0)
                                    else
                                        return yScale(maxY1.get(d[0]))+7
                                })
                            })
                            // })
                            .on("interrupt",function(d){
                                // d3.select(this)
                                // .transition()
                                // .duration(duration)
                                // .attrTween("transform", function() {
                                //     var node = this;
                                //     var path = d3.select(this.parentNode).select("path").node();
                                //     var dashGap = path.getAttribute("stroke-dasharray").split(",");
                                //     console.log(path.getAttribute("stroke-dasharray"))
                                //     var dashLength = parseFloat(dashGap[0]);
                                //     var pathLength = path.getTotalLength();
                                        // return function(t) {
                                        //     var point = path.getPointAtLength(t * dashLength);
                                        //     return "translate(" + point.x + "," + point.y + ")";
                                        // };
                                    // });
                                g.append("image")
                                    .attr("class", "flag")
                                    .attr("xlink:href", d => {
                                        return "./css/flags/flags/1x1/"+flag[d[0]]+".svg"
                                    })
                                    .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                    })
                                    .attr("y", (d)=>{
                                        return yScale(maxY1.get(d[0]))-10
                                    })
                                    .style("display",(d)=>{
                                        if (switchValue=="name")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                g.append("text")
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .attr("class",(d)=>{
                                        return "countryText"
                                    })
                                    .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                    })
                                    .attr("y",(d)=>{
                                        return yScale(maxY1.get(d[0]))+7
                                    })
                                    .style("display",(d)=>{
                                        if (switchValue=="flag")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .style("fill",(d,i)=>{
                                        return colorLines(countryRegionMap.get(d[0]))
                                    })
                                    
                                    // .attr("dx", "1.6em")
                                    .text(d=>d[0])
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                d3.xml("../css/flags/flags/1x1/in.svg").then(function(data) {
                                    const svg = data.documentElement;
                                    // console.log(d3.select(this.parentNode).selectAll(".line"))
                                    g.append(svg)
                                    const svgString = new XMLSerializer().serializeToString(svg);
                                    d3.select(".lc-group").html(svgString);
                                })
                            })
                },
                update=>{
                    update.selectAll(".lc-group .line")
                    .call(update => update.transition()
                        .duration(duration)
                        .attr("stroke-dasharray", "null")
                        .attr("d", d => {
                            if (countriesSelected.includes(d[0])){
                                return d3.line()
                                        .x((d)=> { 
                                            return xScale(new Date(d["Year"],1,1)); 
                                        })
                                        .y((d)=> { 
                                            return yScale(d[attributeSelected]); 
                                        })
                                        (d[1])
                                }
                        })   
                    )
                    update.selectAll(".lc-group .circle")
                    .call(update => update.transition()
                    .attr("transform","null")
                        .duration(duration)
                        .attr("cx",(d)=>{
                            return xScale(maxX1.get(d[0]))
                        })
                        .attr("cy",(d)=>{
                            return yScale(maxY1.get(d[0]))
                        })
                    )
                    update.selectAll(".lc-group .countryText")
                        .call(update => update.transition()
                        .duration(duration)
                        .attr("x",(d)=>{
                            return xScale(maxX1.get(d[0]))+15
                        })
                        .attr("y",(d)=>{
                            return yScale(maxY1.get(d[0]))+7
                        })
                    )
                    update.selectAll(".lc-group .flag")
                        .call(update => update.transition()
                        .duration(duration)
                        .attr("x",(d)=>{
                            return xScale(maxX1.get(d[0]))+15
                        })
                        .attr("y",(d)=>{
                            return yScale(maxY1.get(d[0]))-10
                        })
                    )
                },
                exit=>{
                    exit.call(exit =>{
                        exit.selectAll(".line")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        exit.selectAll(".circle")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        exit.selectAll(".countryText")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        exit.selectAll(".flag")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        .then(()=>{
                            exit.remove();
                        })
                    })
                }  
            )
}

function plotLines(){
    var checkboxSelectedCountries= new Map(),
    maxX1 = new Map(),
    maxY1 = new Map();
    countriesSelected.forEach((c)=>{
        if (groupByCountry.has(c)){
            groupByCountry_Array = groupByCountry.get(c)
            checkboxSelectedCountries.set(c,groupByCountry_Array)
            lengthCountry = groupByCountry_Array.length
            maxX1.set(c,new Date(groupByCountry_Array[lengthCountry-1]["Year"],0,1))
            maxY1.set(c,groupByCountry_Array[lengthCountry-1][attributeSelected])
        }
    })
    const lineCircleGroups= lineGraph.selectAll("g")
            .data(checkboxSelectedCountries, function(d){
                if(d!= undefined){
                    return d[0];
                }
            })
            .join(
                enter=>{
                    const g = enter.append("g")
                    g.attr("class","lc-group")
                    .style("opacity",setOpacityValue)
                    g.append("path")
                        .attr("class","line")
                        .attr("stroke",(d,i)=>{
                            return colorLines(countryRegionMap.get(d[0]))
                        })
                        .style("opacity","0")
                        .attr("d", d => {
                            if (countriesSelected.includes(d[0])){
                                return d3.line()
                                        .x((d)=> { 
                                            return xScale(new Date(d["Year"],1,1)); 
                                        })
                                        .y((d)=> { 
                                            var attrVal = d[attributeSelected]
                                            if (attrVal<0)
                                                return yScale(0)
                                            else
                                                return yScale(attrVal); 
                                        })
                                        (d[1])
                                }
                        })
                        .on("mouseover",mouseover)
                        .on("mouseout",mouseout)
                        .on("mousemove", mousemove)
                        .transition()
                        .duration(duration)
                        .delay(duration-150)
                        .ease(d3.easeCubicOut)
                        .style("opacity","1")
                        
                        // .duration(durationFunc)
                        // .delay(delayFunc)
                        // .attrTween("stroke-dasharray", function() {
                        //     var totalLength = this.getTotalLength();
                        //     return function(t) {
                        //         return d3.interpolateString("0,"+totalLength, totalLength + ",0")(t);
                        //     };
                        // })
                        .on("interrupt", function() {
                            // var node = this;
                            
                            // var totalLength = node.getTotalLength();
                            // var dashGap = node.getAttribute("stroke-dasharray").split(",");
                            // var dashLength = parseFloat(dashGap[0]);
                            // var circle = d3.select(this.parentNode).select("circle").node();
                            
                            // // Get the current position of the circle
                            // var currentTransform = circle.getAttribute("transform");
                            // var currentPosition = currentTransform.slice(10, -1).split(",");
                            // var currentX = parseFloat(currentPosition[0]) - dashLength;
                            // var currentY = parseFloat(currentPosition[1]);
                            
                            // d3.select(node)
                            //   .transition()
                            //   .duration(duration)
                            //   .attrTween("stroke-dasharray", function() {
                            //     return function(t) {
                            //       return d3.interpolateString(dashLength + "," + totalLength, totalLength + ",0")(t);
                            //     };
                            //   })
                            
                            // d3.select(circle)
                            //   .transition()
                            //   .duration(duration)
                            //   .attrTween("transform", function() {
                            //     return function(t) {
                            //       var point = node.getPointAtLength(t * totalLength);
                            //       var newX = point.x;
                            //       var newY = point.y;
                                  
                            //       // Move the circle along with the line
                            //       var translateX = currentX + newX;
                            //       var translateY = newY;
                                  
                            //       return "translate(" + translateX + "," + translateY + ")";
                            //     };
                            //   });
                          });
                          
                        // .on("interrupt", function() {
                        //     var node = this;
                            
                        //     var totalLength = node.getTotalLength();
                        //     var dashGap = node.getAttribute("stroke-dasharray").split(",");
                        //     var dashLength = parseFloat(dashGap[0]);
                        //     // var gapLength = parseFloat(dashGap[1]);
                        //     // var currentStart = totalLength - dashLength;
                        //     var circle = d3.select(this.parentNode).select("circle").node();
                        //     d3.select(node)
                        //         .transition()
                        //         .duration(duration)
                        //         .attrTween("stroke-dasharray", function() {
                        //             return function(t) {
                        //                 return d3.interpolateString(dashLength+"," + totalLength, totalLength + ",0")(t);
                        //             };
                        //         })
                        //     d3.select(circle)
                        //     .transition()
                        //     .duration(duration)
                        //         .attrTween("transform", function() {
                        //             return function(t) {
                        //                 var point = circle.getPointAtLength(t * totalLength);
                        //                 return "translate(" + point.x + "," + point.y + ")";
                        //             };
                        //         })
                        // });
                        g.append("circle")
                            // .attr("cx", 0) // start the circle at the beginning of the path
                            // .attr("cy", 0)
                            .attr("cx",(d)=>{
                                return xScale(maxX1.get(d[0]))
                            })
                            .attr("cy",(d)=>{
                                var attrVa = maxY1.get(d[0])
                                if (attrVa <0)
                                    return yScale(0)
                                else
                                    return yScale(maxY1.get(d[0]))
                            })
                            .attr("r", "4")
                            .attr("stroke","black")
                            .attr("stroke-length","3")
                            .attr("class","circle")
                            .style("opacity","0")
                            .attr("fill",(d,i)=>{
                                return colorLines(countryRegionMap.get(d[0]))
                            })
                            .on("mouseover",mouseover)
                            .on("mousemove", mousemove)
                            .on("mouseout",mouseout)
                            .transition()
                            .duration(duration) // match the duration of the line animation
                            .delay(duration-150)
                            .ease(d3.easeCubicOut)
                            .style("opacity","1")
                            // .attrTween("transform", function() {
                            // var path = d3.select(this.parentNode).select("path").node();
                            // var pathLength = path.getTotalLength();
                            //     return function(t) {
                            //         var point = path.getPointAtLength(t * pathLength);
                            //         return "translate(" + point.x + "," + point.y + ")";
                            //     };
                            // })
                            // .on("end",(d)=>{
                                g.append("image")
                                    .attr("class", "flag")
                                    .style("opacity","0")
                                    .attr("xlink:href", d => {
                                        return "./css/flags/flags/1x1/"+flag[d[0]]+".svg"
                                    })
                                    .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                    })
                                    .attr("y", (d)=>{
                                        var attrVa = maxY1.get(d[0])
                                        if (attrVa <0)
                                            return yScale(0)
                                        else
                                            return yScale(maxY1.get(d[0]))-10
                                    })
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .style("display",(d)=>{
                                        if (switchValue=="name")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                    .on("mousemove",mousemove)
                                    .transition()
                                    .duration(duration) // match the duration of the line animation
                                    .delay(duration-150)
                                    .ease(d3.easeCubicOut)
                                    .style("opacity","1")
                                g.append("text")
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .style("opacity","0")
                                    .attr("class",(d)=>{
                                        return "countryText"
                                    })
                                    .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                    })
                                    .attr("y", (d)=>{
                                        var attrVa = maxY1.get(d[0])
                                        if (attrVa <0)
                                            return yScale(0)
                                        else
                                            return yScale(maxY1.get(d[0]))+7
                                    })
                                    .style("display",(d)=>{
                                        if (switchValue=="flag")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .style("fill",(d,i)=>{
                                        return colorLines(countryRegionMap.get(d[0]))
                                    })
                                    // .attr("dx", "1.6em")
                                    .text(d=>d[0])
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                    .on("mousemove",mousemove)
                                    .transition()
                                    .duration(duration) // match the duration of the line animation
                                    .delay(duration-150)
                                    .ease(d3.easeCubicOut)
                                    .style("opacity","1")
                            // })
                            .on("interrupt",function(d){
                                // d3.select(this)
                                // .transition()
                                // .duration(duration)
                                // .attrTween("transform", function() {
                                //     var node = this;
                                //     var path = d3.select(this.parentNode).select("path").node();
                                //     var dashGap = path.getAttribute("stroke-dasharray").split(",");
                                //     console.log(path.getAttribute("stroke-dasharray"))
                                //     var dashLength = parseFloat(dashGap[0]);
                                //     var pathLength = path.getTotalLength();
                                        // return function(t) {
                                        //     var point = path.getPointAtLength(t * dashLength);
                                        //     return "translate(" + point.x + "," + point.y + ")";
                                        // };
                                    // });
                                g.append("image")
                                    .attr("class", "flag")
                                    .style("opacity","0")
                                    .attr("xlink:href", d => {
                                        return "./css/flags/flags/1x1/"+flag[d[0]]+".svg"
                                    })
                                    .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                    })
                                    .attr("y", (d)=>{
                                        var attrVa = maxY1.get(d[0])
                                        if (attrVa <0)
                                            return yScale(0)
                                        else
                                            return yScale(maxY1.get(d[0]))-10
                                    })
                                    .style("display",(d)=>{
                                        if (switchValue=="name")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                    .transition()
                                    .duration(duration) // match the duration of the line animation
                                    .ease(d3.easeCubicOut)
                                    .style("opacity",setOpacityValue)
                                g.append("text")
                                    .attr("width", 20)
                                    .attr("height", 20)
                                    .style("opacity","0")
                                    .attr("class",(d)=>{
                                        return "countryText"
                                    })
                                    .attr("x", (d)=>{
                                        return xScale(maxX1.get(d[0]))+15
                                    })
                                    .attr("y", (d)=>{
                                        var attrVa = maxY1.get(d[0])
                                        if (attrVa <0)
                                            return yScale(0)
                                        else
                                            return yScale(maxY1.get(d[0]))+7
                                    })
                                    .style("display",(d)=>{
                                        if (switchValue=="flag")
                                            return "none"
                                        else
                                            return "block"
                                    })
                                    .style("fill",(d,i)=>{
                                        return colorLines(countryRegionMap.get(d[0]))
                                    })
                                    
                                    // .attr("dx", "1.6em")
                                    .text(d=>d[0])
                                    .on("mouseover",mouseover)
                                    .on("mouseout",mouseout)
                                    .transition()
                                    .duration(duration) // match the duration of the line animation
                                    .ease(d3.easeCubicOut)
                                    .style("opacity",setOpacityValue)
                                d3.xml("../css/flags/flags/1x1/in.svg").then(function(data) {
                                    const svg = data.documentElement;
                                    // console.log(d3.select(this.parentNode).selectAll(".line"))
                                    g.append(svg)
                                    const svgString = new XMLSerializer().serializeToString(svg);
                                    d3.select(".lc-group").html(svgString);
                                })
                            })
                },
                update=>{
                    update.selectAll(".lc-group .line")
                    .call(update => update.transition()
                        .duration(duration)
                        .attr("stroke-dasharray", "null")
                        .attr("d", d => {
                            if (countriesSelected.includes(d[0])){
                                return d3.line()
                                        .x((d)=> { 
                                            return xScale(new Date(d["Year"],1,1)); 
                                        })
                                        .y((d)=> { 
                                            var attrVal = d[attributeSelected]
                                            if (attrVal<0)
                                                return yScale(0)
                                            else
                                                return yScale(attrVal); 
                                        })
                                        (d[1])
                                }
                        })   
                    )
                    update.selectAll(".lc-group .circle")
                    .call(update => update.transition()
                    .attr("transform","null")
                        .duration(duration)
                        .attr("cx",(d)=>{
                            return xScale(maxX1.get(d[0]))
                        })
                        .attr("cy", (d)=>{
                            var attrVa = maxY1.get(d[0])
                            if (attrVa <0)
                                return yScale(0)
                            else
                                return yScale(maxY1.get(d[0]))
                        })
                    )
                    update.selectAll(".lc-group .countryText")
                        .call(update => update.transition()
                        .duration(duration)
                        .attr("x",(d)=>{
                            return xScale(maxX1.get(d[0]))+15
                        })
                        .attr("y", (d)=>{
                            var attrVa = maxY1.get(d[0])
                            if (attrVa <0)
                                return yScale(0)
                            else
                                return yScale(maxY1.get(d[0]))+7
                        })
                    )
                    update.selectAll(".lc-group .flag")
                        .call(update => update.transition()
                        .duration(duration)
                        .attr("x",(d)=>{
                            return xScale(maxX1.get(d[0]))+15
                        })
                        .attr("y", (d)=>{
                            var attrVa = maxY1.get(d[0])
                            if (attrVa <0)
                                return yScale(0)
                            else
                                return yScale(maxY1.get(d[0]))-10
                        })
                    )
                },
                exit=>{
                    exit.call(exit =>{
                        exit.selectAll(".line")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        exit.selectAll(".circle")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        exit.selectAll(".countryText")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        exit.selectAll(".flag")//-group")
                        .transition()
                        .duration(1000)
                        .ease(d3.easeCubicOut)
                        .style("opacity","0")
                        .end()
                        .then(()=>{
                            exit.remove();
                        })
                    })
                }  
            )

    // countriesSelected.forEach((c)=>{
    //     checkboxSelectedCountries.set(c,groupByCountry.get(c))
    // })
    // console.log(checkboxSelectedCountries)
    // var update = groupSvg.selectAll(".group")
    //                     .data(checkboxSelectedCountries)
    //                     .join("g")
    //                     .attr("class",(d)=>{
    //                         return d[0].replace(/\s/g, '')
    //                     })
    //     update.enter()
    //     .append("path") 
    //         // .data(checkboxSelectedCountries)
    //         .attr("class","line")
    //         .style("opacity",setOpacityValue)
    //         .attr("stroke",(d,i)=>{
    //             return colorLines(d[0])
    //         })
    //         .transition()
    //         .duration(2000)
    //         .attr("d", d => {
    //             if (countriesSelected.includes(d[0])){
    //                 return d3.line()
    //                         .x((d)=> { endX =new Date(d["Year"],0,1) ;return xScale(new Date(d["Year"],0,1)); })
    //                         .y((d)=> { endY= d[attributeSelected];return yScale(d[attributeSelected]); })
    //                         (d[1])
    //                 }
    //         })
    // var update = d3.selectAll(".line")
    //                 .data(groupByCountry)
    //                 .filter(function(d, i) { console.log(d);return d3.select(this).attr("d")})
                    // .transition()
                    // .duration(2000)
                    // .attr("d", d => {
                    //     if (countriesSelected.includes(d[0])){
                    //         return d3.line()
                    //                 .x((d)=> { endX =new Date(d["Year"],0,1) ;return xScale(new Date(d["Year"],0,1)); })
                    //                 .y((d)=> { endY= d[attributeSelected];return yScale(d[attributeSelected]); })
                    //                 (d[1])
                    //         }
                    // })
    
    // var update = d3.selectAll(".line")
    //                 .data(groupByCountry)
    //                 .filter(function(d, i) { return !d3.select(this).attr("d")})
    //                 .attr("d", d => {
    //                     if (countriesSelected.includes(d[0])){
    //                         return d3.line()
    //                                 .x((d)=> { endX =new Date(d["Year"],0,1) ;return xScale(new Date(d["Year"],0,1)); })
    //                                 .y((d)=> { endY= d[attributeSelected];return yScale(d[attributeSelected]); })
    //                                 (d[1])
    //                         }
    //                 })
    //                 .transition()
    //                 .duration(2000)
    //                 .attrTween("stroke-dasharray", function() {
    //                     var length = this.getTotalLength();
    //                     return d3.interpolateString("0," + length, length + "," + length);
    //                 })
}

function createAxisSVG(data, countriesSelected,attributeSelected){
    xAxis = []
    for (let year = 1990; year <= 2013; year++) {
        xAxis.push(new Date(year,1,1));
    }
    xAxis = d3.extent(xAxis);
    // d3.selectAll("#plot_svg g").remove();
    xScale = d3.scaleTime()
                        .domain(xAxis)
                        .range([0, innerwidth]);
    var [minVal, maxVal] = getMaximumValue(data, countriesSelected,attributeSelected)

    yScale = d3.scaleLinear()
                        .domain([minVal,maxVal])
                        .range([innerHeight,0]);
    
    svgBar = d3.selectAll("#plot_svg")
                .attr("width", innerwidth)
                .attr("height", innerHeight)
                .append("g")
                .attr("id", "axis")
                .attr('transform','translate('+ margin.left + ',' +margin.top+')');
    svgBar.append("g")
            .attr("id", "x-axis")
            .attr("transform", "translate(0,"+ innerHeight + ")")
            .call(d3.axisBottom(xScale))
    svgBar.append("g")
            .attr("id", "y-axis")
            .call(d3.axisLeft(yScale))

    svg.append("text")
        .attr( 'class', 'x-label') 
        .attr( 'text-anchor','middle')
        .attr('x', innerwidth/2)
        .attr('y',innerHeight+60)
        .text('Year')

    svg.append("text")
        .attr( 'class', 'y-label') 
        .attr( 'text-anchor','middle')
        .attr('transform','rotate(-90)')
        .attr('x',-innerHeight/2)
        // .attr('y',innerHeight/2)
        .text(attributeSelected)

    lineGraph = svg
    .append("g")
    .attr('transform','translate('+ margin.left + ',' +margin.top+')')
    .attr("class","groupchart")

    groupByCountry = d3.group(data,(d)=>{return d["Country"]});
}

function yAxisTransition(){
    // if (countriesSelected.length==0){
    //     yScale.domain([0, 0]);
    //     yAxis = d3.select("#y-axis")
    //                 .transition()  
    //                 .duration(500)
    //                 .call(d3.axisLeft(yScale));
    //     // document.getElementById("selectedNoCountry").style.display = "block";
    // }
    // else{
        // var selectedNoCountry = document.getElementById("selectedNoCountry")
        // if (selectedNoCountry){
        //     selectedNoCountry.style.display = "None";
        // }
        var [minVal, maxVal] = getMaximumValue(global_development_wrangling, countriesSelected,attributeSelected)
        if (minVal<0)
            minVal = 0
        yScale.domain([minVal,maxVal])
        // xScale.domain()
        // xAxis = d3.extent(xAxis);
    // d3.selectAll("#plot_svg g").remove();
        // xScale = d3.scaleTime()
        // .domain(xAxis)
        // .range([0, innerwidth]);
        yAxis = d3.selectAll("#y-axis")
                    .transition()  
                    .duration(500)
                    .call(d3.axisLeft(yScale));
        d3.selectAll(".y-label")
                    .transition()
                    .duration(500)
                    .text(attributeSelected)
    // }
}

function getMaximumValue(data, countriesSelected,attributeSelected){
    getMax = -9999999
    getMin = +9999999
    data.forEach(d=>{
        if(countriesSelected.includes(d["Country"])){
            if (d[attributeSelected] > getMax){
                getMax = d[attributeSelected]
            }
            if (d[attributeSelected]< getMin){
                getMin = d[attributeSelected]
            }
        }
    })
    return [getMin,getMax];
}

function selectDefaultCountry(){
    document.querySelector(`button[data-bs-target='#panelsStayOpen-0']`).click();
    document.querySelector("#SouthAsia_India").checked = true;
    countriesSelected.push("India");
    attributeSelected = document.getElementById("attributeList").value;
}

function createCountryFlagDict(countryFlag){
    flag = {}
    countryFlag.forEach(element => {
        flag[element["name"]] = element["code"]
    });
    return flag
}
function createRegionWiseControl(region_country, flag){
    //Wrangling for regions set
    region_country.forEach(element => {
        countryRegionMap.set(element["name"],element["World bank region"])
        if (element["World bank region"] in region_dict){
            region_dict[element["World bank region"]].push(element["name"])
        }
        else{
            region_dict[element["World bank region"]] = Array(element["name"]);
        }
    });
    colorSchemeCountry();

    var regionDiv = document.getElementById("regions");
    const keys = Object.keys(region_dict);

    //Dropdown in dashboard
    keys.forEach((region,i) => {
        var region_heading =`
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-${region.replace(/\s/g, '')}">
                <button class="accordion-button collapsed" style='color:${colorLines(region)}' type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-${i}" aria-expanded="false" aria-controls="panelsStayOpen-${i}">
                    ${region}
                </button>
                </h2>
                <div id="panelsStayOpen-${i}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-${i}" style="">
                    <div class="accordion-body">
                        <div class="containerInputs">`;
        var selectAllButton = `
        <button id="${region.replace(/\s/g, '')}" class="btn selectAllbtn" onclick="selectAllCountry_regionSpecific(event)">Select All</button>`;
        region_dict[region].forEach(country =>{
            region_heading += `
                <div class="inputLabel"> 
                    <input onclick="selectCountry(event)" class="checkbox" type=checkbox id="${region.replace(/\s/g, '')}_${country.replace(/\s/g, '')}" name="${region.replace(/\s/g, '')}" value="${country}">
                    <label class="label" for="${region.replace(/\s/g, '')}_${country.replace(/\s/g, '')}">${country}</label>
                    <span class="fi fi-${flag[country]} fis"></span>
                </div>`
        })
        region_heading+=`</div><div class="containerSelectButton">`
        region_heading+= selectAllButton;
        region_heading+=`</div></div></div></div>`
        regionDiv.insertAdjacentHTML('beforeend', region_heading)
    });
}

function selectAllCountry_regionSpecific(e){
    var id = e.target.id
    const checkboxes = document.querySelectorAll(`input[type='checkbox'][name='${id}']`);
    if (e.target.innerText === "Select All"){
        checkboxes.forEach(checkbox => {
            const checked = checkbox.checked;
            checkbox.checked = true;
            if (!countriesSelected.includes(checkbox.value)){
                countriesSelected.push(checkbox.value);
            }
          });
          e.target.innerHTML = "Deselect All"
    }
    else{
        checkboxes.forEach(checkbox => {
            const checked = checkbox.checked;
            checkbox.checked = false;
            index = countriesSelected.indexOf(checkbox.value);
            if (index!==-1){
                countriesSelected.splice(index,1);
            }
          });
          e.target.innerHTML = "Select All"

    }
    // createAxisSVG(global_development_wrangling,countriesSelected,attributeSelected)
    yAxisTransition()
    plotLines();
}

function selectCountry(event){
    const country = event.target.value;
    if (event.target.checked){
        countriesSelected.push(country);
    }
    else{
        index = countriesSelected.indexOf(country);
        if (index!==-1){
            countriesSelected.splice(index,1);
        }
    }
    yAxisTransition()
    plotLines()
}

function opacityValue(e){
    setOpacityValue = e.target.value
    document.getElementById("opacityValue").innerText = "Opacity : "+ (setOpacityValue*100).toFixed(1)+"%";
    svg.selectAll(".lc-group")
            .style("opacity",setOpacityValue)
}

function populateAttributeList(global_development){
    new_globalDevelopemnt = []
    global_development.forEach(obj=>{
        if (obj["Year"]<=1989){
            return ;
        }
        new_globalDevelopemnt.push({
            "Country":obj["Country"],
            "Year": +obj["Year"],
            "Birth Rate":+obj["Data.Health.Birth Rate"],
            "Death Rate":+obj["Data.Health.Death Rate"],
            "Fertility Rate":+obj["Data.Health.Fertility Rate"],
            "Population Growth": +obj["Data.Health.Population Growth"],
            "Agricultural Land Percent":+obj["Data.Rural Development.Agricultural Land Percent"],
            "Arable Land":+obj["Data.Rural Development.Arable Land"],
            "Population Density": +obj["Data.Urban Development.Population Density"],
            "Telephone Lines": +obj["Data.Infrastructure.Telephone Lines"],
            "Female Life Expectancy at Birth": +obj["Data.Health.Life Expectancy at Birth, Female"],
            "Male Life Expectancy at Birth": +obj["Data.Health.Life Expectancy at Birth, Male"]
        });
    });

    attributeOptionList = ["Birth Rate","Death Rate","Fertility Rate","Population Growth","Agricultural Land Percent","Arable Land","Population Density","Telephone Lines","Female Life Expectancy at Birth","Male Life Expectancy at Birth"]

    var selectTag = document.querySelector("#attributeList");
    attributeOptionList.forEach(attribute => { //Adding attributes to dropdown
        selectTag.add(
            new Option(attribute, attribute)
        )
    });
    return new_globalDevelopemnt;
}

function selectedAttribute(e){
    attributeSelected = document.getElementById("attributeList").value;
    yAxisTransition();
    plotLines()
}

function animateAgain(){
    const group = svg.selectAll(".groupchart")
    group.selectAll(".lc-group")
    .transition()
    .duration(1000)
    .ease(d3.easeCubicOut)
    .style("opacity","0")
    .remove()
    setTimeout(()=>{
        animatePlotLines()
    }, 1500)
}

function yearSelection(){
    const group = svg.selectAll(".groupchart")
    group.selectAll(".lc-group")
    .transition(duration)
    .ease(d3.easeCubicOut)
    .style("opacity",0)
    .remove()
    var startYear = parseInt(document.getElementById("startYear").value)
    var endYear = parseInt(document.getElementById("endYear").value)
    // if (endYear-startYear<10)
    //     endYear+=1
    if (startYear<=endYear){
        xAxis = []
        for (let year = startYear; year <= endYear; year++) {
            xAxis.push(new Date(year,1,1));
        }
        xAxis = d3.extent(xAxis);
        xScale = xScale.domain(xAxis)
        xAxis = d3.selectAll("#x-axis")
                    .transition()  
                    .duration(500)
                    .call(d3.axisBottom(xScale));
        
       var new_globalDevelopemnt2 = []
        global_development.forEach(obj=>{
            if (obj["Year"]>=startYear && obj["Year"]<=endYear){
                new_globalDevelopemnt2.push({
                    "Country":obj["Country"],
                    "Year": +obj["Year"],
                    "Birth Rate":+obj["Data.Health.Birth Rate"],
                    "Death Rate":+obj["Data.Health.Death Rate"],
                    "Fertility Rate":+obj["Data.Health.Fertility Rate"],
                    "Population Growth": +obj["Data.Health.Population Growth"],
                    "Agricultural Land Percent":+obj["Data.Rural Development.Agricultural Land Percent"],
                    "Arable Land":+obj["Data.Rural Development.Arable Land"],
                    "Population Density": +obj["Data.Urban Development.Population Density"],
                    "Telephone Lines": +obj["Data.Infrastructure.Telephone Lines"],
                    "Female Life Expectancy at Birth": +obj["Data.Health.Life Expectancy at Birth, Female"],
                    "Male Life Expectancy at Birth": +obj["Data.Health.Life Expectancy at Birth, Male"]
                });
            }
        });

        groupByCountry2 = d3.group(new_globalDevelopemnt2,(d)=>{return d["Country"]});
        groupByCountry = groupByCountry2
        setTimeout(()=>{
            animatePlotLines()
        }, duration-1300)
    }


}

function isNameOrFlag(event){
        switchValue = switchInput.checked?"name":"flag";
        const group = svg.selectAll(".lc-group");
        group.selectAll(".flag")
        .style("display",(d)=>{
            if (switchValue=="flag")
                return "block"
            else
                return "none"
        })
        group.selectAll(".countryText")
        .style("display",(d)=>{
            if (switchValue=="name")
                return "block"
            else
                return "none"
        })


}

function selectAllRegions(){
    var check = document.getElementById("selectAllRegions");
    countriesSelected.splice(0,countriesSelected.length);
    if (check.checked){
        countryRegionMap.forEach((region,country)=>{
        var selectedElementID = region.replace(/\s/g, '') +"_"+ country.replace(/\s/g, '')
        var countryCheckBox = document.getElementById(selectedElementID);
        countryCheckBox.checked = true;
        countriesSelected.push(country)
        })
    }
    else{
        countryRegionMap.forEach((region,country)=>{
            var selectedElementID = region.replace(/\s/g, '') +"_"+ country.replace(/\s/g, '')
            var countryCheckBox = document.getElementById(selectedElementID);
            countryCheckBox.checked = false;
        })
    }
    yAxisTransition()
    plotLines()
}
