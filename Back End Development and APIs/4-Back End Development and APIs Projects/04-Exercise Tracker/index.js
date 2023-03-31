const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// --------------CHALLENGE--------------
// First step is to create a free MongoDB project and get your Cluster API key
// Create a .env file in root directory and declare a new variable called "DATABASE_URL" and initialize it with your Project key
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connection to MongoDB databse
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("MongoDB Connection Successful");
}).catch((err) => {
  console.log(err);
});

// Created User and Exercise schema in "models" folder -> User.js, Exercise.js
// Import both User and Exercise schema
const User = require("./models/User");
const Exercise = require("./models/Exercise");

// urlencoded is a middleware and the main objective of this method is to parse the incoming request with urlencoded payloads and is based upon the body-parser.
app.use(express.urlencoded({
  limit: '10mb',
  extended: true
}));

// Create New User API endpoint
app.post("/api/users", async (req, res) => {
  try {
    const userName = req.body.username;

    // Check if "userName" already exists in User database
    const userObj = await User.findOne({ username: userName });
    if (userObj) return res.json({ error: "User with the given username already exists" });

    // Create a new User in database
    const user = await new User({
      username: userName,
    }).save();

    res.json(user);
  }
  catch (error) {
    return res.json({ error: error.message });
  }
});

// Get User ID API endpoint
app.post("/api/userID", async (req, res) => {
  try {
    const userName = req.body.username;

    // Check if "userName" already exists in User database
    const userObj = await User.findOne({ username: userName });
    if (userObj) return res.json(userObj);
    res.json({ error: `No ID found for ${userName}` })
  }
  catch (error) {
    return res.json({ error: error.message });
  }
});

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const user = await User.find().select("-__v");
    res.json(user);
  }
  catch (error) {
    return res.json({ error: error.message });
  }
});

// Create User's exercise in database
app.post("/api/users/:_id/exercises", async (req, res) => {
  try {
    const id = req.params._id;

    // Check if "userName" already exists in User database
    const user = await User.findById(id);
    if (!user) return res.json({ error: "User of the given 'id' doesn't exists" });

    const { description, duration, date } = req.body;

    if (!description) return res.json({ error: "Please provide Exercise description to proceed" });
    if (!duration) return res.json({ error: "Please provide Exercise duration to proceed" });

    const exercise = await new Exercise({
      user_id: user._id,
      description: description,
      duration: duration,
      date: date ? new Date(date) : new Date(),
    }).save();

    res.json({
      _id: user.id,
      username: user.username,
      description: exercise.description,
      duration: exercise.duration,
      date: new Date(exercise.date).toDateString(),
    });
  }
  catch (error) {
    return res.json({ error: "Error adding Exercise... Try agian after some time" });
    // {"error":"Cast to ObjectId failed for value \"a\" (type string) at path \"_id\" for model \"User\""} <-- When wrong user id passed
  }
});

// Get User's exercise log
app.get("/api/users/:_id/logs", async (req, res) => {
  const id = req.params._id;
  const { from, to, limit } = req.query;

  const user = await User.findById(id);
  if (!user) return res.json({ error: "User of the given 'id' doesn't exists" });

  let dateObj = {};
  if (from) {
    dateObj["$gte"] = new Date(from); // gte -> grater than or equals to
  }
  if (to) {
    dateObj["$lte"] = new Date(to); // lte -> less than or equals to
  }
  let filter = {
    user_id: id,
  }
  if (from || to) filter.date = dateObj;

  const exercise = await Exercise.find({ user_id: id }).limit(+limit ?? 500);
  if (!exercise) return res.json({ error: "No exercise exists for the given 'id'" });
  const log = exercise.map((e) => ({
    description: e.description,
    duration: e.duration,
    date: e.date.toDateString(),
  }))

  res.json({
    username: user.username,
    count: exercise.length,
    _id: exercise.user_id,
    log
  });
})

const listener = app.listen(process.env.PORT || 3004, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
