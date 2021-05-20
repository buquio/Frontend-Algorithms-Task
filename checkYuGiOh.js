// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
// creates an array of numbers from 1 to n and replaces factors of 2, 3, and 5 with
//  "yu", "gi" and "oh", logs the resulting array to the console then returns the resulting array.

// Note:
// - for strings that have multiple factors, use hyphens as separators
// e.g 10 === "yu-oh", 30 === "yu-gi-oh"
// - perform checks on your input and return `invalid parameter: ${parameter}` 
// if an invalid parameter - i.e. a string that can't be converted to a number or another data type - is passed. 
// Use the following cases as guides:

// - checkYuGiOh(10) should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// - checkYuGiOh("5") should return [1, "yu", "gi", "yu", "oh"]
// - checkYuGiOh("fizzbuzz is meh") should return `invalid parameter: "fizzbuzz is meh"`
 
var output= [];

function checkYuGiOh(n){
//if its a string or a string that can't be converted to a number
     if (typeof n === 'string'){
        if(/^\d+$/.test(n)){  //if its a string with digit inside it e.g "5"
            DoCheck(n)
            return output;
        }
        return( `invalid parameter: "${n} is not valid"`)
    }
//other data types
    if (typeof n !== 'number' ){  
        return( `invalid parameter: "${n} is not valid"`)
     }
//if its a valid no
     DoCheck(n)
     return output;
}

function DoCheck(n){
    for(var count=1; count<=n; count++){
        
        if (count%2 ===0 & count%3 ===0 & count%5 ===0){
            output.push("yu-gi-oh");
            }
            else if(count%2 ===0 & count%3 ===0){
                output.push("yu-gi");
            }
            else if(count%2 ===0 & count%5 ===0){
                output.push("yu-oh");
            }
            else if(count%2 ===0){
                output.push("yu");
            }
            else if(count%3 ===0){
                output.push("gi");
            }
            else if(count%5 ===0){
                output.push("oh");
            }
            else {
                output.push(count);
            }
    
}
}
// checkYuGiOh(10)
// checkYuGiOh("5")
// checkYuGiOh("fizzbuzz is meh")

// console.log(checkYuGiOh(10)) //should return [1, "yu", "gi", "yu", "oh", "yu-gi", 7, "yu", "gi", "yu-oh"]
// console.log(checkYuGiOh("5")) //should return [1, "yu", "gi", "yu", "oh"]
console.log(checkYuGiOh("fizzbuzz is meh")) //should return `invalid parameter: "fizzbuzz is meh"`


