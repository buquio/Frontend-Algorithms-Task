// Task Title: Frontend Algorithms Task (Frontend Task 4)
// This task is to give you a feel of basic JavaScript algorithms.

// 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.
// Note:
// - 1F = 1.8C + 32 (e.g 0deg C = 32deg F)
// - if the parameter passed is not a number and cannot be converted to a valid number, 
// return a string with the format below:
//     `${parameter} is not a valid number but a/an ${parameter's type}.`
// You can use the following cases as guides:

// - convertFahrToCelsius(0) should return `32`
// - convertFahrToCelsius("0") should return `32`
// - convertFahrToCelsius([1,2,3]) should return `[1,2,3] is not a valid number but a/an array.`
// - convertFahrToCelsius({temp: 0}) should return `{temp: 0} is not a valid number but a/an object.`
 
////////////////////////////
//  A.  CONVERT CELSIUS TO FAHRENHEIT
function convertCelsiusToFahr(celsius) {
  
  if (Array.isArray(celsius)) {
    return  `${celsius} is not a valid number but a/an Array's type.`
  }
  else if (typeof celsius === 'object'){
    return  `${celsius} is not a valid number but a/an Object's type.`
  }
  
  else {
    var fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
}

// convertCelsiusToFahr(0);
// convertCelsiusToFahr("0");
// convertCelsiusToFahr([1,2,3]);
// convertCelsiusToFahr({temp: 0});

console.log(convertCelsiusToFahr(0)) //should return `32`
// console.log(convertCelsiusToFahr("0")) //should return `32`
// console.log(convertCelsiusToFahr([1,2,3])) //should return `[1,2,3] is not a valid number but a/an array.`
// console.log(convertCelsiusToFahr({temp: 0})) //should return `{temp: 0} is not a valid number but a/an object.`




//  B.  CONVERT FAHRENHEIT TO CELSIUS
// function convertFahrToCelsius(fahrenheit) {
//   var celsius = 5/9 * (fahrenheit - 32)
//    if (Array.isArray(celsius)) {
//     return  `${fahrenheit} is not a valid number but a/an Array's type.`
//   }
//   else if (typeof fahrenheit === 'object'){
//     return  `${fahrenheit} is not a valid number but a/an Object's type.`
//   }
//   else {
//     return celsius; 

//   }
// }
// // convertFahrToCelsius(0);
// // convertFahrToCelsius("0");
// // convertFahrToCelsius([1,2,3]);
// // convertFahrToCelsius({temp: 0})

// console.log(convertFahrToCelsius(0))
// console.log(convertFahrToCelsius("0"))
// console.log(convertFahrToCelsius([1,2,3]))  
// console.log(convertFahrToCelsius({temp: 0}))




   
