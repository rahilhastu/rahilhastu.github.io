const LEFTSVG = d3.select("#left__svg");
const LEFTWIDTH = +LEFTSVG.style("width").replace("px", "");
const LEFTHEIGHT = +LEFTSVG.style("height").replace("px", "");
const MARGIN = { top: 20, bottom: 50, right: 50, left: 60 };
const LEFTINNERWIDTH = LEFTWIDTH - MARGIN.left - MARGIN.right;
const LEFTINNERHEIGHT = LEFTHEIGHT - MARGIN.top - MARGIN.bottom;

const RIGHTSVG = d3.select("#right__svg");
const RIGHTWIDTH = +RIGHTSVG.style("width").replace("px", "");
const RIGHTHEIGHT = +RIGHTSVG.style("height").replace("px", "");
const RIGHTINNERWIDTH = RIGHTWIDTH - MARGIN.left - MARGIN.right;
const RIGHTINNERHEIGHT = RIGHTHEIGHT - MARGIN.top - MARGIN.bottom;

const PADDING = 150;

var wrangledData,
  xLeftScale,
  yLeftScale,
  svgLeft,
  xRightScale,
  yRightScale,
  svgRight,
  xScale,
  yScale;

Tooltip = d3
  .select("#div_template")
  .append("div")
  .style("opacity", 0)
  .attr("class", "tooltip");

document.addEventListener("DOMContentLoaded", function () {
  var region_country;
  Promise.all([d3.csv("data/happyscore_income.csv")]).then(function (data) {
    let happyGDPCSV = data[0];
    wrangledData = getData(happyGDPCSV);
    createAxis();
    leftLineChart();
    rightLineChart();
  });
});

function mousemove(event, whichSvg, selectedDataNode) {
  if (whichSvg == "Left") {
    xScale = xLeftScale;
    yScale = yLeftScale;
  } else {
    xScale = xRightScale;
    yScale = yRightScale;
  }
  var mouseCoord = d3.pointer(event, selectedDataNode);
  var index = Math.floor(xScale.invert(mouseCoord[0]));
  var selectedData = d3.select(selectedDataNode).datum();
  var tooltipText;
  if (d3.select(selectedDataNode).node().tagName.toLowerCase() == "circle") {
    tooltipText =
      "Country : <b>" +
      selectedData.country +
      "</b><br>Happiness Score : <b>" +
      selectedData.happyScore +
      "</b><br>GDP : <b>" +
      selectedData.gdp +
      "</b>";
  } else if (
    d3.select(selectedDataNode).node().tagName.toLowerCase() == "path"
  ) {
    tooltipText =
      "Country : <b>" +
      selectedData[index].country +
      "</b><br>Happiness Score : <b>" +
      selectedData[index].happyScore +
      "</b><br>GDP : <b>" +
      selectedData[index].gdp +
      "</b>";
  }

  if (whichSvg === "Left") {
    d3.selectAll("#gdp_happy_line__").remove();
    LEFTSVG.insert("line", ":first-child")
      .attr("id", "gdp_happy_line__")
      .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")")
      .attr("x1", xScale(xScale.invert(mouseCoord[0])))
      .attr("y1", yScale(selectedData[index].happyScore))
      .attr("x2", xScale(xScale.invert(mouseCoord[0])))
      .attr("y2", yScale(0))
      .attr("stroke", "gray")
      .attr("stroke-width", 2)
      .attr("opacity", 0.5);
  }
  Tooltip.html(tooltipText) //Referred my own code from Homework 1
    .style("left", event.pageX + 15 + "px")
    .style("top", event.pageY + "px")
    .style("opacity", 1);
}

const mouseout = () => {
  Tooltip.style("opacity", "0");
  d3.selectAll("#gdp_happy_line__").remove();
};

const getData = (data) => {
  let cols = [];

  data.forEach((element, i) => {
    scoreData = {
      happyScore: element["happyScore"],
      gdp: element["GDP"],
      country: element["country"],
    };
    cols.push(scoreData);
  });
  console.log(cols);
  return cols;
};

