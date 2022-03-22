const express=require('express');
const app=express();
const mongoose=require('mongoose');
const PORT=4000;

mongoose.connect('mongodb://localhost:27017/mgc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection Established...!");
  })
  .catch((err) => {
    console.log("Error: Database connection can not be established...!", err);
  });
  const users=require('../route/ur')
  const models=require('../model/um')
  const ucs=require('../route/ur2')
  app.use('/models',models);
  app.use('/users', users);
  app.use('/ucs', ucs);
  app.listen(PORT,()=>{console.log(`data app is listening at ${PORT}`)});