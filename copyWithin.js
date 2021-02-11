/*
COPY WITHIN METHOD
The copyWithin() method shallow copies part of an array 
to another location in the same array and returns it 
without modifying its length. - MDN

Syntax - arr.copyWithin(target[, start[, end]])
*/

const cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

function copyWin(index, start, end) {
    cities.copyWithin(index, start, end)
    return cities
}

console.log(cities)
// var output = copyWin(1, 0, 1);// copy to index 1, the element at index 0
// console.log(output)
// //["Houston", "Houston", "Austin", "El Paso", "San Antonio"];

// var output = copyWin(2, 1, 2);// copy to index 2 the element at index 3
// console.log(output)
// //["Houston", "Houston", "Houston", "El Paso", "San Antonio"];

// var output = copyWin(3, 2, 3);// copy to index 2 the element at index 3
// console.log(output)
// //["Houston", "Houston", "Houston", "Houston", "San Antonio"];

// var output = copyWin(4, 3, 4);// copy to index 2 the element at index 3
// console.log(output)
// //["Houston", "Houston", "Houston", "Houston", "Houston"];
