/*
SPLICE METHOD

The splice() method changes the contents of an array by 
removing or replacing existing elements and/or adding new 
elements in place. - MDN

Syntax: 
let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
*/

let coolCities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

let dallas = coolCities.splice(1, 1);
console.log(coolCities);//[ 'Houston', 'Austin', 'El Paso', 'San Antonio' ]
console.log(dallas);//[ 'Dallas' ]

let laredo = coolCities.splice(4, 0, "Laredo")
console.log(coolCities);//[ 'Houston', 'Austin', 'El Paso', 'San Antonio', 'Laredo' ]