const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

const fileStream = fs.createWriteStream('shoppingResults.txt');
const transformData = (data) => {
  fileStream.write(`They were out of: ${data}\n`);
}

myInterface.on('line', transformData);

/*
Expected result 
They were out of: apples
They were out of: pears
They were out of: royal jelly
They were out of: bread
They were out of: milk
They were out of: tofu
They were out of: beans
They were out of: flan
They were out of: pork
They were out of: tamarind
 */