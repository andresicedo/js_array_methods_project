/*
FIND METHOD
The find() method returns the value of the first element in 
the provided array that satisfies the provided testing 
function. If no values satisfies the testing function, undefined 
is returned. - MDN

Syntax - arr.find(callback(element[, index[, array]])[, thisArg])
*/
const cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

const capital = cities.find(element => element === "Austin");
console.log(capital);

const state = cities.find(element => element === "Texas");
console.log(state);//undefined

//To find the index of the found argument
console.log(cities.indexOf(capital))
//*** OR ***//
// const places = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

// const city = (element) => element === "Austin";

// console.log(places.findIndex(city));
// // expected output: 3





