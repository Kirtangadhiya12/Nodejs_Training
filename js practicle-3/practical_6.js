const employee = {
    employeeID: 1,
    fullName: "Lav Panchal",
    emailID: "lav.panchal@bacancy.com",
    department: "NodeJS",
    designation: "Software Engineer"
};
const firstName = "Krushit";
const lastName = "Dudhat";
const email = "krushit.dudhat@bacancy.com";

//shallow copy
const shallwcopy = {...employee};

//deep copy
const deepcopy = JSON.parse(JSON.stringify(employee));

//obj fileld manipulation
deepcopy.fullName = `${firstName} ${lastName}`;
deepcopy.emailID = email;

console.log(deepcopy);