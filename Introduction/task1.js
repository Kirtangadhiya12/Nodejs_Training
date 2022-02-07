// Kelvin weather

// kelvin 293 is temp in kelvin mesorment.
const kelvin = 293;

// 0 celsius is 273 kelvin;
const celsius = kelvin - 273;

//equation for converting celsius to fahrenheit
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;

//makes value integer
Math.floor(fahrenheit);

console.log(`The temperatue is ${fahrenheit} degrees fahrenheit.`);

//equation for converting celsius to newton
let Newton;
Newton = celsius * (33/100);

//makes value integer
Math.floor(Newton);

console.log(`The temperatue is ${Newton} degrees Newton.`);