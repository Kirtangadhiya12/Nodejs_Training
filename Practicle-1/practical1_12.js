/*Write a function which takes an array of numbers as an argument and calculates
the sum of every positive element using filter and reduce.
*/

const positiveNumberSum = (arr) => {
    return arr.filter(elem => elem > 0).reduce((aElem, cElem) => aElem + cElem);
}
console.log(positiveNumberSum([3,-7,6,1,-2,-5,4,-11,12,13,-14,0,5,-4,6])); // output 50 