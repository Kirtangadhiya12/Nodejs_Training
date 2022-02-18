const Spy = (target, method) => {
    let temp = target[method];
    const result = { count:0 }
    target[method] = () => {
        result.count++ ;
        return temp.call(this, arguments); 
    }
    return result;
}

module.exports  = Spy;

//problem in function-javascript run