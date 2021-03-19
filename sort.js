/*
SORT METHOD

The sort() method sorts the elements of an array in place and 
returns the sorted array. The default sort order is ascending, 
built upon converting the elements into strings, then comparing 
their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as 
it depends on the implementation. - MDN

Syntax: arr.sort([compareFunction])
*/
let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

cities.sort()
console.log(cities)
//sort descending order
cities.sort().reverse()
console.log(cities);
// sort by length 
cities.sort().sort((a, b) => a.length - b.length);
console.log(cities);
// sort by length in descending order
cities.sort((a, b) => b.length - a.length);
console.log(cities)


// //sorting numbers

// let numbers = [21, 21.5, 20, -5, 0];

// //sort
// numbers.sort();
// console.log(numbers);

// //sort descending
// numbers.sort((a, b) => b - a);
// console.log(numbers);

//sorting array of objects
// let ranking = [
//     {
//         first: "austin", 
//         second: "dallas"
//     }, 
//     {
//         first: "houston", 
//         second: "san antonio"
//     }
// ];

// ranking.sort((a, b) => b.first.length - a.first.length);
// console.log(ranking);