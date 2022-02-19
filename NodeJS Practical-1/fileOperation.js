const fs = require('fs');
const path = require('path');

const file = path.format({ dir:'/home/krushit/bacancy_training/node-training/Nodejs-practical-1', base:'trainees.json'});

// utility >>>
const readFile = () => {
    const data = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(data);
    });
    })
    .catch((err) => {
        console.log(`Error in file reading. ${err}`);
    });
    return data;
}

const fetchData = async () => {
    // fetch JSON object
    let filedataString = ""; 
    await readFile().then((data) => { 
        filedataString = data;
    })
    return JSON.parse(filedataString);
}

const writeFile = (data) => {
    fs.writeFile(file, data, (err) => {
        if(err) throw err;
    })
}

const hasData = (arrayOfObj, email) => {
    return arrayOfObj.some(element => {
        element.emailID === email
    });
}

const hasID = (arrayOfObj, id) => {
    return arrayOfObj.some(elem => elem.id === id);
}

const deleteID = (arrayOfObj, id) => {
    let i = 0;
    arrayOfObj.forEach((element,index) => {
        element.id === id;
        i = index;
    });
    arrayOfObj.splice(i-1,1);
    return arrayOfObj;
}

const updateObjectInArray = (arrayOfObj, id, fullName, emailID, projectAssigned) => {
    let i = 0;
    arrayOfObj.forEach((elem, index) => {
        elem.id === id;
        i = index;
    });
    if(fullName){
        arrayOfObj[i]["fullName"] = fullName;
    }
    if(emailID){
        arrayOfObj[i]["emailID"] = emailID;
    }
    if(projectAssigned){
        arrayOfObj[i]["projectAssigned"] = projectAssigned;
    }
    return arrayOfObj;
}

const displayOne = (arrayOfObj, id) => {
    let i = 0;
    arrayOfObj.forEach((elem, index) => {
        elem.id === id;
        i = index;
    });
    console.log(arrayOfObj[i]);
}

const displayAll = (arrayOfObj) => {
    arrayOfObj.forEach(elem => {
        console.log(elem);
    })
}
// utility <<<<<<

// TestCase: if file does not exist than make new file and add data.
exports.addData = async (dataObj, callback) => {
    const { fullName, emailID, projectAssigned} = dataObj;

    // check if all data is provided and none have empty strings.
    let errorMassage = "";
    errorMassage += fullName === "" ? " --fullName" : "";
    errorMassage += emailID === "" ? " --emailID" : "";
    errorMassage += projectAssigned === "" ? " --projectAssigned" : "";
    if(errorMassage !== ""){
        return callback(new Error(`please provide data for ${errorMassage} fields.`));
    }

    let data =await fetchData();

    // check if data already is in object 
    if(hasData(data, emailID)){
        return callback(new Error(`Oops! Data with email Id ${emailID} already exist in file.`));
    }
    const dataToAdd = {
        "id": new Date().getTime(),
        "fullName": fullName,
        "emailID": emailID,
        "projectAssigned": projectAssigned
    }
    data.push(dataToAdd);
    console.log(data);
    // write data to file.
    writeFile(JSON.stringify(data));
    return callback(null);
}

exports.deleteData = async (dataObj, callback) => {
    const { id } = dataObj;
    if(id === ""){
        return callback(new Error("Oops! looks like id isn't mentioned"));
    }
    let data = await fetchData();
    if(!hasID(data, id)){
        return callback(new Error(`id ${id} does not exist in file. please try again.`));
    }
    data = deleteID(data, id);
    writeFile(JSON.stringify(data));
    return callback(null);
}

exports.updateData = async (dataObj, callback) => {
    const { id, fullName, emailID, projectAssigned} = dataObj;
    if(!id){
        return callback(new Error("Oops! looks like id isn't mentioned"));
    }
    if(!(fullName || emailID || projectAssigned)){
        return callback(new Error("you haven't mentioned any field to be updated "))
    }
    let data = await fetchData();
    data = updateObjectInArray(data, id, fullName, emailID, projectAssigned);
    writeFile(JSON.stringify(data));
    return callback(null);
}

exports.fetchOne = async (dataObj, callback) => {
    const { id } = dataObj;
    if(!id){
        return callback(new Error("Oops! looks like id isn't mentioned"));
    }
    let data = await fetchData();
    if(!hasID(data, id)){
        return callback(new Error(`id ${id} not found in data`));
    }
    displayOne(data,id);
    return callback(null);
}

exports.fetchAll = async (dataObj, callback) => {
    let data = await fetchData();
    if(!JSON.stringify(data)){
        return callback("file is Empty!");
    }
    displayAll(data);
    return callback(null);
}