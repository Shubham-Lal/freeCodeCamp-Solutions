let express = require("express");
let app = express();

app.get("/", (req, res) => {
    htmlPath = __dirname + "/views/index.html"
    res.sendFile(htmlPath);
});
app.use("/public", express.static(__dirname + "/public"));

module.exports = app;