const createAxis = () => {
  xLeftScale = d3.scaleLinear().domain([0, 56]).range([0, LEFTINNERWIDTH]);
  yLeftScale = d3.scaleLinear().domain([0, 7]).range([LEFTINNERHEIGHT, 0]);

  svgLeft = LEFTSVG.attr("width", LEFTINNERWIDTH)
    .attr("height", LEFTINNERHEIGHT)
    .append("g")
    .attr("id", "axis")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  svgLeft
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + LEFTINNERHEIGHT + ")")
    .call(
      d3.axisBottom(xLeftScale).ticks(30).tickPadding(3)
      // .tickFormat(function(d,i) { return wrangledData[i].country; })
    );
  // .selectAll("text") // Select all tick label texts
  // .attr("transform", function(d, i) {
  // return "rotate(-30) translate(-40, 0)";
  // }) // Apply a rotation of 30 degrees to the tick labels
  // .style("text-anchor", "start");
  svgLeft.append("g").attr("id", "y-axis").call(d3.axisLeft(yLeftScale));

  svgLeft
    .append("text")
    .attr("class", "x-label")
    .attr("text-anchor", "middle")
    .attr("x", LEFTINNERWIDTH / 2)
    .attr("y", LEFTINNERHEIGHT + 40)
    .text("Countries");

  svgLeft
    .append("text")
    .attr("class", "colorLables")
    .attr("text-anchor", "middle")
    .attr("x", LEFTINNERWIDTH / 2 - PADDING)
    .attr("y", LEFTINNERHEIGHT + 40)
    .text("Happiness Score");
  svgLeft
    .append("line")
    .attr("class", "colorLables__line")
    .attr("x1", LEFTINNERWIDTH / 2 - PADDING - 80)
    .attr("y1", LEFTINNERHEIGHT + 37)
    .attr("x2", LEFTINNERWIDTH / 2 - PADDING - 80 + 30)
    .attr("y2", LEFTINNERHEIGHT + 37)
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);

  svgLeft
    .append("text")
    .attr("class", "colorLables")
    .attr("text-anchor", "middle")
    .attr("x", LEFTINNERWIDTH / 2 + PADDING + 30)
    .attr("y", LEFTINNERHEIGHT + 40)
    .text("GDP");
  svgLeft
    .append("line")
    .attr("class", "colorLables__line")
    .attr("x1", LEFTINNERWIDTH / 2 + PADDING + 30 - 50)
    .attr("y1", LEFTINNERHEIGHT + 37)
    .attr("x2", LEFTINNERWIDTH / 2 + PADDING + 30 - 50 + 30)
    .attr("y2", LEFTINNERHEIGHT + 37)
    .attr("stroke", "orange")
    .attr("stroke-width", 2);

  svgLeft
    .append("text")
    .attr("class", "y-label")
    .attr("text-anchor", "middle")
    .attr("x", -LEFTINNERHEIGHT / 2)
    // .attr('y',LEFTINNERHEIGHT/550)
    .attr("transform", "translate(-30,10) rotate(-90)")
    .text("GDP and Happiness Score");

  //RIGHT AXIS
  xRightScale = d3.scaleLinear().domain([3, 8]).range([0, RIGHTINNERWIDTH]);
  yRightScale = d3.scaleLinear().domain([0, 1.8]).range([RIGHTINNERHEIGHT, 0]);

  svgRight = RIGHTSVG.attr("width", RIGHTINNERWIDTH)
    .attr("height", RIGHTINNERHEIGHT)
    .append("g")
    .attr("id", "axis")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  svgRight
    .append("g")
    .attr("id", "x-axis")
    .attr("transform", "translate(0," + RIGHTINNERHEIGHT + ")")
    .call(d3.axisBottom(xRightScale));
  svgRight.append("g").attr("id", "y-axis").call(d3.axisLeft(yRightScale));

  svgRight
    .append("text")
    .attr("class", "x-label")
    .attr("text-anchor", "middle")
    .attr("x", RIGHTINNERWIDTH / 2)
    .attr("y", RIGHTINNERHEIGHT + 40)
    .text("Happiness Score");

  svgRight
    .append("text")
    .attr("class", "y-label")
    .attr("text-anchor", "middle")
    .attr("x", -RIGHTINNERHEIGHT / 2)
    // .attr('y',innerHeight/2)
    .attr("transform", "translate(-30,10) rotate(-90)")
    .text("GDP");
};

const leftLineChart = () => {
  var less_wrangledData = wrangledData.slice();
  var removed_less_wrangledData = less_wrangledData.splice(0, 21);
  let happyLineLeft = LEFTSVG.append("g")
    .attr("id", "happy_line")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  happyLineLeft
    .selectAll("path")
    .data([less_wrangledData])
    .join("path")
    .attr("id", "happyLine")
    .attr("d", (d) =>
      d3
        .line()
        .x((d, i) => xLeftScale(i))
        .y((d, i) => yLeftScale(d.happyScore))(d)
    )
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 3)
    .on("mousemove", function (event) {
      mousemove(event, "Left", this);
    })
    // .on("mouseover", mouseover)
    .on("mouseout", mouseout);

  let gdpLineLeft = LEFTSVG.append("g")
    .attr("id", "gdp_line")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");
  gdpLineLeft
    .selectAll("path")
    .data([less_wrangledData])
    .join("path")
    .attr("id", "gdpLine")
    .attr("d", (d) =>
      d3
        .line()
        .x((d, i) => xLeftScale(i))
        .y((d, i) => yLeftScale(d.gdp))(d)
    )
    .attr("fill", "none")
    .attr("stroke", "orange")
    .attr("stroke-width", 3)
    .on("mousemove", function (event) {
      mousemove(event, "Left", this);
    })
    .on("mouseout", mouseout);
};

const rightLineChart = () => {
  let scatterPlot = RIGHTSVG.append("g")
    .attr("id", "scatterPlot")
    .attr("transform", "translate(" + MARGIN.left + "," + MARGIN.top + ")");

  scatterPlot
    .selectAll("circle")
    .data(wrangledData)
    .enter()
    .append("circle")
    .attr("cx", (d) => xRightScale(d.happyScore))
    .attr("cy", (d) => yRightScale(d.gdp))
    .attr("r", 4)
    .attr("fill", "steelBLue")
    .on("mousemove", function (event) {
      mousemove(event, "Right", this);
    })
    .on("mouseout", mouseout);

  //Regression Line
  const xValues = wrangledData.map((d) => d.happyScore);
  const yValues = wrangledData.map((d) => d.gdp);
  const regressionCoefficients = d3.regressionLinear()(
    xValues.map((d, i) => [d, yValues[i]])
  );
  scatterPlot
    .append("line")
    .attr("class", "linearRegression")
    .attr("x1", xRightScale(xValues[0]))
    .attr("y1", yRightScale(regressionCoefficients.predict(xValues[0])))
    .attr("x2", xRightScale(xValues[xValues.length - 1]))
    .attr(
      "y2",
      yRightScale(regressionCoefficients.predict(xValues[xValues.length - 1]))
    )
    .attr("stroke", "red")
    .style("opacity", "0.4")
    .style("stroke-dasharray", "2,2")
    .attr("stroke-width", 2)
    .on("mouseout", mouseout);
};
