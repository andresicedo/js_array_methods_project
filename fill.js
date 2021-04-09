/*
FILL METHOD
The fill() method changes all elements in an array to a 
static value, from a start index (default 0) to an end 
index (default array.length). It returns the modified array. - MDN

Syntax - arr.fill(value[, start[, end]])
*/

const cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

//array of numbers
let houston = cities.fill(281);
console.log(houston)

//array of updated strings
var state = cities.fill("Texas");
console.log(state)

//array of updated strings, called from start to end
let number = cities.fill(21, 1, 4)
console.log(number);



