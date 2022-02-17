/*Write a function that takes an array of objects and an object as an argument and
pushes the object to the array if it is not in the array. (use appropriate
iterator(s), don’t use simple loops to iterate through the array and check
whether the object is there or not.)
 */

const contacts = [
    {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
    },
    {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

const addObjToArray = (obj, arrObj) => {
    if(!isObjInArray(obj, arrObj)){
        arrObj.push(obj);
    }else{
        console.log("obj exists in array");
    }
    return arrObj;
}
const isObjInArray = (obj , arrObj) => {
    return arrObj.some(elem => compare(elem,obj));
}
const compare = (obj1, obj2) => { 
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if(key1.length != key2.length){
      return false;
    }
    key1.forEach(key => {
      let Objflag = typeof(obj1[key])==='object' && typeof(obj2[key]==='object');
      if((obj1[key].toString() !== obj2[key].toString()) || !(Objflag && compare(obj1[key],obj2[key]))){
        return false;
      }
    })
    return true;
}

console.log(arrOfObj({
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
    }, contacts));