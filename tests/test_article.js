var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;

describe("Test création d'un article", function () {
    it("Insert Article", function () {
        let title = "Test";
        app.db.collection("Article").insert({
                "title": "Test",
                "date": "24/05/2019 11:11:11",
                "body": "bla bla bla",
                "author": "momo"
            });

            app.db.collection("Article").find({ "title": title }).toArray().then(function (result) {
                expect(result[0].author.to.equal("momo"));
                expect(result[0].body.to.equal("bla bla bla"));
            });
        });

});
