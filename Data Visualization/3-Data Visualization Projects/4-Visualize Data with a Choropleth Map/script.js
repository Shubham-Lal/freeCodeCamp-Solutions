let educationURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json";
let countyURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json";

let educationData;
let countyData;

let canvas = d3.select("#canvas");
let tooltip = d3.select("#tooltip");

let drawMap = () => {
    canvas
        .selectAll("path")
        .data(countyData)
        .enter()
        .append("path")
        .attr("d", d3.geoPath())
        .attr("class", "county")
        .attr("fill", countyDataItem => {
            let id = countyDataItem["id"];
            let county = educationData.find(item => {
                return item["fips"] === id;
            });
            let percentage = county["bachelorsOrHigher"];
            if (percentage <= 15) return "tomato";
            else if (percentage <= 30) return "orange";
            else if (percentage <= 45) return "lightgreen";
            else return "darkgreen";
        })
        .attr("data-fips", countyDataItem => {
            return countyDataItem["id"];
        })
        .attr("data-education", countyDataItem => {
            let id = countyDataItem["id"];
            let county = educationData.find(item => {
                return item["fips"] === id;
            });
            return percentage = county["bachelorsOrHigher"];
        })
        .on("mouseover", countyDataItem => {
            tooltip
                .transition()
                .style("visibility", "visible");

            let id = countyDataItem["id"];
            let county = educationData.find(item => {
                return item["fips"] === id;
            });

            tooltip
                .text(`${county["fips"]} - ${county["area_name"]}, ${county["state"]}: ${county["bachelorsOrHigher"]}`);

            tooltip
                .attr("data-education", county["bachelorsOrHigher"]);
        })
        .on("mouseout", () => {
            tooltip
                .transition()
                .style("visibility", "hidden")
        });
};

d3
    .json(countyURL)
    .then((data, error) => {
        if (error) {
            console.log("countyURL error: ", error);
        }
        else {
            countyData = topojson.feature(data, data.objects.counties).features;

            d3
                .json(educationURL)
                .then((data, error) => {
                    if (error) {
                        console.log("educationURL error: ", error);
                    }
                    else {
                        educationData = data;
                        drawMap();
                    }
                });
        }
    });