/*
ISARRAY METHOD 
The Array.isArray() method determines whether the 
passed value is an Array. - MDN

Syntax: Array.isArray(value)
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

let city = "Houston";

console.log(Array.isArray(cities));//true
console.log(Array.isArray(city));//false