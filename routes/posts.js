var ArticleService = require("../services/ArticleService");

module.exports = function (app) {
  app.get("/post/create", function (req, res) {
    res.render("create");
  });

  app.post("/post/create", function (req, res) {
    let articleService = new ArticleService();
    articleService.registerArticle(app, req)
      .then(result => res.send("L'article est bien ajouté."))
      .catch(err => { throw Error(err) });
  });

  app.get("/post/:id", function (req, res) {
    let articleService = new ArticleService();
    articleService.deleteArticle(app, req)
      .then(result => res.send("L'article est bien supprimé."))
      .catch(err => { throw Error(err) });
  });
}
