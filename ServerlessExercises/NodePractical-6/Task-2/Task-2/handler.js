const serverless = require("serverless-http");
const express = require("express");
const app = express();
const fs = require('fs');
const  userRoute=require('./routes/users');
const projectRoute=require('./routes/projects');
const taskRoute=require('./routes/tasks');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/user',userRoute);
app.use('/project',projectRoute);
app.use('/task',taskRoute);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
