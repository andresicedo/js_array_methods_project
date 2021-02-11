/*
CONCAT METHOD 
The concat() method is used to merge two or more arrays. This method 
does not change the existing arrays, but instead returns a new array - MDN

Syntax - arr1.entries(arr2)
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];
let cities2 = ["Galveston", "Waco", "Brownsville", "Laredo", "Lubbock"];


//1. Concatenation of two arrays - use the concat method to merge array1 and array2

// function merge(array1, array2) {
//     let citiesMerged = array1.concat(array2);
//     return citiesMerged;
// }


// console.log(merge(cities, cities2));

//2. Concatenation of two arrays - use the concat method to merge array2 and array1

// function merge(array1, array2) {
//     let citiesMerged = array2.concat(array1);
//     return citiesMerged;
// }

// console.log(merge(cities, cities2));


//3. Concatenation of three arrays - use the concat method to merge three arrays

// function merge(array1, array2) {
//     let cities3 = ["Fort Worth"];
//     let citiesMerged = array1.concat(array2, cities3);
//     return citiesMerged;
// }


// console.log(merge(cities, cities2));