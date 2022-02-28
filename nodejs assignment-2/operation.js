const fs = require('fs');
const path = require('path');
const { display, fetchDataAsync, fetchDataCallback, fetchDataPromise} = require('/home/krushit/bacancy_training/node-training/Nodejs-practical-2/utils/util');

const dir = '/home/krushit/bacancy_training/node-training/Nodejs-practical-2';
const fileUsers = path.format({ 'dir': dir, base:'storage/users.json'});
const fileProjects = path.format({ 'dir': dir, base: 'storage/projects.json'});
const fileTasks = path.format({ 'dir': dir, base: 'storage/tasks.json'});

// callback ways
const dataWithCallback = () => {
    let users;
    let projects;
    let tasks;
    fetchDataCallback(fileUsers, (err,dataUser) => {
        if(err) console.log(err);
        users = dataUser;
        fetchDataCallback(fileProjects, (err, dataProject) => {
            if(err) console.log(err);
            projects = dataProject;
            fetchDataCallback(fileTasks, (err, dataTasks) => {
                if(err) console.log(err);
                tasks = dataTasks;
                display(JSON.parse(users), JSON.parse(projects), JSON.parse(tasks));
            })
        })
    })
}

// promise ways 
const dataWithPromise = () => {
    Promise.all([
        fetchDataPromise(fileUsers),
        fetchDataPromise(fileProjects),
        fetchDataPromise(fileTasks)
    ]).then((dataArray) => {
        display(JSON.parse(dataArray[0]), JSON.parse(dataArray[1]), JSON.parse(dataArray[2]));
    }).catch((err)=> {
        return console.Error(err);
    })
}

// async ways
const dataWithAsync = async () => {
    const users  = await fetchDataAsync(fileUsers);
    const projects = await fetchDataAsync(fileProjects);
    const tasks = await fetchDataAsync(fileTasks);
    
    display(JSON.parse(users), JSON.parse(projects), JSON.parse(tasks));
}

const fetchDataPromise = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err){
                reject(new Error(`file reading error`));
            }
            resolve(data);
        })
    })
}

const fetchDataAsync = async (file) => {
    try{
        const result = await fs.promises.readFile(file, "utf-8");
        return result;
    }catch(err){
        console.log(err);
    }
}

const fetchDataCallback = (file,callback) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) return callback(new Error("file reading error"));
        return callback(null, data);
    })
}

exports.display = (users, projects, tasks) => {
    const result = [];
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
    console.dir(result, {depth: 5});
}
