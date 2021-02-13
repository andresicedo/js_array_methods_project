/*
SOME METHOD
The some() method tests whether at least one element in the 
array passes the test implemented by the provided function. 
It returns a Boolean value. - MDN

Syntax: arr.some(callback(element[, index[, array]])[, thisArg])
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

//check whether a city has a name of "Austin"
console.log(cities.some(city => city === "Austin"));//true

//check whether a city has a name of "New York"
console.log(cities.some(city => city === "New York"));//false