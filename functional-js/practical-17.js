const curryN = (fn, n) => {
    n = n || fn.length;
    
    return (args) => { 
        if(n <= 1){
            return fn(args);
        }
        return curryN(fn.bind(this, args), n-1);
    }
}
module.exports = curryN;