/*Write a function that accepts a comma-delimited string containing numbers as an
argument and returns the sum of the numbers. (use appropriate built-in JS
functions for string manipulation.)
 */

const numbersInString = (str) => {
    let numbers = str.split(/,/g);
    return numbers.reduce((a,b) => parseInt(a)+parseInt(b) , 0);
}
console.log(numbersInString("3,7,6,1,2,5,4,11,12,13,14,10,5,4,6"));
