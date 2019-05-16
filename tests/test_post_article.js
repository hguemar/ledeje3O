
var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;
var id = new ObjectID();

var describe = require("mocha").describe();

ObjectID = require("mongodb").ObjectID;

describe("Test de l'affichage d'un article", function() {
    describe("Insertion d'un article test", function() {
        it("insert", function() {

            console.log("OBJECT ID : " + id);

            app.db.collection("articles").insert({
                "_id": ObjectID(id),
                "content": "test test test",
                "title": "test",
                "author": "testeur",
                "date": new Date(),
            });

            app.db.collection("articles").find({"_id": new ObjectID(id)}).toArray().then(function(result) {

                expect(result[0].author.to.equal("testeur"));
                expect(result[0].content.to.equal("test test test"));
                expect(result[0].title.to.equal("test"));

            });
        });
    });

    describe("Test de l'affichage de la page", function() {
        it("test affichage", function(done) {
            supertest(app)
                .get("/post/article/"+id)
                .expect(function(res) {
                    console.log(res.text);
                    assert(res.text.search("<li>Author : testeur</li>") != -1);
                })
                .expect(200)
                .end(done);
        });
    });

    app.db.collection("articles").deleteOne({ _id: ObjectID(id) });
});