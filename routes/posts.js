ObjectID = require('mongodb').ObjectID;

module.exports = function(app) {
  app.get("/post/create", function(req, res) {
    //Render form
    res.render("createArticle");
  });

  app.post("/post/create", function(req, res) {
    //Execute CRUD operation to Create article in MongoDB
    res.send("Article created");
  });

  // Fonction pour afficher un seul article
  app.get("/post/:id", function(req, res) {

    //Récupération du paramètre id en get
    var id = req.params.id;

    // requête sur la bdd avec comme paramètre l'id de l'article
    app.db.collection("articles").find({"_id": new ObjectID(id)}).toArray().then(function(result) {

      // On rend sur la vue article avec le contenu, etc ...
      res.render("article", {'title': result[0].title, 'content': result[0].content, 'author': result[0].author, 'date': result[0].date});

    });


  });
};
