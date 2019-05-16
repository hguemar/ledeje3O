var posts = require("./posts");

module.exports = function(app) {

  app.get("/", function(req, res) {
    app.db.collection('article').find({}).toArray(function(err, doc) {
      res.render("index", {'data': doc});
    });
  });

  // Register posts endpoint
  posts(app);
}
