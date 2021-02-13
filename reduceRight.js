/*
REDUCERIGHT METHOD
The reduceRight() method applies a function against an accumulator 
and each value of the array (from right-to-left) to reduce it to a 
single value. - MDN

Syntax: 
arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
*/

const citiesReverse = [["Houston"], ["Dallas", "Austin"], ["El Paso", "San Antonio"]].reduceRight((acc, val) =>acc.concat(val));
console.log(citiesReverse)