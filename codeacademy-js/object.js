// creating object Literals

// Write your fasterShip object literal below
const fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
};

// Accessing object properties using dot operator 

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;
console.log(crewCount, planetArray);


// Bracket Notation 

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
const isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);



// Property Assignment 

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 5;
delete spaceship['Secret Mission'];



//8.  pass by refrence objects 

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = (spaceship) =>{
  spaceship['Fuel Type'] = 'avocado oil';
}
let remotelyDisable = obj => {
  obj.disabled = true;
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
