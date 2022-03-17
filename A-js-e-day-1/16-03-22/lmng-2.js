const mongo = require('mongodb').MongoClient
const age = process.argv[2]


const mongoUrl = 'mongodb://localhost:27017';
const database='learnyoumongo';

mongo.connect(mongoUrl, function(err, client) {
  if (err) {
      throw err
  }
  const db = client.db(database);
  var parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }, {
    name: 1
  , age: 1
  , _id: 0
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    client.close()
  })
})