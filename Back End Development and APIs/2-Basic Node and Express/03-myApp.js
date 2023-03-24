let express = require('express');
let app = express();

app.get("/", (req, res) => {
    htmlPath = __dirname + '/views/index.html';
    res.sendFile(htmlPath);
});

module.exports = app;