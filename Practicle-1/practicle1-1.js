
  // 1)    
let arr = [1,2,3,4,5];
function avgf(arr)
{
let avg = arr.reduce((accum,currval) => accum + currval ,0);
    

    
      return avg/arr.length;
    


};


let favg=avgf(arr);
console.log(favg);





//2)
let arr2 = [2,5,8,1,0]
function maxMin(arr2)
{
let min = arr2.reduce((a,b) =>{
    return (a > b ? a :b);
   
}
    
    

);
    


return min;
}

let maxmi  =maxMin(arr2);
console.log(maxmi)

//3)
