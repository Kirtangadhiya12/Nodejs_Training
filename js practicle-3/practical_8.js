let patients = [{
"name": "James",
"ailments": ["Cough", "Cold", "Fever"]
},
{
"name": "George",
"ailments": ["Blood Pressure"]
},
{
"name": "Robert",
"ailments": ["Cough", "Cold", "Fever"]
},
{
"name": "Mary",
"ailments": ["Diabetes"]
},
{
"name": "Patricia",
"ailments": ["Blood Pressure"]
}];

// append elements to array.
const value = [{
"name": "Christopher",
"ailments": ["Dengue"]
},
{
"name": "Thomas",
"ailments": ["Diabetes"]
},
{
"name": "Anthony",
"ailments": ["Fatigue", "Cold", "Fever"]
}];
patients = patients.concat(...value);
console.log("APPEND: " , patients);

// delete the elem. with name George --findIndex & splice
const index1 = patients.findIndex(elem => elem.name === "George");
index1 >= 0 ? patients.splice(index1,1) : console.log("elem not present in array");
console.log("DELETED: " ,patients);

//add one patient at the beginning of array --unshift
const patient1 = {
    name: 'nik',
    ailments: ['Diabetes', 'Blood Pressure']
}
patients.unshift(patient1);
console.log("ADD ELEM TO START: " ,patients);

//Update: ailments of elem.name = Christopher --findIndex --Destructuring
const index2 = patients.findIndex(elem => elem.name === 'Christopher');
index2 >= 0 ? patients[index2]['ailments'] = ['caugh','cold',...patients[index2]['ailments']] : console.log("elem not present in array");
console.log("UPDATE ELEM chritopher: " , patients);

//Delete elem from last. --pop
patients.pop();
console.log("DELETE LAST ELEM: " , patients);

//Delete one elem from start --shift
patients.shift();
console.log("DELETE FIRST ELEM: " , patients);

//Insert one elem at spacified index --splice
const patient2 = {
    name: 'kane',
    ailments: [ 'cold', 'Fever', 'sore body']
}
patients.splice(4,0,patient2);
console.log("INSERT ELEM AT INDEX 4: " ,patients);

//find elem with ailments->diabetese. --find --some
const diabetecPatient = patients.find(elem => elem['ailments'].some(elem => elem === "Diabetes"));
console.log("FIND ELEM : " , diabetecPatient);

//reverse array --reverse
patients.reverse();
console.log("REVERSE : " , patients);