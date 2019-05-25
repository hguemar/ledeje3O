
var ObjectId = require('mongodb').ObjectId; 

module.exports = function(app) {
 
  
  //renvoie le formulaire de création d'un article
  app.get("/post/create", function(req, res) {
    res.render("create");
  });

  //effectue l'insert en BDD d'un article
  app.post("/post/create", function(req, res) {
    let titre = req.body.title;
    let dateArt = req.body.date;
    let auteur = req.body.author;
    let text = req.body.body;

    var myobj = { title: titre , date: dateArt, author:auteur, body: text};
    app.db.collection("articles").insertOne(myobj, function(err, result) {
      if (err) throw err;

    }); 
    res.redirect("/");
    
  });

  //renvoie les détail d'un article en particulier sur une page
  app.get("/post/:id", function(req, res) {
    app.db.collection("articles").find({"_id": new ObjectId(req.params.id)}).toArray( function(err, result) {
      if (err) throw err;
      res.render("article", { 'result' : result[0]});
  });
  });

  //suppression d'un article
  app.get("/post/delete/:id", function(req, res) {
    app.db.collection("articles").deleteOne({"_id": new ObjectId(req.params.id)}, function(err, result) {
      if (err) throw err;
      res.redirect("/");
  });
});


}
