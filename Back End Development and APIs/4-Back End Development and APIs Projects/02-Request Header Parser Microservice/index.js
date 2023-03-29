// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var axios = require("axios");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// --------------CHALLENGE--------------
app.get('/api/whoami', (req, res) => {
  // Axios get method from "ipify.org" to get IP Address
  // const ip = await axios.get("https://api.ipify.org");  // <-- Another method to get IP Address

  // req.headers returns an object containing the predefined/custom header given in the current request
  res.json({
    "ipaddress": req.headers.host,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent']
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3002, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
