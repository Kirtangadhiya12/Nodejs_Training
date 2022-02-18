// function to swap objects 

let obj1 = {
    _id: 1,
    fullName: 'Aayush Adeshara',
    college: 'Government Engineering College, Gandhinagar',
    technologyAssigned: 'ROR'
    };
let obj2 = {
    _id: 11,
    fullName: 'Kalpin Gajjar',
    college: 'GEC, Gandhinagar',
    technologyAssigned: 'ROR'
    };

let swapObjects = (obj1, obj2) => { 
    return [obj2, obj1];
}

console.log("Before swapping : \n", obj1, obj2);
[obj1, obj2] = swapObjects(obj1, obj2);
console.log("\nAfter swapping : \n", obj1, obj2);