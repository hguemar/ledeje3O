var express = require("express");
var MongoClient = require("mongodb");
var bodyParser = require('body-parser');
var cons = require('consolidate');
var StringUtils = require('../utils/StringUtils');
var ObjectID = require('mongodb').ObjectID;

module.exports = class ArticleService {

    registerArticle(app, req) {
        let titreData = req.body.titre;
        let contenuData = req.body.contenu;
        let auteurData = req.body.auteur;

        if (StringUtils.isDefined(titreData) &&
            StringUtils.isDefined(contenuData) &&
            StringUtils.isDefined(auteurData)) {
            let doc = { titre: titreData, contenu: contenuData, date: new Date(), auteur: auteurData };
            return app.db.collection("article").insertOne(doc);
        }
        return Promise.reject();
    }

    deleteArticle(app, req) {
        let id = req.params.id;
        if ( StringUtils.isDefined(id))
        {
            return app.db.collection("article").deleteOne( { "_id": ObjectID(id) } );
        }
        return Promise.reject();
    }

}