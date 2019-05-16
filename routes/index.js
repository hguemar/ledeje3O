var posts = require("./posts");
var fixtures = require("./fixtures");

module.exports = function(app) {

  app.get("/", function(req, res) {

      app.db.collection("articles").find().sort({date: -1}).toArray().then(function(result) {

          var length = result.length;
          result.forEach(function(element) {
              element.content = summarize(element.content.toString());
          });
          res.render("index", {'result': result, 'length': length});

      });
  });

  // Register posts endpoint
  posts(app);
  fixtures(app);

  function summarize(article){
    return article.substring(0,140) + " ...";
  }
};
