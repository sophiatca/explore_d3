// var paragraphs = document.getElementsByTagName("p");
// for (var i = 0; i < paragraphs.length; i++) {
//   var paragraph = paragraphs.item(i);
//   paragraph.style.setProperty("color", "white", null);
// }

// d3.selectAll("p").style("color", function() {
//   return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });

// d3.selectAll("p").style("color", function(d, i) {
//   return i % 2 ? "#fff" : "#eee";
// });

d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });

// d3.selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//   .enter().append("p")
//     .text(function(d) { return "I’m number " + d + "!"; });

// d3.select("body").transition()
//     .style("background-color", "black");

// d3.selectAll("circle").transition()
//     .duration(750)
//     .delay(function(d, i) { return i * 10; })
//     .attr("r", function(d) { return Math.sqrt(d * scale); });

d3.select("#viz-test")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100)
      .append("circle")
      .style("stroke", "gray")
      .style("fill", "white")
      .attr("r", 40)
      .attr("cx", 50)
      .attr("cy", 50)
      .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
      .on("mouseout", function(){d3.select(this).style("fill", "white");})
      .on("mousedown", animateFirstStep);

function animateFirstStep(){
    d3.select(this)
      .transition()
        .delay(0)
        .duration(1000)
        .attr("r", 10)
        .each("end", animateSecondStep);
};

function animateSecondStep(){
    d3.select(this)
      .transition()
        .duration(1000)
        .attr("r", 40);
};


var dataset = [],
    i = 0;

for(i=0; i<5; i++){
    dataset.push(Math.round(Math.random()*100));
}

var sampleSVG = d3.select("#viz-test")
    .append("svg")
    .attr("width", 400)
    .attr("height", 75);

sampleSVG.selectAll("circle")
    .data(dataset)
    .enter().append("circle")
    .style("stroke", "gray")
    .style("fill", "red")
    //.attr("r", 40)
    .attr("height", 40)
    .attr("width", 75)
    .attr("x", function(d, i){return i*80})
    .attr("y", 30);
    // .attr("cx", function(d, i){return i*80})
    // .attr("cy", 30)
