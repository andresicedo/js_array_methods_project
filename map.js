/*
MAP METHOD 
The map() method creates a new array populated with the 
results of calling a provided function on every element 
in the calling array. - MDN

Syntax:
let newArray = arr.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);
*/
let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

//return length of each city name
let cityLength = cities.map(city => city.length);
console.log(cityLength);

//return the array of cities in all uppercase letters
let cityCap = cities.map(city => city.toUpperCase());
console.log(cityCap);

//return the array of cities in all lowercase letters, and a "#" symbol in front
let cityLower = cities.map(city => "#" + city.toLowerCase());
console.log(cityLower)