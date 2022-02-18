const logger = (namespace) => {
    return (...arr) => console.log.apply(null, [namespace,...arr]);
}
module.exports = logger;



//apply(this,arg) or apply(null,arg);