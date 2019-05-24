var fs = require('fs');
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app) {

    app.get("/Article/:id", function(req, res)
    {
        idArticle = req.params.id;


        app.db.collection('Article').find({ "_id": new ObjectID(idArticle) }).toArray(function(error, documents) {
            if (error) res.send(error);

            res.render("article", {"data" : documents[0]});
        });

    });


    //Pour insérer les datas en bdd
    app.get("/insertBD", function(req,res)
    {
        // COntient toutes les données des Articles en dure
        var json =
        [
            {
                "title": "Article 1",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet"
            },
            {
                "title": "Article 2",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, n"
            },
            {
                "title": "Article 3",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 4",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 5",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 6",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 7",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 8",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 9",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 10",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 11",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 12",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 13",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 14",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            },
            {
                "title": "Article 15",
                "date": "16/05/19 10:15",
                "author": "dolor sit amet",
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat ac mi id feugiat. Nam iaculis, purus blandit tincidunt ullamcorper, nisl nibh pellentesque turpis, a vehicula arcu metus eu tortor. Sed nec pulvinar sem, dapibus varius purus. Sed auctor urna cursus, porta felis a, finibus lacus. Sed ac tortor erat. Cras ultricies ligula justo, a malesuada dui lobortis at. In hac habitasse platea dictumst. Duis dictum ligula eget mollis rhoncus. Proin euismod, massa ut pretium hendrerit, sapien odio consequat nulla, eget semper velit ante eu diam. Ut finibus vestibulum auctor. Fusce rutrum interdum ex sit amet pretium. Praesent cursus eu lacus id vehicula. Nulla lorem nisi, faucibus non nulla quis, porta feugiat magna. "
            }
        ];

        // Insére le tout dans la collection Article qui contient tout les articles
        app.db.collection('Article').insertMany(json);

        res.status(200);
            res.setHeader("Content-Type", "text/html");
            res.redirect('/');

    });

    app.post("/post/create", function(req, res) {

        //Recup les variables du formulaire
        let title = req.body.title;
        let body = req.body.body;
        let author = req.body.author;


        //Les variables doivent contenir des informations pour pouvoir être enregistrer
        if(title !== '' && body !== '' && author !== '')
        {
            let Article =
            {
                title: title,
                date: new Date(),
                author: author,
                body: body
            };
            try
            {
                app.db.collection("Article").insertOne(Article);
            }
            catch(e)
            {
                res.send(e);
            }

            res.status(200);
            res.setHeader("Content-Type", "text/html");
            res.redirect('/');
        }
        else
        {
            res.send('Erreur: Le formulaire possède des champs vides.');
        }


    });
    app.get("/post/create", function(req, res) {
        res.render("createArticle");
    });

    app.get("/post/delete/:id", function(req, res)
    {
        let id = req.params.id;
        try
        {
            app.db.collection("Article").deleteOne({ "_id": ObjectID(id) });
        }
        catch(e)
        {
            throw Error(e);
        }
        res.status(200);
        res.setHeader("Content-Type", "text/html");
        res.redirect('/');
    });


}
