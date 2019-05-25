var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("blog");
  var myobj = [
    { title: 'Article1' , date: '13/05/2018', author:'Me', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'},
    { title: 'Article2' , date: '13/06/2018', author:'You', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'},
    { title: 'Article3' , date: '13/07/2018', author:'Richard', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'},
    { title: 'Article4' , date: '13/08/2018', author:'Bernard', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'},
    { title: 'Article5' , date: '13/09/2018', author:'Dupont', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'},
    { title: 'Article6' , date: '13/10/2018', author:'Gerard', body: 'Spatio contra spatio quis in faciamus accipienda consuetudo peccatis eo fecisse Deflexit oporteat locati Turpis Deflexit excusatio publicam Deflexit amicitia est in curriculoque iam publicae ut loco si et ut.'}
  ];
  dbo.collection("articles").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 