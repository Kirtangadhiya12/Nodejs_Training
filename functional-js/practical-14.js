function repeat(operation, num) {
      // Modify this so it doesn't cause a stack overflow!
        if (num <= 0) return
        operation();
        if(num % 10 === 0){
            trampoline(() => repeat(operation, --num));
        }else{
            repeat(operation, --num);
        }
    }
    
    function trampoline(fn) {
      // You probably want to implement a trampoline!
        setTimeout(fn);
        
    }
    
    module.exports = function(operation, num) {
      // You probably want to call your trampoline here!
        
        return repeat(operation, num)
    }
