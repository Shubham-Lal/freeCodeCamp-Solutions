let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
let req = new XMLHttpRequest();

let values = [];

let xScale;
let yScale;

let width = 800;
let height = 600;
let padding = 40;

let svg = d3.select("svg");
let tooltip = d3.select("#tooltip");

let drawCanvas = () => {
    svg
        .attr("width", width)
        .attr("height", height);
};

let generateScales = () => {
    xScale = d3
        .scaleLinear()
        .domain([
            d3.min(values, item => {
                return item["Year"];
            }) - 1,
            d3.max(values, item => {
                return item["Year"];
            }) + 1
        ])
        .range([padding, width - padding]);

    yScale = d3
        .scaleTime()
        .domain([
            d3.min(values, item => {
                let date = new Date();
                date.setMinutes(0);
                date.setSeconds(item['Seconds']);
                return date;
            }),
            d3.max(values, item => {
                let date = new Date();
                date.setMinutes(0);
                date.setSeconds(item['Seconds']);
                return date;
            })
        ])
        .range([padding, height - padding]);
};

let drawPoints = () => {
    svg
        .selectAll("circle")
        .data(values)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .attr("r", "5")
        .attr("data-xvalue", item => {
            return item["Year"]
        })
        .attr("cx", item => {
            return xScale(item["Year"]);
        })
        .attr("data-yvalue", item => {
            let date = new Date();
            date.setMinutes(0);
            date.setSeconds(item['Seconds']);
            return date.toISOString();
        })
        .attr("cy", item => {
            let date = new Date();
            date.setMinutes(0);
            date.setSeconds(item['Seconds']);
            return yScale(date);
        })
        .attr("fill", item => {
            if (item["Doping"] !== "") {
                return "red"
            }
            else {
                return "green"
            }
        })
        .on("mouseover", item => {
            tooltip
                .transition()
                .style("visibility", "visible");

            if (item["Doping"] !== "") {
                tooltip
                    .text(item["Year"] + " - " + item["Name"] + " - " + item["Time"] + " - " + item["Doping"])
            }
            else {
                tooltip
                    .text(item["Year"] + " - " + item["Name"] + " - " + item["Time"] + " - " + "No Allegations")
            }

            tooltip
                .attr("data-year", item["Year"]);
        })
        .on("mouseout", () => {
            tooltip
                .transition()
                .style("visibility", "hidden")
        })
};

let generateAxes = () => {
    let xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    let yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));

    svg
        .append("g")
        .call(xAxis)
        .attr("id", "x-axis")
        .attr("transform", `translate(0, ${height - padding})`);

    svg
        .append("g")
        .call(yAxis)
        .attr("id", "y-axis")
        .attr("transform", `translate(${padding}, 0)`);
};

req.open("GET", url, true);
req.onload = () => {
    values = JSON.parse(req.responseText);
    drawCanvas();
    generateScales();
    drawPoints();
    generateAxes();
};
req.send();