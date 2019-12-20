// Class Components, State & Lifecycle Methods: https://coderacademy.instructure.com/courses/239/pages/class-components-state-and-lifecycle-methods?module_item_id=9465

// Core:
  // Create a function called sortByString.
  // This function should take an array and a string as input, and sorts the words in the array by the string.
  // You may receive an excess of letters

"use strict";

const arr = ["apple", "banana", "cherry", "date"];
const str = "dbca";

const arr1 = ["small", "big", "medium"];
const str1 = "sazymtb";

const arr2 = ["spoof", "floof", "loop"];
const str2 = "flats";


// Write function here
let sortByString = (arr, str) => {
  let letters = str.split("");   //turn str into an array with individual characters
  let newArr = [];
  for (let letter of letters){
    for (let element of arr ){
      if(element[0] === letter){  //if the 1st char of the arr element equals to the letter
        newArr.push(element);     //then push that element to the new arr
      }
    }
  }
  return newArr
}
console.log(sortByString(arr, str)); // ["date", "banana", "cherry", "apple"];
console.log(sortByString(arr1, str1)); // ["small", "medium", "big"];
console.log(sortByString(arr2, str2)); // ["floof", "loop", spoof"];