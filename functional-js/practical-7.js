const reduce = (arr, fn, initial, index = 0) => {
    if(arr.length <= index) return initial;
    return reduce(arr, fn, fn(initial, arr[index], index, arr), index+1);
}
module.exports = reduce;

//solution
/* 
return (recc = (acc, index) => {
        if(arr.length < index) return acc;
        acc = fn(acc, arr[index], index, arr);
        return recc(acc, index+1);
    })(initial, 0);
*/