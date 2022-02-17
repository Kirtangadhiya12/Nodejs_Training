// Write your code below
let bobsFollowers = ['alex', 'kevin', 'hardy', 'nil'];
let tinasFollowers = ['alex', 'anna', 'nil'];
let mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length ; i++){
  for(let j = 0; j < tinasFollowers.length ; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

