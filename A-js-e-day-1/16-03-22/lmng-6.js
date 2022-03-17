var mongo = require('mongodb').MongoClient
const age = process.argv[2]

const mongoUrl = 'mongodb://localhost:27017';
const database='learnyoumongo';
mongo.connect(mongoUrl, function(err, client) {
  if (err) 
  {throw err
  }
  const db=client.db(database);
  var data1 = db.collection('parrots')
  data1.count({
    age: {
      $gt: +age
    }
  }, function(err, count) {
    if (err) throw err
    console.log(count)
    client.close()
  })
})