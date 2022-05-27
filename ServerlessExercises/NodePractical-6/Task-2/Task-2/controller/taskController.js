const express=require('express');
const { json } = require('express/lib/response');
const fs=require('fs');

const getTask = (req,res) => {
    fs.readFile('./tasks.json', (err, data) => {
        if(err) console.log(err);
        console.log(JSON.parse(data));
        return res.json(JSON.parse(data))
    })
}


const addTask = (req, res) => {
   
    fs.readFile('./tasks.json', (err, data) => {
        let{
            ID,
            title,
            description,
            projectID
            
    
        }=req.body;
        let Project={
            ID,
            title,
            description,
            projectID
        }
        if(err) console.log(err);
        const data1=JSON.parse(data);
        data1.push(Project);
    fs.writeFile('./tasks.json',JSON.stringify(data1,null,4),'utf-8',(error)=>{
if(error)
{
    return res.json({
        message: error
    })
}
else{
    return res.json({
        message:"Task Added successfully"
    })
}
    })
        
    })

}

const updateTask = async (req, res) => {

    const { ID } = req.params;

    const {
title,
description,
projectID

    } = req.body;

    try{

        let data = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));

        const task = data.find(i=>i.ID==ID)

        if(task){

            let newTask  = data.map(i=>{

                if(i.ID==ID){

                    i.title = title || i.title;

                    i.description = description|| i.description;

                    i.projectID = projectID || i.projectID;

                   

                }

                return i;

            });
           
      newTask = JSON.stringify(newTask,null,4);

            fs.writeFileSync("./tasks.json", newTask);

      res.send("Task Updated successfully.")

        } else {

            res.send('Task not Found');

        }

    } catch (error) {




    }

}

const deleteTask = async (req, res) => {

    const { ID } = req.params;

   

    try{

        let data = JSON.parse(fs.readFileSync("./tasks.json", "utf-8"));

        const task = data.find(i=>i.ID==ID)

        if(task){

            let newTask  = data.filter(i=>{

                return i.ID!=ID;
               
            });
           
            newTask = JSON.stringify(newTask,null,4);
            fs.writeFileSync("./tasks.json", newTask);

      res.send("Task deleted successfully.")

        } else {

            res.send('User Not Found');

        }

    } catch (error) {




    }

}
module.exports={getTask,addTask,updateTask,deleteTask}