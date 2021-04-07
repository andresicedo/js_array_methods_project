/*
Flat METHOD
The flat() method creates a new array with all sub-array 
elements concatenated into it recursively up to the 
specified depth. - MDN

Syntax - var newArray = arr.flat([depth]);
*/

const cities = ["Houston", [["Dallas", "Austin"], ["El Paso", "San Antonio"]]];
let oneArray = cities.flat();
console.log(oneArray);//[ 'Houston', 'Dallas', 'Austin', 'El Paso', 'San Antonio' ]

let twoArrays = cities.flat(1);
console.log(twoArrays);
//[ 'Houston', [ 'Dallas', 'Austin' ], [ 'El Paso', 'San Antonio' ] ]


