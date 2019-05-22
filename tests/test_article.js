ObjectID = require("mongodb").ObjectID;
var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;
var id = new ObjectID();

describe("Test affichage d'un article", function () {
    describe("Insertion test", function () {
        it("insert", function () {
            app.db.collection("article").insert({
                "_id": ObjectID(id),
                "titre": "Un article de test",
                "contenu": "Un contenu de test",
                "date": new Date(),
                "auteur": "Jean Test",
            });

            app.db.collection("articles").find({ "_id": new ObjectID(id) }).toArray().then(function (result) {
                expect(result[0].titre.to.equal("Un article de test"));
                expect(result[0].contenu.to.equal("Un contenu de test"));
                expect(result[0].auteur.to.equal("Jean Test"));
            });
        });
    });

    describe("Test affichage", function () {
        it("test affichage", function (done) {
            supertest(app)
                .get("/post/" + id)
                .expect(function (res) {
                    assert(res.text.search("<li>Auteur : Jean Test</li>") != -1);
                })
                .expect(200)
                .end(done);
        });
    });

    app.db.collection("article").deleteOne({ _id: ObjectID(id) });
});