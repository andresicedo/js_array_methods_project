/*
FILTER METHOD
The filter() method creates a new array with all elements 
that pass the test implemented by the provided function. - MDN

Syntax: 

let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);

*/

const cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

let coolCities = cities.filter(cities => cities != "Dallas");

let homeTown = cities.filter(cities => cities === "Houston"); 

console.log(coolCities);
//["Houston", "Austin", "El Paso", "San Antonio"];

console.log(homeTown);
//["Houston"];