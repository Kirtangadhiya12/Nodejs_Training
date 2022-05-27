const express=require('express');
const { json } = require('express/lib/response');
const fs=require('fs');

const getuser = (req,res) => {
    fs.readFile('./users.json', (err, data) => {
        if(err) console.log(err);
        console.log(JSON.parse(data));
        return res.json(JSON.parse(data))
    })
}

const addUser = (req, res) => {
   
    fs.readFile('./users.json', (err, data) => {
        let{
            ID,
            fillname,
            emailId,
            designation,
            department,
            technologiesKnown,
            projects
    
        }=req.body;
        let User={
            ID,
            fillname,
            emailId,
            designation,
            department,
            technologiesKnown,
            projects
        }
        if(err) console.log(err);
        const data1=JSON.parse(data);
        data1.push(User);
    fs.writeFile('./users.json',JSON.stringify(data1,null,4),'utf-8',(error)=>{
if(error)
{
    return res.json({
        message: error
    })
}
else{
    return res.json({
        message:"User Added successfully"
    })
}
    })
        
    })

}



const updateUser = async (req, res) => {

    const { ID } = req.params;

    const {

        fullName,

        emailID,

        designation,

        department,

        technologiesKnown,

        projects,

    } = req.body;

    try{

        let data = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

        const user= data.find(i=>i.ID==ID)

        if(user){

            let newUser  = data.map(i=>{

                if(i.ID==ID){

                    i.fullName = fullName || i.fullName;

                    i.emailID = emailID || i.emailID;

                    i.designation = designation || i.designation;

                    i.department = department || i.department;

                    i.technologiesKnown = technologiesKnown || i.technologiesKnown;

                    i.projects = projects || i.projects

                }

                return i;

            });
           
      newUser = JSON.stringify(newUser,null,4);
            fs.writeFileSync("./users.json", newUser);

      res.send("User Updated successfully.")

        } else {

            res.send('User Not Found');

        }

    } catch (error) {




    }

}

const deleteUser = async (req, res) => {

    const { ID } = req.params;

   

    try{

        let data = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

        const user = data.find(i=>i.ID==ID)

        if(user){

            let newUser  = data.filter(i=>{

                return i.ID!=ID;
               
            });
           
            newUser = JSON.stringify(newUser,null,4);
            fs.writeFileSync("./users.json", newUser);

      res.send("User deleted successfully.")

        } else {

            res.send('User Not Found');

        }

    } catch (error) {




    }

}

module.exports={getuser,addUser,updateUser,deleteUser};
