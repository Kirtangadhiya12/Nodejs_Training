// fucntion using fucntion keyword
// fundtion declaration and function name
function getReminder(){
  console.log('Water the plants');
}

function greetInSpanish(){
  console.log('Buenas Tardes.');
}

//calling function 
function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

// use of parameter and argument in functoins 
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');

//Default parameter
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

// use of return in function 
function monitorCount(rows, columns){
    return rows * columns;
}
const numOfMonitors  = monitorCount(5, 4);
console.log(numOfMonitors); 

// Helper funtion 
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

//Function expression 
  const plantNeedsWater = function (day){
    if(day === 'Wednesday'){
      return true;
    }else{
      return false;
    }
  };
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater('Tuesday'));

// Arrow funciton 
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Concise body arrow funciton 
const plantNeedsWater = day => day === 'Wednesday' ? true : false ;

