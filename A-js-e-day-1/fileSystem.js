const fs=require('fs');
fs.writeFileSync("myfile.js","Hello word");
fs.appendFileSync("myfile.js","My name is Kirtan")
const myself=fs.readFileSync("myfile.js");
console.log(myself.toString());
