// Hint: This is a good place to declare your global variables
const svg = d3.select('svg');
const width = +svg.style('width').replace('px','');
const height = +svg.style('height'). replace('px','');
// console.log(width, height);
const margin = { top:20, bottom: 50, right: 50, left: 60};
const innerwidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
var allCountryList, female_data, male_data, allyears, yearsExtent, maxOfFemaleMale, currentCountry, previousF=0;
var countryOptionList =[];
var selectedCountries= [];
var combinedData, alterFemaleData, alterMaleData, Tooltip;
// This function is called once the HTML page is fully loaded by the browser
document.addEventListener('DOMContentLoaded', function () {
   // Hint: create or set your svg element inside this function
        //LEGEND
    svg.append('rect')
        .attr('x', innerwidth)
        .attr('y', -20)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#F4508B');
     
     svg.append('text')
         .attr('x', innerwidth + 20)
         .attr('y', -8)
        .text("Female Employement Rate");
     
     svg.append('rect')
        .attr('x', innerwidth)
        .attr('y', 5)
        .attr('width', 15)
        .attr('height', 15)
        .attr('fill', '#008EE9')
        .text("Male Employement Rate");
     
     svg.append('text')
        .attr('x', innerwidth + 20)
        .attr('y', 18)
       .text("Male Employement Rate");

    Tooltip = d3.select("#div_template")
       .append("div")
       .style("opacity", 0)
       .attr("class", "tooltip")
   // This will load your two CSV files and store them into two arrays.
   Promise.all([d3.csv('data/females_data.csv'),d3.csv('data/males_data.csv')])
        .then(function (values) {
            female_data = values[0];
            male_data = values[1];
            allCountryList = Object.keys(female_data[0]).slice(1); // Getting all the country List
            selectedCountries = allCountryList.sort(() => Math.random() - Math.random()).slice(0, 5); //Selecting 5 random countries on page reload
            allyears = female_data.map(y => new Date(y["Year"],0,1));
            selectedCountries.forEach(e => { // Creating options to add to the dropdown
                countryOptionList.push(
                    {
                        text: e,
                        value: e
                    }
                )
            });

            var selectTag = document.querySelector("#countryList");
            countryOptionList.forEach(country => { //Adding countries to dropdown
                selectTag.add(
                    new Option(country.text, country.value)
                )
            });

            allyears.unshift(new Date(+female_data[0]["Year"]-1,0,1));
            allyears.push(new Date(+female_data[female_data.length -1]["Year"]+1,0,1));
            yearsExtent = d3.extent(allyears);

            currentCountry = selectTag.value;
            selectTag.addEventListener("change", (e)=>{
                currentCountry = e.target.value; //Selecting country from Dropdown
                drawLolliPopChart(currentCountry, yearsExtent);
            });
            // Hint: This is a good spot for doing data wrangling
            alterFemaleData = female_data.map(d => {
                obj = {...d, isFemale: true};
                return obj;
            });
            alterMaleData = male_data.map(d => {
                obj = {...d, isFemale: false};
                return obj;
            });
            combinedData = [...alterFemaleData, ...alterMaleData];
            // console.log(combinedData)

            drawLolliPopChart(currentCountry);
        });
});

