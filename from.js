/*
FROM METHOD 
The Array.from() static method creates a new, shallow-copied 
Array instance from an array-like or iterable object. - MDN

Syntax: Array.from(arrayLike [, mapFn [, thisArg]])
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

//make all city strings in array uppercase
let caps = Array.from(cities, caps => caps.toUpperCase());
console.log(caps);

//return double the length of each city string
let doubleLength = Array.from(cities, city => city.length * 2);
console.log(doubleLength);

//add an "@" symbol to the beginning of each string
let atCity = Array.from(cities, city => "@" + city);
console.log(atCity);