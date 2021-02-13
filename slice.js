/*
SLICE METHOD
The slice() method returns a shallow copy of a portion of an 
array into a new array object selected from start to end 
(end not included) where start and end represent the index of 
items in that array. The original array will not be modified. - MDN

Syntax: arr.slice([start[, end]])
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

let startAtAustin = cities.slice(2);
let startAtDallas = cities.slice(1, 4);
console.log(startAtAustin);
console.log(startAtDallas);
console.log(cities);