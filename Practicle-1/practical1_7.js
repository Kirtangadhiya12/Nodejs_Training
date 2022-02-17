/* Write a function that accepts 2 arguments 1- object and 2 - an array of objects
will return boolean true value if the object is contained in an array of objects else
will return false. (make sure your solution is a dynamic one, it should work
on any array of objects even if the properties of objects don't follow the
same order.) 
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
  
const arrOfObj = (obj , arrObj) => {
    let result = arrObj.some(elem => compare(elem,obj));
    return result;
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