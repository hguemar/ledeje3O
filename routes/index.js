var posts = require("./posts");
var fixtures = require("./fixtures");

module.exports = function(app) {

  app.get("/", function(req, res){
    res.redirect("/1");
  });

  app.get("/:page", function(req, res) {

      app.db.collection("articles").find().sort({date: -1}).toArray().then(function(result) {

          var length = result.length / 5;
          // je tronque mon tableau pour envoyer à la vue uniquement les articles à afficher selon la page
          var toView = result.slice(((page*5)-5),(page*5));
          toView.forEach(function(element) {
              element.content = summarize(element.content.toString());
          });
          res.render("index", {'result': toView, 'length': length});

      });
  });

  // Register posts endpoint
  posts(app);
  fixtures(app);

  function summarize(article){
    return article.substring(0,140) + " ...";
  }
};
