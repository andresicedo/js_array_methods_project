/*
REDUCE METHOD
The reduce() method executes a reducer function (that you provide) 
on each element of the array, resulting in single output value. - MDN

Syntax: 

arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
*/

let numbers = [1, 2, 11, 4, 3];

// //1. Basic For Loop
// function sum(array) {
//     count = 0;
//     for (let i = 0; i < array.length; i++) {
//         count += array[i];
//     }
//     return count;
// }

// console.log(sum(numbers));

// //2. Reduce introduction
// function sum(acc, val) {
//      //accumulator is the first index of array, 
//      //if not initially stated
//     return acc + val;
// }
// // let theSum = numbers.reduce(sum);
// let theSum = numbers.reduce(sum, 0);
// console.log(theSum);

// //3. Reduce with arrow function
// let sum = numbers.reduce((acc, val) => acc + val);
// console.log(sum);




//find largest number
// //1. For loop
// function findLargest(array) {
//     let largest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(largest < array[i]) {
//             largest = array[i];
//         } 
//     }
//     return largest;
// }
// console.log(findLargest(numbers));
// //2. Reduce method

// function findLargest(acc, val) {
//     if(val > acc) {
//         acc = val;
//     }
//     return acc;
// }
// let largest = numbers.reduce(findLargest);
// console.log(largest);

// //3. Using arrow function

// let largest = numbers.reduce((val, acc) => {
//     if(val > acc) {
//         acc = val;
//     }
//     return acc;
// })
// console.log(largest);
 
// //4. Ternary operator

// let largest = numbers.reduce((a, b) => b > a ? b : a);
// console.log(largest);