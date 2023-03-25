let express = require("express");
let app = express();

app.get("/:word/echo", (req, res) => {
    res.json({
        "echo": req.params.word
    });
});

module.exports = app;