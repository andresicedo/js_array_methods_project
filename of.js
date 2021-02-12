/*
OF METHOD 
The Array.of() method creates a new Array instance from a 
variable number of arguments, regardless of number or type 
of the arguments.

The difference between Array.of() and the Array constructor 
is in the handling of integer arguments: Array.of(7) creates 
an array with a single element, 7, whereas Array(7) creates 
an empty array with a length property of 7 
(Note: this implies an array of 7 empty slots, not slots with 
    actual undefined values). - MDN

Syntax: Array.from(arrayLike [, mapFn [, thisArg]])
*/

let cities = Array.of("Houston", "Dallas", "Austin", "El Paso", "San Antonio")
console.log(cities)




// /////difference between "Array.of() and Array()"
// console.log(Array(7));//[ <7 empty items> ]
// console.log(Array.of(7));//[ 7 ]