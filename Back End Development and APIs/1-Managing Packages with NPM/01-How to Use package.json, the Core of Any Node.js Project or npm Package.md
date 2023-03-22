# How to Use package.json, the Core of Any Node.js Project or npm Package

The package.json file is the center of any Node.js project or npm package. It stores information about your project, similar to how the head section of an HTML document describes the content of a webpage. It consists of a single JSON object where information is stored in key-value pairs. There are only two required fields; name and version, but it’s good practice to provide additional information about your project that could be useful to future users or maintainers.

If you look at the file tree of your project, you will find the package.json file on the top level of the tree. This is the file that you will be improving in the next couple of challenges.

One of the most common pieces of information in this file is the author field. It specifies who created the project, and can consist of a string or an object with contact or other details. An object is recommended for bigger projects, but a simple string like the following example will do for this project.

`"author": "Jane Doe",`

---

Add your name as the author of the project in the package.json file.

Note: Remember that you’re writing JSON, so all field names must use double-quotes (") and be separated with a comma (,).

---

### Solution Link: [Click Here](https://boilerplate-npm.certified2003.repl.co)
