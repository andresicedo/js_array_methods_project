/*
INCLUDES METHOD 
The includes() method determines whether an array includes 
a certain value among its entries, returning true or false 
as appropriate. - MDN

Syntax: arr.includes(valueToFind[, fromIndex])
*/

let cities = ["Houston", "Dallas", "Austin", "El Paso", "San Antonio"];

if (cities.includes("Houston", "Austin", "San Antonio", "El Paso")) {
    console.log("I love Texas!")
} else {
    console.log("That's not Texas")
}


//console.log(cities.includes("Houston"));

