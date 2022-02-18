const trainee = {
"_id": 1,
"firstName": "Lav",
"lastName": "Panchal",
"aboutMe": "I code",
"profileImage": "users/1.png",
"academicDetails": {
"highestQualification": "B.E/B.Tech.",
"college": "Government Engineering College, Gandhinagar",
"university": "GTU",
"passoutYear": 2022
},
"contactDetails": {
"primaryEmailID": "aayush.adeshara@bacancy.com",
"alternateEmailID": "",
"primaryContactNo": 123,
"alternateContactNo": 456
},"technologyAssigned": "ROR"
}
const firstName = "Krushit";
const lastName = "Dudhat";
const email = "krushit.dudhat@bacancy.com";

//shallow copy does not work for neted elements of object
//const shallwcopy = {...employee};

//deep copy
const deepcopy = JSON.parse(JSON.stringify(trainee));

//obj fileld manipulation
deepcopy.firstName = firstName;
deepcopy.lastName = lastName;
deepcopy.contactDetails.primaryEmailID = email;

console.log(deepcopy);