const countWords = inputWords => {
    return inputWords.reduce((aObj,cElem) => {
        aObj[cElem] = aObj.hasOwnProperty(cElem) ? ++aObj[cElem] : 1;
        return aObj;
    },{});
}
module.exports = countWords;