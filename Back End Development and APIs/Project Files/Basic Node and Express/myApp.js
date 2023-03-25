let express = require('express');
let app = express();

// ----------------CHALLENGE 1----------------
console.log("Hello World");

// ----------------CHALLENGE 2----------------
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// ----------------CHALLENGE 3----------------
app.get("/", (req, res) => {
    htmlPath = __dirname + '/views/index.html';
    res.sendFile(htmlPath);
});

// ----------------CHALLENGE 4----------------
app.get("/", (req, res) => {
    htmlPath = __dirname + "/views/index.html"
    res.sendFile(htmlPath);
});
app.use("/public", express.static(__dirname + "/public"));

// ----------------CHALLENGE 5----------------
app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json"
    });
});

// ----------------CHALLENGE 6----------------
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
app.use((req, res, next) => {
    let string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
});

// ----------------CHALLENGE 8----------------
app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
})

// ----------------CHALLENGE 9----------------
app.get("/:word/echo", (req, res) => {
    res.json({
        "echo": req.params.word
    });
});

// ----------------CHALLENGE 10----------------
app.get("/name", (req, res) => {
    let { first: firstName, last: lastName } = req.query;
    res.json({
        "name": `${firstName} ${lastName}`
    });
});

// ----------------CHALLENGE 11----------------
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ----------------CHALLENGE 12----------------
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