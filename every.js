/*
EVERY METHOD
The every() method tests whether all elements in the array 
pass the test implemented by the provided function. It returns 
a Boolean value. - MDN

Syntax - arr.every(callback(element[, index[, array]])[, thisArg])
*/

const cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

function lengthGreaterThan4(cities) {
    return cities.length > 4;
}

console.log(cities.every(lengthGreaterThan4));

function lengthGreaterThan10(cities) {
    return cities.length > 10;
}

console.log(cities.every(lengthGreaterThan10))