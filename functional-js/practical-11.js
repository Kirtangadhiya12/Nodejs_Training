module.exports = arrayMap = (arr, fn) => {
    return arr.reduce((aElem,cElem) => {
        aElem.push(fn(cElem));
        return aElem;
    },[]);
}

