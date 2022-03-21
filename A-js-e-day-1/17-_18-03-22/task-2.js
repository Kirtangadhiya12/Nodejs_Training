const express=require('express');
const app=express();
const PORT=3000;
const mongoose= require('mongoose');
var mongo = require('mongodb').MongoClient
mongoose.connect('localhost:27017/employee.employee')
let UserSchema=new mongoose.schema({

    id:String,
    name:String,
    degree:String,
    collegeName:String
});
app.get('/user',(req,res)=>{
    res.send('My Name is Kirtan')
})
app.post('/user',(req,res)=>{
    res.send('my surname is  gadhiya')
})
app.listen(PORT,()=>{
    console.log("now let's started")
})
const mongoUrl = 'mongodb://localhost:27017';
const database='employee';
mongo.connect(mongoUrl, function(err, client) {
    if (err) 
    {throw err
    }
    const db=client.db(database);
    var data1 = db.collection('employee')
    data1.find({
        id: {
          $gt: +id
        }
        
    },{
            name:1,
            college:1
        }
      ).toArray(function(err, docs) {
        if (err) throw err
        console.log(docs)
        client.close()
      })
    })
    mongo.connect(mongoUrl, function(err, client) {
        if (err) 
        {throw err
        }
        const db=client.db(database);
        var data1 = db.collection('employee')
        data1.insertOne(doc, function(err,data ) {
          if (err) throw err
          console.log(JSON.stringify(doc))
          client.close()
        })
      })
      mongo.connect(mongoUrl, function(err, client) {
        if (err) 
        {throw err
        }
        const db=client.db(database);
        var data1 = db.collection('employee')
        data1.updateOne({
          name: 'kirtan'
        }, {
          $set: {
            age: 40
          }
        }, function(err) {
          if (err) throw err
          client.close()
        })
      })
      mongo.connect(mongoUrl, function(err, client) {
        if (err) 
        {throw err
        }
        const db=client.db(database);
        var data1 = db.collection('employee')
        data1.deleteOne({
          id: 1
        }, function(err) {
          if (err) throw err
          client.close()
        })
      })
const UserData=mongoose.model('UserData',UserSchema);



