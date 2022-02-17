/* Write a function which takes a number as an argument and computes the
factorial of a number with map and reduce.
*/

const factNumber = (num) => {
    return Array(num).fill().map((_,i) => i+1).reduce((aItem, cItem) => aItem*cItem);
}
console.log(factNumber(10));