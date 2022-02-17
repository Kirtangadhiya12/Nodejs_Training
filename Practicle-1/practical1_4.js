/*1. Write a function which takes an array of numbers as an argument and returns an
array with only distinct elements using reduce iterator. */

const distNumber = (arr) => {
    return arr.reduce((uniqarr,b) => { 
        return uniqarr.includes(b) ? uniqarr : [...uniqarr, b];
    }, []);
}
const array = [3,7,6,1,2,5,4,11,12,13,14,10,5,4,6];
console.log(distNumber(array));