const duckCount = (...arr) => { 
    // use rest parameter to pass arguments and use filter on array.
    return arr.filter(obj => {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length;
}
module.exports = duckCount;

