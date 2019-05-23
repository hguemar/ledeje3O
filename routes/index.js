var posts = require("./posts");
var faker = require('faker');
var uuid = require('uuid/v1');

module.exports = function(app) {

  app.get("/", function(req, res) {
	app.db.collection('articles').find({}).toArray(function (err, doc) {
		 doc.forEach(element => {
       			 element.contenu = summarize(element.contenu);
      });
      res.render("index", { 'data': doc });
    });
  });

  app.get("/generate", function(req, res) {
	app.db.collection("articles").remove();
	for(let i = 0; i < 10; i++){
		let auteur = faker.name.findName();
		let titre = faker.lorem.sentence();
		let contenu = faker.lorem.paragraphs(5);
		let article = {id: uuid(), auteur:auteur, titre:titre, contenu:contenu, date:new Date()};
		app.db.collection("articles").insertOne(article);
	}
	res.redirect("/");		
  });
  // Register posts endpoint
  posts(app);
}

function summarize(value){
	return value.substr(0,140) + "...";
}
