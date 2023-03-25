let express = require("express");
let app = express();

app.get("/name", (req, res) => {
    let { first: firstName, last: lastName } = req.query;
    res.json({
        "name": `${firstName} ${lastName}`
    });
});

module.exports = app;