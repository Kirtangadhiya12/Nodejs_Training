const repeat = async (operation, num) => {
        if (num <= 0) return;
        operation();
        setTimeout(() => repeat(operation, --num));
    }
        
    module.exports = repeat


    // 
    // if(num % 100 === 0){
    //         setTimeout(() => {repeat(operation, --num)});
    //     }else{
    //         repeat(operation,--num);
    //     }