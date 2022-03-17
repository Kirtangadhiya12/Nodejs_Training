var mongo = require('mongodb').MongoClient
const size= process.argv[2]

const mongoUrl = 'mongodb://localhost:27017';
const database='learnyoumongo';
mongo.connect(mongoUrl, function(err, client) {
  if (err) 
  {throw err
  }
  const db=client.db(database);
  var data1 = db.collection('prices')
  data1.aggregate([
    { $match: {
      size: size
    }}
  , { $group: {
      _id: 'average'
    , average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err
    if (!results.length) {
      throw new Error('No results found')
    }
    var o = results[0]
    console.log(Number(o.average).toFixed(2))
    client.close()
  })
})