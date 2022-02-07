// while loops 

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while(currentCard !== 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


// do..while loops 

// Write your code below
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do{
  cupsAdded++;
}while(cupsAdded < cupsOfSugarNeeded);



