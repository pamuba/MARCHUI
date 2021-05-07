// d3.json("./data/ages.json").then(data=>{
//     data.forEach(d=>{
//         d.age = Number(d.age)
//     })

//     const svg = d3.select("#chart-area").append("svg")
//             .attr("width", 400)
//             .attr("height", 400)


//     //enter selection
//     const circles = svg.selectAll("circle")
//     .data(data)


//     circles.enter().append("circle")
//                 .attr("cx", (d,i) => (i*50)+50)
//                 .attr("cy", 100)
//                 .attr("r", (d,i)=> 2*d.age)
//                 .attr("fill",d=>{
//                     if(d.name === "Tony"){
//                         return "blue"
//                     }
//                     else{
//                         return "red"
//                     }
//                 })
//                 .catch(error=>{
//                     console.log(error)
//                 })
// });





const svg = d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400);

d3.json("data/buildings1.json").then(data => {
  data.forEach(d => {
    d.height = Number(d.height)
  })

  const y = d3.scaleLinear()
            .domain([0, 828])
            .range([0, 400])

//   console.log(y(828))

  const rects = svg.selectAll("rect")
    .data(data)
  
  rects.enter().append("rect")
    .attr("y", 0)
    .attr("x", (d, i) => (i * 60))
    .attr("width", 40)
    .attr("height", d => y(d.height))
    .attr("fill", "grey")
})