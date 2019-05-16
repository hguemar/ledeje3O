var posts = require("./posts");
var StringUtils = require("../utils/StringUtils");
var ArticleService = require("../services/ArticleService");
var faker = require('faker')

module.exports = function (app) {

  app.get("/", function (req, res) {
    app.db.collection('article').find({}).toArray(function (err, doc) {
      doc.forEach(element => {
        element.contenu = StringUtils.summarize(element.contenu);
      });
      res.render("index", { 'data': doc });
    });
  });

  app.get('/generate', function (req, res) {
    for (let i = 0; i < 90; i++) {
      let auteur = faker.name.findName();
      let titre = faker.lorem.sentence();
      let contenu = faker.lorem.paragraphs(3);

      let articleService = new ArticleService();
      articleService.saveArticle(app, titre, contenu, auteur);
    }
    res.redirect("/");
  })

  // Register posts endpoint
  posts(app);
}
