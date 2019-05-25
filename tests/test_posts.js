var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;
var chai = require('chai');
var expect = chai.expect;
ObjectId = require('mongodb').ObjectId; 
describe("test blog posts endpoint", function() {
  describe("GET /post/create", function() {
    it("should have content-type text/html", function(done) {
      supertest(app)
        .get("/post/create")
        .set("User-Agent", "API testing")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200)
        .end(done);
    });
    it("should have a form!", function(done) {
      supertest(app)
        .get("/post/create")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          console.log(res.text);
          assert(res.text.search("<form>.*</form>"));
        })
        .expect(200)
        .end(done);
    });
    it("should have body", function(done) {
      supertest(app)
        .get("/post/create")
        .set("User-Agent", "API testing")
        .expect(function(res) {
          assert(res.text.search("<body>.*</body>"));
        })
        .expect(200)
        .end(done);
    });
  })
  describe("POST /post/create", function() {
    it("insert article", function() {
      let id = ObjectId(new ObjectId());
      let titre = "test";
      let dateArt = "test";
      let auteur = "test";
      let text = "test";

      var myobj = { _id : id, title: titre , date: dateArt, author:auteur, body: text};
      app.db.collection("articles").insertOne(myobj, function(err, result) {
        if (err) throw err;
      }); 

      app.db.collection("Articles").find({ "_id": id }).toArray().then(function (result) {
        expect(result[0].titre).to.equal("test");
        expect(result[0].auteur).to.equal("test");
        expect(result[0].contenu).to.equal("test");
        expect(result[0].date).to.equal("test");
      });
      app.db.collection("article").deleteOne({ _id: id });

    });
  })
})
