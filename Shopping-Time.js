//[Challenge] {canvas_module_date} Uncontrolled vs Controlled Elements, 'this' Keyword & Lifting State - Morning Challenge: https://coderacademy.instructure.com/courses/239/pages/uncontrolled-vs-controlled-elements-this-keyword-and-lifting-state?module_item_id=9466

// Core:
// Shopping Time!
// You are given a list of grocery items and their prices in parantheses.
// Write a function that will return an array of the prices only

"use strict";

let list = [
  "ice cream ($5.99)",
  "banana ($0.20)",
  "sandwich ($8.50)",
  "soup ($1.99)"
];
let list1 = [];
let list2 = [
  "weet-bix ($4.99)",
  "milk ($3.50)",
  "bowl ($9.99)",
  "spoon ($4.95)",
  "smile ($0.00)"
];

// Write function here

let getPrices = list => {
  let newList = [];
  for (let item of list) {
    let price = item.slice(-5, -1);
    newList.push(price);
  }
  return newList;
};

console.log(getPrices(list)); // [5.99, 0.2, 8.50, 1.99];
console.log(getPrices(list1)); // [];
console.log(getPrices(list2)); // [4.99, 3.50, 9.99, 4.95, 0.0];

// Methods:
// **.slice**: extracts a section of a string and returns it as a new string, without modifying the original string.

// - ##### beginIndex
//   The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.
// - ##### endIndex(Optional):
//   The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).
