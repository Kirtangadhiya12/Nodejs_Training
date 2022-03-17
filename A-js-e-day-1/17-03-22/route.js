const express=require('express');
const app=express();
const PORT=4000;
const userData=require("./router/user");


app.use('/users', userData);
app.listen(PORT,(req,res)=>{
    console.log("now server is running");
})