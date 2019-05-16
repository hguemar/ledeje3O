var posts = require("./posts");
var fixtures = require("./fixtures");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

  // Register posts endpoint
  posts(app);
  fixtures(app);
};
