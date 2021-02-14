/*
UNSHIFT METHOD

The unshift() method adds one or more elements to the beginning 
of an array and returns the new length of the array. - MDN

Syntax: arr.unshift(element1[, ...[, elementN]])
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

cities.unshift("Laredo");//[ 'Laredo', 'Houston', 'Dallas', 'Austin', 'El Paso', 'San Antonio' ]
console.log(cities);