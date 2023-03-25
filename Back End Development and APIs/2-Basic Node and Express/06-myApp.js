let express = require("express");
let app = express();
require('dotenv').config();

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

module.exports = app;