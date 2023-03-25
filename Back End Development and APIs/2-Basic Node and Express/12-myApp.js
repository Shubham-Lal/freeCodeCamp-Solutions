let express = require("express");
let app = express();

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