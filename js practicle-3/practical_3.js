const uniqeArray = (arr) => {
    return [...new Set(arr)];
}

console.log(uniqeArray([3,4,3,2,4,5,7,8,9,7,10,52,12,10,20,30,25,65,45,10,2,5,8,6,12,54]));