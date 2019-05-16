var posts = require("./posts");
var fixtures = require("./fixtures");

module.exports = function(app) {

  app.get("/", function(req, res) {

      app.db.collection("articles").find().toArray().then(function(result) {

          var length = result.length();
          res.render("index", {'result': result, 'length': length});

      });
  });

  // Register posts endpoint
  posts(app);
  fixtures(app);

  function resume(article){
    article.substring(0, 140);
    article += " ...";
    return article;
  }
}
