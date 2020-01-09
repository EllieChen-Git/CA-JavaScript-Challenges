//[Challenge] React Testing With Jest & Enzyme - Advanced Array Sort: https://coderacademy.instructure.com/courses/239/pages/react-testing-with-jest-and-enzyme?module_item_id=9471

// Advanced Array Sort
// Create a function that will take in an array containing either numbers or strings as an argument.
// The function should return an array with the items of the original array stored in subarrays.
// Items of the same value should be in the same subarray

"use strict";

let arr = [2, 1, 2, 1];
let arr1 = [5, 4, 5, 5, 4, 3];
let arr2 = ["b", "a", "b", "a", "c"];
let arr3 = ["z", 6, "z", 2, 3, "a", 6, 6, "a", "z", "z"];

// Write function here

const arraySort = x => {
  const sort = x.sort();
  return sort.map(x => [x]);
};

console.log(arraySort(arr)); // [[2, 2], [1, 1]];
console.log(arraySort(arr1)); // [[5, 5, 5], [4, 4], [3]];
console.log(arraySort(arr2)); // [["b", "b"], ["a", "a"], ["c"]];
console.log(arraySort(arr3)); // [["z", "z", "z", "z"], [6, 6, 6], [2], [3], ["a", "a"]];

// Pseudocode:

// Solution:

// Methods:
