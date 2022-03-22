const express = require('express');
const router = express.Router();
const models=require('../model/um')
// router.get('/save', function(req, res) {
//     var userModel = new models({user_id:1, 
//         user_name:"Kirtan",user_email:"kirtangadhiya1212@gmail.com"});

//     userModel.save(function(err, data) {
//         if(err) {
//             console.log(error);
//         }
//         else {
//             res.send("Data inserted");
//         }
//     });
// });
router.post('/save', function(req, res) {
    var userModel = new models();
       userModel.user_id = 1;
       userModel.user_name = 'kirtan';
       userModel.user_email = 'kirtangadhiya1212@gmail.com';
       userModel.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });
    // router.post('/findall', function(req, res) {
    //     models.find(function(err, data) {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             res.send(data);
    //         }
    //     });  
    //  });
    //  router.get('/findfirst', function(req, res) {
    //     models.findOne({user_id:{$gt:1}}, 
    //     function(err, data) {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             res.send(data);
    //         }
    //     });  
    // });
    // router.post('/update', function(req, res) {
    //     models.findByIdAndUpdate({user_id:1}, 
    //     {Name:akash}, function(err, data) {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             res.send(data);
    //             console.log("Data updated!");
    //         }
    //     });  
    // });
    // router.post('/delete', function(req, res) {
    //     models.findByIdAndDelete({user_id:2}, 
    //     function(err, data) {
    //         if(err){
    //             console.log(err);
    //         }
    //         else{
    //             res.send(data);
    //             console.log("Data Deleted!");
    //         }
    //     });  
    // });
module.exports = router;
