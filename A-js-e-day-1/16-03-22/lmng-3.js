var mongo = require('mongodb').MongoClient

var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName
, lastName: lastName
}

const mongoUrl = 'mongodb://localhost:27017';
const database='learnyoumongo';
mongo.connect(mongoUrl, function(err, client) {
  if (err) 
  {throw err
  }
  const db=client.db(database);
  var data1 = db.collection('docs')
  data1.insertOne(doc, function(err,data ) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    client.close()
  })
})