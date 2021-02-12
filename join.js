/*
JOIN METHOD 
The join() method creates and returns a new string by 
concatenating all of the elements in an array 
(or an array-like object), separated by commas or a specified 
separator string. If the array has only one item, then that 
item will be returned without using the separator. - MDN

Syntax: Array.from(arrayLike [, mapFn [, thisArg]])
*/
let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

console.log(cities.join());
console.log(cities.join(""));
console.log(cities.join(" "));
console.log(cities.join("-"));
console.log(cities.join(" and "));

