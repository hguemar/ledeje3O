module.exports = function(app) {
  app.get("/post/create", function(req, res) {
    //Render form
    res.render("createArticle");
  });

  app.post("/post/create", function(req, res) {
    //Execute CRUD operation to Create article in MongoDB
    res.send("Article created");
  });

  app.get("/post/:id", function(req, res) {
    res.send("XXX");
  });
};
