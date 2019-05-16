ObjectID = require('mongodb').ObjectID;
bodyParser = require('body-parser');

module.exports = function(app) {
    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.get("/post/create", function(req, res) {
        //Render form
        res.render("createArticle");
    });

    app.post("/post/create", function(req, res) {
        //Execute CRUD operation to Create article in MongoDB

        var article = {
            "_id": ObjectID(),
            title: req.body.title,
            content: req.body.content,
            author: req.body.author,
            date: new Date()
        };
        app.db.collection("articles").insertOne(article, function (err) {
            if (err) throw err;
            console.log("Article created");
        });

        res.redirect("/post/"+ article._id.toString());
    });

    // Fonction pour afficher un seul article
    app.get("/post/:id", function(req, res) {

        //Récupération du paramètre id en get
        var id = req.params.id;

        // requête sur la bdd avec comme paramètre l'id de l'article
        app.db.collection("articles").find({"_id": new ObjectID(id)}).toArray().then(function(result) {

            // On rend sur la vue article avec le contenu, etc ...
            res.render("article", {'title': result[0].title, 'content': result[0].content, 'author': result[0].author, 'date': result[0].date, 'id': req.params.id});

        });


    });

    app.get("/post/delete/:id", function(req, res) {
        //Execute CRUD operation to Delete post from MongoDB
        try {
            app.db.collection("articles").deleteOne({"_id": ObjectID(req.params.id)}, function (err) {
                if (err) throw err;
                console.log("Article deleted: " + req.params.id);
            });
        }
        catch (e) {
            console.log(e);
        }
        res.redirect("/");
    });
};
