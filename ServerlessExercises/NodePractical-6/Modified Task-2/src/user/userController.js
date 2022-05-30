const fs=require('fs');

module.exports.getUser = async(event) => {
    let data=fs.readFileSync('./users.json');
        console.log(JSON.parse(data));
        data = JSON.parse(data);
        return ({
            statusCode:200,
            body: JSON.stringify(data)
        });
}

module.exports.addUser = async(event) => {
   
   let data= fs.readFileSync('./users.json');
        let {
            ID,
            fullName,
            emailID,
            designation,
            department,
            technologiesKnown,
            projects
    
        }=JSON.parse(event.body);
        let User={
            ID,
            fullName,
            emailID,
            designation,
            department,
            technologiesKnown,
            projects
        }
        
        const data1=JSON.parse(data);
        data1.push(User);
    fs.writeFileSync('./users.json',JSON.stringify(data1,null,4),'utf-8');
    return {
        
        message:"User Added successfully",
    }
}



module.exports.updateUser = async (event) => {

    const { ID } = event.pathParameters;

    const {

        fullName,

        emailID,

        designation,

        department,

        technologiesKnown,

        projects,

    } = JSON.parse(event.body);

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

            return {
                message:"User updated successfully."
              }

        } else {

            return {
                statusCode:400,
                message:"User Not found"
              }

        }

    } catch (error) {
        return {
            statusCode:400,
            message:error
          }
    }

}

module.exports.deleteUser = async (event) => {

    const { ID } = event.pathParameters;

    try{

        let data = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

        const user = data.find(i=>i.ID==ID)

        if(user){

            let newUser  = data.filter(i=>{

                return i.ID!=ID;
               
            });
           
            newUser = JSON.stringify(newUser,null,4);
            fs.writeFileSync("./users.json", newUser);

      return {
          message:"User deleted successfully."
        }

        } else {
            return {     
                message:"User not found"
              }
        }

    } catch (error) {

        return {
            statusCode:400,
            message:error
          }
    }

}


