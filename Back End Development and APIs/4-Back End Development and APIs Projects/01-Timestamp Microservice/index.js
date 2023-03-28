// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

// --------------CHALLENGE--------------
app.get("/api/:date?", function (req, res) {
  let date = req.params.date;
  let unixFormat, utcFormat, dateObj;

  // Test whether the input date is a number
  let isUnix = /^\d+$/.test(date);

  // If no date specified, use the current date
  if (!date) {
    dateObj = new Date();
  }
  // If the date is a UNIX Timestamp
  else if (date && isUnix) {
    unixFormat = parseInt(date);
    dateObj = new Date(unixFormat);
  }
  // If the date is not a UNIX time stamp
  else if (date && !isUnix) {
    dateObj = new Date(date);
  }
  // If the date is of wrong format
  if (dateObj.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
    return;
  }

  unixFormat = dateObj.getTime();
  utcFormat = dateObj.toUTCString();

  res.json({
    unix: unixFormat,
    utc: utcFormat
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
