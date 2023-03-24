let express = require('express');
let app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

module.exports = app;