/*
CONCAT METHOD 
Syntax - arr1.concat(arr2)
*/

let cities1 = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];
let cities2 = ["Galveston", "Waco", "Brownsville", "Laredo", "Lubbock"];


// 1. use the concat method to merge cities2 to cities1

// let citiesMerged = cities1.concat(cities2);
// console.log(citiesMerged);



//2. use the concat method to merge three arrays

let cities3 = ["Waco"];
let citiesMerged = cities1.concat(cities2, cities3);
console.log(citiesMerged);
console.log(cities1);