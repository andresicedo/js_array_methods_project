/*
VALUES METHOD

The values() method returns a new Array Iterator object that 
contains the values for each index in the array. - MDN

Syntax: arr.values()
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

const iterator = cities.values();

for (const value of iterator) {
    console.log(value);
  }
  /*
Houston
Dallas
Austin
El Paso
San Antonio
*/