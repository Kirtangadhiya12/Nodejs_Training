const uniqueArray = (arr1, arr2) => {
    let result = [];
    arr1.forEach(item => {
        if(arr2.findIndex(item2 => item2 === item) === -1){
            result.push(item);
        }
    });
    arr2.forEach(item => {
        if(arr1.findIndex(item2 => item2 === item) === -1){
            result.push(item);
        }
    });
    return result;
}
console.log(uniqueArray([3,7,6,1,2,5,4], [11,12,13,14,10,5,4,6]));