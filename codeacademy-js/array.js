// creating a simple array list
const hobbies = ['heavenly demon', 'solo leaveling', 'gosu'];
console.log(hobbies);

// indexing and acceing the elem in array
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[4]);

//  Update array elem
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';


//Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);
utensils[utensils.length - 1] = 'Spoon';
console.log(utensils);


// .length property 
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// .push() method 
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('clean sofa', 'arrange closet');
console.log(chores);

// .pop() method 

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);


// more array methods 
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1,4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// Arrays and function 

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);


// Nested Arrays

let numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];
console.log(target);


