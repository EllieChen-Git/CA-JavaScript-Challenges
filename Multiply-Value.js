//[Challenge] Canvas Ed - Multiply Value : https://edstem.org/courses/3790/challenges/6684

// Create a function which will take a string or number value and multiply it a specific number of times. 
// The first parameter is the value to be multiplied.
// The second parameter is the number of times the value should be multiplied.
// If the first parameter is not a number or string, the function should return null.
// If the second parameter is not a valid number the code should return null.
// E.g. multiplyValue(9,2), should return 18 (as 9*2 = 18)
// E.g. multiplyValue("[alright]",3), should return "[alright][alright][alright]"
// E.g. multiplyValue(5,["kanye west"]) == null

// Solution:

const multiplyValue = (value, times) => {
    if (typeof value === "number" && typeof times === "number"){
        let answer = value * times;
        return answer;
    } else if(typeof value === "string" && typeof times === "number"){
        answer = value.repeat(times);
        return answer;
    } else {
        return null;
    }
}

console.log(multiplyValue([9],2)) //null
console.log(multiplyValue(9,2)) // return 18 (as 9*2 = 18)
console.log(multiplyValue("[alright]", 3)) //return "[alright][alright][alright]"
console.log(multiplyValue(5,["kanye west"])) // null

// Methods:
    // typeof
    // repeat    
    