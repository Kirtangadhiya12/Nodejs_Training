const express=require('express');
const { json } = require('express/lib/response');
const fs=require('fs');

const getProject = (req,res) => {
    fs.readFile('./projects.json', (err, data) => {
        if(err) console.log(err);
        console.log(JSON.parse(data));
        return res.json(JSON.parse(data))
    })
}


const addProject = (req, res) => {
   
    fs.readFile('./projects.json', (err, data) => {
        let{
            ID,
            title,
            description
            
    
        }=req.body;
        let Project={
            ID,
            title,
            description
        }
        if(err) console.log(err);
        const data1=JSON.parse(data);
        data1.push(Project);
    fs.writeFile('./projects.json',JSON.stringify(data1,null,4),'utf-8',(error)=>{
if(error)
{
    return res.json({
        message: error
    })
}
else{
    return res.json({
        message:"Project Added successfully"
    })
}
    })
        
    })

}

const updateProject = async (req, res) => {

    const { ID } = req.params;

    const {
title,
description


    } = req.body;

    try{

        let data = JSON.parse(fs.readFileSync("./projects.json", "utf-8"));

        const project = data.find(i=>i.ID==ID)

        if(project){

            let newProject  = data.map(i=>{

                if(i.ID==ID){

                    i.title = title || i.title;

                    i.description = description|| i.description;


                   

                }

                return i;

            });
           
      newProject = JSON.stringify(newProject,null,4);

            fs.writeFileSync("./projects.json", newProject);

      res.send("Project Updated successfully.")

        } else {

            res.send('Project not Found');

        }

    } catch (error) {




    }

}

const deleteProject = async (req, res) => {

    const { ID } = req.params;

   

    try{

        let data = JSON.parse(fs.readFileSync("./projects.json", "utf-8"));

        const project = data.find(i=>i.ID==ID)

        if(project){

            let newProject  = data.filter(i=>{

                return i.ID!=ID;
               
            });
           
            newProject = JSON.stringify(newProject,null,4);
            fs.writeFileSync("./projects.json", newProject);

      res.send("Project deleted successfully.")

        } else {

            res.send('project Not Found');

        }

    } catch (error) {




    }

}


module.exports={getProject,  addProject, updateProject,deleteProject}