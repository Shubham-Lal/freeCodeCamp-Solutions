'use strict';
require('chai').expect;
let mongodb = require('mongodb');
let mongoose = require('mongoose');

let uri = process.env.MONGO_URI;

module.exports = function (app) {

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data) => {
    console.log(`MongoDB Connected => Host: ${data.connection.host}\n`);
  }).catch((error) => {
    console.log(error);
  });

  app.route('/api/issues/:project')

    .get(function (req, res) {
      let project = req.params.project;

    })

    .post(function (req, res) {
      let project = req.params.project;

    })

    .put(function (req, res) {
      let project = req.params.project;

    })

    .delete(function (req, res) {
      let project = req.params.project;

    });

};
