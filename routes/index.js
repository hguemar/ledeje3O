var express = require("express");
var summarize = require("../util/summarize");
var MongoClient = require("mongodb");
var bodyParser = require('body-parser')
var cons = require('consolidate');

var posts = require("./posts");

module.exports = function(app) {

  //page d'acceuil avec la liste des articles
  app.get("/", function(req, res) {

    app.db.collection("articles").find({}).toArray(function(err, result) {

      result.forEach(element => {
        element.body = summarize.summarize(element.body);
        
      });
      if (err) throw err;
      res.render("index",  { 'result' : result });
  });
  });


  // Register posts endpoint
  posts(app);
}
