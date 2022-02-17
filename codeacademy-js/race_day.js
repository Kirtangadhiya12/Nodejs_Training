let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistered = true;
let runnerAge = 16;

if(runnerAge > 18 && earlyRegistered){
  raceNumber += 1000;
}
if(runnerAge > 18 && earlyRegistered){
  console.log(`runner name with race no ${raceNumber} will start race at 9:30 am`);
}else if(runnerAge > 18 && !earlyRegistered){
  console.log(`runner name with race no ${raceNumber} will start race at 11:00 am`);
}
if(runnerAge < 18){
   console.log(`runner name with race no ${raceNumber} will start race at 12:30 pm`);
}else{
  console.log('see registration desk.');
}