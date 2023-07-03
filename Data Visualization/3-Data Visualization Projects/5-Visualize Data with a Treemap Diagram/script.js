let movieDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json";

let movieData;

let canavs = d3.select("#canvas");
let tooltip = d3.select("#tooltip");

let drawTreeMap = () => {
    let hierarchy = d3
        .hierarchy(movieData, node => {
            return node["children"];
        })
        .sum(node => {
            return node["value"];
        })
        .sort((node1, node2) => {
            return node2["value"] - node1["value"];
        });

    let createTreeMap = d3
        .treemap()
        .size([1000, 600]);

    createTreeMap(hierarchy);

    let movieTiles = hierarchy.leaves();

    let block = canavs
        .selectAll("g")
        .data(movieTiles)
        .enter()
        .append("g")
        .attr("transform", movie => {
            return `translate(${movie["x0"]}, ${movie["y0"]})`;
        });

    block
        .append("rect")
        .attr("class", "tile")
        .attr("fill", movie => {
            let category = movie["data"]["category"];

            if (category === "Action") {
                return "orange";
            }
            else if (category === "Adventure") {
                return "coral";
            }
            else if (category === "Comedy") {
                return "khaki";
            }
            else if (category === "Drama") {
                return "lightgreen";
            }
            else if (category === "Animation") {
                return "pink";
            }
            else if (category === "Family") {
                return "lightblue";
            }
            else if (category === "Biography") {
                return "tan";
            }
        })
        .attr("data-name", movie => {
            return movie["data"]["name"];
        })
        .attr("data-category", movie => {
            return movie["data"]["category"];
        })
        .attr("data-value", movie => {
            return movie["data"]["value"];
        })
        .attr("width", movie => {
            return movie["x1"] - movie["x0"];
        })
        .attr("height", movie => {
            return movie["y1"] - movie["y0"];
        })
        .on("mouseover", movie => {
            tooltip
                .transition()
                .style("visibility", "visible");

            let revenue = movie["data"]["value"]
                .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            tooltip
                .html(`${movie["data"]["name"]} <hr /> Revenue: $${revenue}`);

            tooltip
                .attr("data-value", movie["data"]["value"]);
        })
        .on("mouseout", () => {
            tooltip
                .transition()
                .style("visibility", "hidden");
        });

    block
        .append("text")
        .text(movie => {
            return movie["data"]["name"];
        })
        .attr("x", 5)
        .attr("y", 20);
};

d3
    .json(movieDataURL)
    .then((data, error) => {
        if (error) {
            console.log(error);
        }
        else {
            movieData = data;
            drawTreeMap();
        }
    })