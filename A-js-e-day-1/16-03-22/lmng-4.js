var mongo = require('mongodb').MongoClient

const mongoUrl = 'mongodb://localhost:27017';
const database='learnyoumongo';
mongo.connect(mongoUrl, function(err, client) {
  if (err) 
  {throw err
  }
  const db=client.db(database);
  var data1 = db.collection('users')
  data1.updateOne({
    username: 'tinatime'
  }, {
    $set: {
      age: 40
    }
  }, function(err) {
    if (err) throw err
    client.close()
  })
})