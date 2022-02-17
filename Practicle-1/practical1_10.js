/* 
    Write a function that takes an array as an argument and returns all the elements
of an array after capitalizing each element of the array.
*/ 

const capitalizedArray = (arr) => {
    return arr.map(item => item.charAt(0).toUpperCase()+item.slice(1,));
}
let words =[ 'The',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'the',
    'lazy',
    'dog.' ];
console.log(capitalizedArray(words));
