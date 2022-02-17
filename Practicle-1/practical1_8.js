/*
Write a function that accepts a number as an argument and generates an array
of n unique random numbers from 1 to n. (no. Provided in the argument) 
*/

const uniqueNumGenerator = (num) => {
    const arr = [];
    do{
       let random = Math.ceil(Math.random() * num);
        arr.includes(random) ? arr : arr.push(random);
    }while(arr.length < num);
    return arr;
}
console.log(uniqueNumGenerator(12));
