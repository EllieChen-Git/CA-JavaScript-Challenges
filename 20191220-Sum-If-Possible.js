//[Challenge] 1220 JSX Deep Dive & Conditional Rendering: https://coderacademy.instructure.com/courses/239/pages/react-and-jsx-intro?module_item_id=9463

// Core:
  // Create a function called sumIfPossible.
  // This function should take an array as input, and sum the values together if possible.
  // If the variables are not the correct data type, skip over it, but keep track of how many skips have occured

"use strict";

const arr = [12, 43, 73, 2, 98, 4, -4, 56];
const arr1 = ["number", 234, 34, "string", -9];
const arr2 = [true, false, null, 0, "", {}];

// Write function here

let sumIfPossible = (x) => {
  let nums = x.filter( i => typeof(i) === "number");
  let sum = nums.reduce((a, b) => a + b);
  let nonNums = x.filter( i => typeof(i) !== "number");
  let count = nonNums.length;
 return `{sum: ${sum}, skip: ${count}}`;
}

console.log(sumIfPossible(arr)); // {sum: 284, skip: 0}
console.log(sumIfPossible(arr1)); // {sum: 259, skip: 2}
console.log(sumIfPossible(arr2)); // {sum: 0, skip: 5}

    
    