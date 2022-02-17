
//Variables
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

let changeMe = true;
changeMe = false;
console.log(changeMe);

const entree = 'Enchiladas';
console.log(entree);
// next line will give error as const can't be re-assigned 
// entree = 'Tacos';

// Mathametical Assignment Operators
//shorthand operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//Increment and Decrement operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

let up = 5;
let down = 6;
console.log(++up + up - down--);

//String concatanation with variable 
let favoriteAnimal = 'lion';
console.log('My favorite animal:' + favoriteAnimal );

//String Interpolation
let myName = 'kunj';
let myCity = 'surat';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

//typeof Operator
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

//review variables
let mynumup = 34;
let mynumdown = 33;
let mystringname = 'mohan';
mynumdown -= --mynumup;
mynumup += 4;

console.log(mystringname + mynumup);

console.log(`${mystringname} has ${mynumup} apples and ${++mynumdown} watermalon`);

console.log(typeof mynumdown);

let choice = true;
let mixvar = mynumdown + choice;
console.log(typeof mixvar);