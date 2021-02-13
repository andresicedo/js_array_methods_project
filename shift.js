/*
SHIFT METHOD
The shift() method removes the first element from an array and 
returns that removed element. This method changes the length of 
the array. - MDN

Syntax: arr.shift()
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];
let hTown = cities.shift();
console.log(cities);
console.log(hTown);