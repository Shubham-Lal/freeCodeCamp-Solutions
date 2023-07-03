# Visualize Data with a Treemap Diagram

### Certification Project

[Live Site](https://treemapdiagram.certified2003.repl.co)

Objective: Build an app that is functionally similar to this: https://treemap-diagram.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs we need. Give it our own personal style.

We can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. We will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required DOM elements are queried on the moment of each test. If we use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

- User Story #1: My tree map should have a title with a corresponding id="title".

- User Story #2: My tree map should have a description with a corresponding id="description".

- User Story #3: My tree map should have rect elements with a corresponding class="tile" that represent the data.

- User Story #4: There should be at least 2 different fill colors used for the tiles.

- User Story #5: Each tile should have the properties data-name, data-category, and data-value containing their corresponding name, category, and value.

- User Story #6: The area of each tile should correspond to the data-value amount: tiles with a larger data-value should have a bigger area.

- User Story #7: My tree map should have a legend with corresponding id="legend".

- User Story #8: My legend should have rect elements with a corresponding class="legend-item".

- User Story #9: The rect elements in the legend should use at least 2 different fill colors.

- User Story #10: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

- User Story #11: My tooltip should have a data-value property that corresponds to the data-value of the active area.

For this project we can use any of the following datasets:

Kickstarter Pledges: https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json
Movie Sales: https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json
Video Game Sales: https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json
We can build our project by using this CodePen template and clicking Save to create our own pen. Or we can use this CDN link to run the tests in any environment we like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Once we're done, submit the URL to our working project with all its tests passing.