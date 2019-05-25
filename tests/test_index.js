var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;
var chai = require('chai');
var expect = chai.expect;
var summarize = require("../util/summarize");

describe("test blog index endpoint", function() {
  it("should have content-type text/html", function(done) {
      supertest(app)
      .get("/")
      .set("User-Agent", "API testing")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200)
      .end(done);
  });
  it("should have title \"Simple Blog\"", function(done) {
      supertest(app)
      .get("/")
      .set("User-Agent", "API testing")
      .expect(function(res) {
        assert(res.text.includes("<title>Simple Blog</title>"));
      })
      .expect(200)
      .end(done);
});
  it("should have body", function(done) {
      supertest(app)
      .get("/")
      .set("User-Agent", "API testing")
      .expect(function(res) {
        assert(res.text.search("<body>.*</body>"));
      })
      .expect(200)
      .end(done);
  });
})

describe("test summarize", function() {
  it("test1", function() {
    let text = "Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.";
    expect(summarize.summarize(text)).to.equal("Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam ")
  });
  it("test2", function() {
    let text = "Spatio";
    expect(summarize.summarize(text)).to.equal("Spatio")
});
  
})