// Use this function to draw the lollipop chart.
function drawLolliPopChart(country) {
    var padding = 5,
    currentData;
    console.log(country);
    const xScale = d3.scaleTime()
                    .domain(yearsExtent)
                    .range([0, innerwidth]);

    const yScale = d3.scaleLinear()
                    .domain([0, getMaximumValue()])
                    .range([innerHeight,0]);

    // svg.select('g').remove(); //Removing previous drawings!

    svg.selectAll('g')
        .data(combinedData)
        .join(
            enter => {
                const g = enter.append("g")
                    g.append("line")
                    .classed("female_data", true)
                    .attr("x1", (fD, i) => { return xScale(new Date(+fD["Year"],0,1));})
                    .attr("y1", yScale(0))
                    .attr("x2", (fD, i) => { return xScale(new Date(+fD["Year"],0,1));})
                    .attr("y2", yScale(0))
                    .attr("stroke", (fd, i) =>{
                        if (fd["isFemale"]){
                            return "#F4508B"
                        }
                        else{
                            return "#008EE9"
                        }
                    })
                    .attr('transform', (fD, i)=>{
                        if (fD["isFemale"]){
                            return 'translate('+ (margin.left + padding) + ')'
                        }
                        else{
                            return 'translate('+ (margin.left - padding) + ')'
                        }
                    })
                    .call(enter => enter.transition()
                            .duration(1000)
                            .attr("y2", (fD, i) => {
                                                    if (fD["isFemale"]){
                                                        return yScale(+fD[country]);
                                                    }
                                                    else{
                                                        return yScale(+fD[country]);
                                                    }
                                                }
                                )
                        )
                    g.append("circle")
                        .attr('cx', (fD, i) => { currentData = +fD[country]; return xScale(new Date(+fD["Year"],0,1));})
                        .attr('cy', yScale(0))
                        .attr("r", '4')
                        .style("fill", (fD, i) =>{
                            if (fD["isFemale"]){
                                return "#F4508B"
                            }
                            else{
                                return "#008EE9"
                            }
                        })
                        .attr("title", currentData)
                        .attr("stroke", (fD)=>{
                            if (fD["isFemale"]){
                                return "#f53d68"
                            }
                            else{
                                return "#0073ba"
                            }})
                        .attr('transform', (fD,i)=>{
                            if (fD["isFemale"]){
                                return 'translate('+ (margin.left + padding) + ')'
                            }
                            else{
                                return 'translate('+ (margin.left - padding) + ')'
                            }
                        })
                        .call(enter => enter.transition()
                                .duration(1000)
                                .attr('cy', (fD, i) => { 
                                    if (fD["isFemale"]){
                                        return yScale(+fD[country]);
                                    }
                                    else{
                                        return yScale(+fD[country]);
                                    }})
                            )
            },
            update => {
                console.log(update)
                update.selectAll("line")
                        .call(update => update.transition()
                            .duration(1000)
                            .attr("y2", (fD, i) => { 
                                if (fD["isFemale"]){
                                    return yScale(+fD[country]);
                                }
                                else{
                                    return yScale(+fD[country]);
                                }})
                        )
                update.selectAll("circle")
                        .call(update => update.transition()
                        .duration(1000)
                        .attr('cy', (fD, i) => { 
                                if (fD["isFemale"]){
                                    return yScale(+fD[country]);
                                }
                                else{
                                    return yScale(+fD[country]);
                                }})
                        )
            }
        )
    // On Hover Animation
    svg.selectAll('g')
            .on("mouseover", function(){
                d3.select(this)
                    .attr("stroke",  (fD)=>{
                        if (fD["isFemale"]){
                            return "#f53d68"
                        }
                        else{
                            return "#0073ba"
                        }})
                    .attr("stroke-width",3)
                    .select("circle")
                        .attr('r','7')
                        .attr("stroke",(fD)=>{
                            if (fD["isFemale"]){
                                return "#f53d68"
                            }
                            else{
                                return "#0073ba"
                            }});
                Tooltip
                    .style("opacity", 1)
            })
            .on("mousemove", function(event){
                Tooltip
                    .html("Employment Rate: <b>"+this.__data__[country]+"</b><br>Year: <b>"+this.__data__["Year"]+"<b>")
                    // console.log(event)
                    .style("left", (event.pageX+15) + "px")
                    .style("top", (event.pageY) + "px")
            })
            .on("mouseout", function(fd, i){
                d3.select(this)
                    .attr("stroke",  (fD)=>{
                        if (fD["isFemale"]){
                            return "#F4508B"
                        }
                        else{
                            return "#008EE9"
                        }})
                    .attr("stroke-width",1)
                    .select("circle")
                        .attr('r','4')
                        .attr("stroke",(fD)=>{
                            if (fD["isFemale"]){
                                return "#F4508B"
                            }
                            else{
                                return "#008EE9"
                            }});
                Tooltip
                    .style("opacity", 0)
            })
    //X and Y Scales
    svg.append('g')
        .call(d3.axisBottom(xScale))
        .attr('transform', 'translate('+margin.left +', ' +innerHeight+')')

    svg.append("g")
        .call(d3.axisLeft(yScale))
        .attr('transform', 'translate('+margin.left+')' );

    //Axis Labels
    svg.append('text')
        .attr( 'class', 'axis-label') 
        .attr( 'text-anchor','middle')
        .attr('x', innerwidth/2)
        .attr('y',innerHeight+40)
        .text('Year')
    
    svg.append('text')
        .attr('class', 'axis-label') 
        .attr('text-anchor','middle')
        .attr('transform', 'rotate(-90)')
        .attr('x', -250)
        .attr('y', -5)
        .text('Employement Rate');
       
}

function getMaximumValue(){
    var largestF = -999999;
    var largestM = -999999;
    female_data.forEach(f =>{
        if (largestF < +f[currentCountry]){
            largestF = +f[currentCountry];
        }
    });
    male_data.forEach(f =>{
        if (largestM < +f[currentCountry]){
            largestM = +f[currentCountry];
        }
    });
    return Math.max(largestF ,largestM);
}
