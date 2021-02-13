/*
PUSH METHOD 
The push() method adds one or more elements to the end of an array 
and returns the new length of the array. - MDN

Syntax: arr.push([element1[, ...[, elementN]]])
*/

// let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];
// let updatedCities = cities.push("Galveston", "Waco", "Brownsville", "Laredo", "Lubbock");
// console.log(cities);//cities array is updated with cities in parameter
// console.log(updatedCities)//length of array
 
let numbersArray = [1, 2, 33, 44, 55, 66];
let newArray = [];
function pushMethod(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] >= 10) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(pushMethod(numbersArray))