let express = require("express");
let app = express();

app.get("/json", (req, res) => {
    res.json({
        "message": "Hello json"
    });
});

module.exports = app;