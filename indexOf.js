/*
INDEXOF METHOD 
The indexOf() method returns the first index at which a given 
element can be found in the array, or -1 if it is not present. - MDN

Syntax: arr.indexOf(searchElement[, fromIndex])
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio", "El Paso",];

console.log(cities.indexOf("New York"))
console.log(cities.indexOf("El Paso"))


//get last index of an element
console.log(cities.indexOf("El Paso", 4))
//////OR//////
console.log(cities.lastIndexOf("El Paso"))