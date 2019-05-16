var ArticleService = require("../services/ArticleService");
var ObjectID = require('mongodb').ObjectID;

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
    let id = req.params.id;
    app.db.collection('article').find({ "_id": new ObjectID(id) }).toArray(function (err, doc) {
      res.render("article", { 'doc': doc[0] });
    });
  });

  app.get("/post/delete/:id", function (req, res) {
    let articleService = new ArticleService();
    articleService.deleteArticle(app, req)
      .then(result => res.redirect('/'))
      .catch(err => { throw Error(err) })
  });
}
