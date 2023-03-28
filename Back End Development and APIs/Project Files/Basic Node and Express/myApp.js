let express = require('express');
let app = express();

// ----------------CHALLENGE 1----------------
// Meet the Node console
console.log("Hello World");

// ----------------CHALLENGE 2----------------
// Start a Working Express Server
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// ----------------CHALLENGE 3----------------
// Serve an HTML File
app.get("/", (req, res) => {
    htmlPath = __dirname + '/views/index.html';
    res.sendFile(htmlPath);
});

// ----------------CHALLENGE 4----------------
// Serve Static Assets
app.get("/", (req, res) => {
    htmlPath = __dirname + "/views/index.html"
    res.sendFile(htmlPath);
});
app.use("/public", express.static(__dirname + "/public"));

// ----------------CHALLENGE 5----------------
// Serve JSON on a Specific Route
app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json"
    });
});

// ----------------CHALLENGE 6----------------
// Use the .env File
// Created .env file in the root directory
// Declared and Initialized MESSAGE_STYLE variable init
app.get("/json", (req, res) => {
    let message;
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
        message = "Hello json".toUpperCase();
    }
    else {
        message = "Hello json";
    }
    res.json({ "message": `${message}` });
});

// ----------------CHALLENGE 7----------------
// Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
    let string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
});

// ----------------CHALLENGE 8----------------
// Chain Middleware to Create a Time Server
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
})

// ----------------CHALLENGE 9----------------
// Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
    res.json({
        "echo": req.params.word
    });
});

// ----------------CHALLENGE 10----------------
// Get Query Parameter Input from the Client
app.get("/name", (req, res) => {
    let { first: firstName, last: lastName } = req.query;
    res.json({
        "name": `${firstName} ${lastName}`
    });
});

// ----------------CHALLENGE 11----------------
// Use body-parser to Parse POST Requests
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ----------------CHALLENGE 12----------------
// Get Data from POST Requests
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    htmlPath = __dirname + "/views/index.html"
    res.sendFile(htmlPath);
});
app.use("/public", express.static(__dirname + "/public"));

app.post("/name", (req, res) => {
    let { first: firstName, last: lastName } = req.body;
    res.json({
        "name": `${firstName} ${lastName}`
    });
});

module.exports = app;