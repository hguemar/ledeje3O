var app = require("../server.js");
var supertest = require("supertest");
var assert = require("chai").assert;

//https://github.com/visionmedia/supertest/issues/255
describe("test blog fixtures endpoint", function() {
  describe("GET /fixtures/play", function() {
    it("should have content-type json", function(done) {
      supertest(app)
          .get("/fixtures/play")
          .expect('Content-Type', 'text/html; charset=utf-8')
          .expect(200, done);
    });
  })
});
