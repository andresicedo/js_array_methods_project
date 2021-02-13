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
// numbers.sort((a, b) => a - b);
cities.sort().reverse();
console.log(cities);

//sorting numbers
