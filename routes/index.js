var posts = require("./posts");
var bodyParser = require('body-parser');
var summarize = require('../helper/summarize');
module.exports = function(app) {


    app.use(bodyParser());

    app.get('/', function(req, res){
        //Redirige directement à la première page
        res.status(200);
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.redirect('/page/1');
    });
    app.get("/page/:page", function(req, res) {
        let currentPage = req.params.page; // récup la page qu'on souhaite afficher.

        //Il faut avoir une page positive
        if(currentPage > 0 )
        {
            //Récupere toutes les infos en bdd
            //Pour afficher 5 articles seulements.
            app.db.collection('Article').find().sort( { _id: -1 } ).skip((4*currentPage)-4).limit(4).toArray(function(error, documents) {
                if (error) res.send(error);

                //Parcours tous les articles et fait un résumé si body > 145 caractères
                documents.forEach(function(element, index)
                {
                    documents[index].body = summarize(element.body);
                });
                    res.setHeader("Content-Type", "text/html; charset=utf-8");
                    res.render("index", {"data" : documents, "currentPage" : currentPage});


            });
        }
        else
        {
            res.status(200);
            res.setHeader("Content-Type", "text/html; charset=utf-8");
            res.redirect('/page/1');
        }
        //
    });




    // Register posts endpoint
    posts(app);
}
