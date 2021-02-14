/*
TOSTRING METHOD

The toString() method returns a string representing the specified 
array and its elements. - MDN

***will join array with "," as seperator, as opposed to "join" method
which joins and at whatever seperator you call***

Syntax: arr.toString()
*/

let numbers = ["1", 2, "3", 4, 5, "0"];

let string = numbers.toString();
console.log(string);
console.log(numbers);
