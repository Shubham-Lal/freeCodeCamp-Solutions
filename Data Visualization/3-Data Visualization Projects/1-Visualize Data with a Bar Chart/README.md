# Visualize Data with a Bar Chart

### Certification Project

[Live Site](https://barchart.certified2003.repl.co)

Objective: Build an app that is functionally similar to this: https://bar-chart.freecodecamp.rocks.

Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs we need. Give it our own personal style.

We can use HTML, JavaScript, CSS, and the D3 svg-based visualization library. The tests require axes to be generated using the D3 axis property, which automatically generates ticks along the axis. These ticks are required for passing the D3 tests because their positions are used to determine alignment of graphed elements. We will find information about generating axes at https://github.com/d3/d3/blob/master/API.md#axes-d3-axis. Required DOM elements are queried on the moment of each test. If we use a frontend framework (like Vue for example), the test results may be inaccurate for dynamic content. We hope to accommodate them eventually, but these frameworks are not currently supported for D3 projects.

- User Story #1: My chart should have a title with a corresponding id="title".

- User Story #2: My chart should have a g element x-axis with a corresponding id="x-axis".

- User Story #3: My chart should have a g element y-axis with a corresponding id="y-axis".

- User Story #4: Both axes should contain multiple tick labels, each with a corresponding class="tick".

- User Story #5: My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.

- User Story #6: Each .bar should have the properties data-date and data-gdp containing date and GDP values.

- User Story #7: The .bar elements' data-date properties should match the order of the provided data.

- User Story #8: The .bar elements' data-gdp properties should match the order of the provided data.

- User Story #9: Each .bar element's height should accurately represent the data's corresponding GDP.

- User Story #10: The data-date attribute and its corresponding .bar element should align with the corresponding value on the x-axis.

- User Story #11: The data-gdp attribute and its corresponding .bar element should align with the corresponding value on the y-axis.

- User Story #12: I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.

- User Story #13: My tooltip should have a data-date property that corresponds to the data-date of the active area.

Here is the dataset we will need to complete this project: https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

We can build your project by using this CodePen template and clicking Save to create our own pen. Or you can use this CDN link to run the tests in any environment we like: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js.

Once we're done, submit the URL to our working project with all its tests passing.