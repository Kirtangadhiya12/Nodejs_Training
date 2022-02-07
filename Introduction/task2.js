// Dog Years

// myage is age, equivalent of that age dog year willbe counted.
const myAge = 20;

//early year of dogs life;
let earlyYears = 2;

//1 early year of dog is 10.5 dog year, as dog has 2 early years
earlyYears *= 10.5;

//we counted early year so remove them from total age and it will  be later year
let laterYears = myAge - 2;

// later year 1 year is 4 dog year
laterYears *= 4;

//combine earlyYears and lateryars to get total dog years
let myAgeInDogYears = earlyYears + laterYears;

//store string in lowercase to variable.
let myName = 'krushIt'.toLowerCase();

//print humna age and dogage with name.
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);