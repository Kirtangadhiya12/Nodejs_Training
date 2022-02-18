// execute operation num times 
const repeat = (operation, num) =>  {
    do{
        operation();
        --num;
    }while(num>0);
}

module.exports = repeat