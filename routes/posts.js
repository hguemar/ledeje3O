var uuid = require('uuid/v1');

module.exports = function(app) {
  app.get("/post/create", function(req, res) {
    res.render("create");
  });

  app.post("/post/create", function(req, res) {
	let titre = req.body.titre;
	let contenu = req.body.contenu;
	let auteur = req.body.auteur;
	if(typeof(titre) != 'undefined' && typeof(contenu) != 'undefined' && typeof(auteur) != 'undefined'){
		let article = {titre:titre, contenu:contenu, auteur:auteur, date:new Date(), id:uuid()};
		app.db.collection("articles").insertOne(article);
		res.redirect("/");
	}
	return Promise.reject();
  });

  app.get("/post/:id", function(req, res) {
	app.db.collection("articles").find({"id": req.params.id}).toArray(function(err, article){
		res.render("article", {'article': article[0]});
	});
  });

  app.get("/post/delete/:id", function(req, res) {
	app.db.collection("articles").deleteOne({"id": req.params.id});
	res.redirect("/");
  });
}
