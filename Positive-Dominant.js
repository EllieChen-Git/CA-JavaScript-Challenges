//[Challenge] {canvas_module_date} Connecting React & Express - Morning Challenge: https://coderacademy.instructure.com/courses/239/pages/connecting-react-and-express?module_item_id=9468

// Positive Dominant
// An array is positive dominant if there are more unique positive numbers than there are unique negative numbers
// Write a function that will return a Boolean of whether or not the array is positive dominant

"use strict";

let arr = [1, 1, 1, 1, -3, -6];
let arr1 = [6, -1, -1, 34, 3, 6];
let arr2 = [23, 7, -2, -23, -3, 28];

// Write function here

function positiveDominant(array) {
  let uniqueValues = [...new Set(array)]; //Use 'set' and 'spread operator' to return a new array with unique values
  let positives = uniqueValues.filter(x => x > 0); //Use 'filter' to filter out positive numbers
  let negatives = uniqueValues.filter(x => x < 0); //Use 'filter' to filter out negative numbers
  return positives.length > negatives.length; //If there are more positives than negatives, then true
}

console.log(positiveDominant(arr)); // false;
console.log(positiveDominant(arr1)); // true;
console.log(positiveDominant(arr2)); // false;
