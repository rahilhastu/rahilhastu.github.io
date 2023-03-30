const svg = d3.select('svg');
const width = +svg.style('width').replace('px', '');
const height = +svg.style('height').replace('px', '');
const margin = {top: 20, bottom: 50, right: 50, left: 60};
const innerwidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const radius = Math.min(width-50, height-50) / 2;
const donutWidth = 75;                   

var countArray, 
labelDict;

Tooltip = d3.select("#div_template")
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip") //Referred my own code from Homework 1

var extraCredit = document.querySelector("#character-name");

var middleSvg = document.querySelector("#pie_div").getBoundingClientRect();

function submitText(){
    countArray = Array(32).fill(0);
    let txtArea = document.querySelector("#wordbox").value.toLowerCase();
    if (txtArea.length ==0){
        setTimeout(()=>{
            alert("Please enter Data")
        },700);
        countArray = Array(32).fill(0);
        d3.selectAll("#pie_svg g").remove();

    }
    txtArea = txtArea.trim().split("");
    txtArea.forEach((e, i) => {
        let ordValue = e.charCodeAt(0);
        // period, comma, question mark, exclamation mark, colon, and semi-colon
        if (ordValue == 46 || ordValue == 44 || ordValue == 63 || ordValue == 33 || ordValue == 58 || ordValue == 59){
            switch(ordValue){
                case 46:
                    countArray[26]+=1;
                    break;
                case 44:
                    countArray[27]+=1;
                    break;
                case 63:
                    countArray[28]+=1;
                    break;
                case 33:
                    countArray[29]+=1;
                    break;
                case 58:
                    countArray[30]+=1;
                    break;
                case 59:
                    countArray[31]+=1;
                    break;
            }
        }
        else if (97 <= ordValue <= 122){
            countArray[ordValue-97]+=1;
        }
        else{
            pass;
        }
    })
    console.log(countArray);
    d3.selectAll("#bar_svg g").remove();
    drawDonutChart();
}

function drawDonutChart(){
    labelDict = [
        {key:"Consonants", value:0},
        {key:"Vowels", value:0},
        {key:"Punctuations", value:0}
    ];

    countArray.forEach((e,i) => {
        if (i == 0 || i == 4 || i == 8 || i == 14 || i == 20 || i == 24){
            labelDict[1].value+=e; //Vowels
        }
        else if(i>=26){
            labelDict[2].value+=e; //Punctuations
        }
        else{
            labelDict[0].value+=e; //Consonants
        }
    });

    let svg = d3.select('#pie_svg')
                .append('g')
                .attr('transform','translate('+ innerwidth/1.6 + ',' + innerHeight/1.7 +')');

    var color = d3.scaleOrdinal(d3.schemePastel2);
    
    var arc = d3.arc()
        .innerRadius(radius - donutWidth)             
        .outerRadius(radius);
        
    var pie = d3.pie()
        .value(function(d) { 
            console.log(d);
            return d.value; 
        })


    var path = svg.selectAll('path')
          .data(pie(labelDict))
          .enter()
          .append('path')
          .attr('d', arc)
          .attr("stroke-width",1)
          .attr('stroke',"black")
          .attr('fill', function(d, i) { 
            return color(i);
          })
            .on("mouseover", function(){
                    d3.select(this)
                        .attr("stroke-width",4)
                }
            )
            .on("mouseout", function(){
                    d3.select(this)
                        .attr("stroke-width",1)
                    svg.select("text").remove()
                }           
            )
            .on("mousemove", function(event){
                if (svg.select("text")._groups[0][0] == undefined){
                    svg.append("svg:text")
                    .attr("text-anchor", "middle")
                    .attr("font-size","15")
                    .text(()=>{
                        if (event.target.__data__.data.key == "Consonants"){
                            return "Consonants: "+event.target.__data__.data.value;
                        }
                        else if(event.target.__data__.data.key == "Vowels"){
                            return "Vowels: "+event.target.__data__.data.value;
                        }
                        else{
                            return "Punctuations: "+event.target.__data__.data.value;
                        }
                    });
                }
                }
            )
            .on("click",(event)=>{
                console.log("Bar Graph Time!!!!");
                var vowels = ["a", "e", "i", "o", "u", "y"];
                var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x','z'];
                var punctuations = ['.',',','?','!',':',';']; // period, comma, question mark, exclamation mark, colon, and semi-colon
                if (event.target.__data__.data.key == "Consonants"){
                    drawBarGraph(consonants,event.target.getAttribute("fill"));
                }
                else if(event.target.__data__.data.key == "Vowels"){
                    drawBarGraph(vowels,event.target.getAttribute("fill"));
                }
                else{
                    drawBarGraph(punctuations,event.target.getAttribute("fill"), true);
                }
            });
}

function drawBarGraph(alpha, colorBar, punctationFlag = false){
    d3.selectAll("#bar_svg g").remove();
    let svgBar = d3.select('#bar_svg')
                .attr("width", innerwidth)
                .attr("height", innerHeight)
                .append("g")
                .attr('transform','translate('+ margin.left + ',' +margin.top+')');

    var count =[];
    if (punctationFlag){
        for(let i =26; i<countArray.length;i++){
            count.push(countArray[i]);
        }
    }
    else{
        count = alpha.map((c)=>{
            return countArray[c.charCodeAt(0)-97];
        });
    }
    var getMax = Math.max(...count);

    var x = d3.scaleBand()
            .range([0, innerwidth])
            .domain(alpha)
            .padding(0.2);

    var y = d3.scaleLinear()
            .domain([0, getMax])
            .range([innerHeight, 0])

    svgBar.append("g")
        .attr("transform", "translate(0,"+ innerHeight + ")")
        .call(d3.axisBottom(x))
    svgBar.append("g")
        .call(d3.axisLeft(y))
    
    alphaDict = alpha.map((c, i)=>{
        return {'character':c, 'count':count[i]};
    })

    var bar = svgBar.selectAll("barChart")
                .data(alphaDict)
                .enter()
                .append("rect")
                .attr("x", (d, i)=>{
                    return x(d['character']);
                })
                .attr("y", (d,i)=>{
                    return y(d['count']);
                })
                .attr("width", x.bandwidth())
                .attr("height", (d,i)=> { return innerHeight - y(d['count']); })
                .attr("fill", colorBar)
                .attr("stroke-width", "1")
                .attr("stroke", "black")
                .on("mousemove", (event)=>{
                    let selectedBar = event.target.__data__;
                    Tooltip
                        .html("Character: <b>"+selectedBar['character']+"</b><br>Count: <b>"+selectedBar["count"]+"<b>") //Referred my own code from Homework 1
                        .style("left", (event.pageX+15) + "px")
                        .style("top", (event.pageY) + "px")
                        .style("opacity",1);
                    extraCredit.innerHTML = "' "+selectedBar['character']+" ' : "+ selectedBar["count"];
                })
                .on("mouseout",()=>{
                    Tooltip
                        .style("opacity",0);
                    extraCredit.innerHTML = "is None";
                })

}