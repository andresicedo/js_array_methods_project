/*
FOR EACH METHOD 
The forEach() method executes a provided function once 
for each array element. - MDN

Syntax:

arr.forEach(callback(currentValue[, index[, array]]) {
  // execute something
}[, thisArg]);
*/
let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

cities.forEach(function(city, index, array) {
    if (city === "Austin") {
        console.log(index);
    }
}) 

cities.forEach(function(city, index, array) {
    if (city === "Houston") {
        city = city.toUpperCase();
    }
    console.log(city);
})


