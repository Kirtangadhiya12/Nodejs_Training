'use strict';
const fs = require('fs');

const fetchDataCallback = (file,callback) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) return callback(new Error("file reading error"));
        return callback(null, data);
    })
}

module.exports.dataWithCallback = () => {
    let users;
    let projects;
    let tasks;
    fetchDataCallback('./users.json', (err,userData) => {
        if(err) console.log(err);
        users = userData;
        fetchDataCallback('./projects.json', (err,projectData) => {
            if(err) console.log(err);
            projects = projectData;
            fetchDataCallback('./tasks.json', (err, taskData) => {
                if(err) console.log(err);
                tasks = taskData;
                display(JSON.parse(users), JSON.parse(projects), JSON.parse(tasks));
            })
        })
    })
}




const display = async(users,projects,tasks) => {
    const result = [];
    let userProjectList=[];
    users.forEach(user => {
        userProjectList = user["projects"];
        const projectData = [];
        userProjectList.forEach(userProjectID => {
            
            projects.forEach(project => {
                if(project.ID === userProjectID){
                    const taskData = [];

                        tasks.forEach(task => {
                            if(task.projectID === userProjectID){
                                taskData.push(task);
                            }
                        });
                    project["tasks"] = taskData;
                    projectData.push(project);
                }
            });
            
        });
        user["projects"] = projectData;
        result.push(user);
    });
   
 console.log(JSON.stringify(result,null,2));
  
};
