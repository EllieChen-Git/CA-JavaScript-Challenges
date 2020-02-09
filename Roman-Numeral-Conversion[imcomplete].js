//[Challenge] {canvas_module_date} Redux Async Action Creators & Redux Form - Roman Numeral Conversion: {challenge_link}

// Roman Numeral Conversion
// Create a function that will either receive a string or integer as input.
// Given a string, return the integer value of the roman numeral
// Given an integer, return the equivalent roman numeral
// Roman Numeral values:
// I ➞ 1
// V ➞ 5
// X ➞ 10
// L ➞ 50
// C ➞ 100
// D ➞ 500
// M ➞ 1000

"use strict";

let input = "IV";
let input1 = 45;
let input2 = "CLXXXII";
let input3 = 1666;

// Write function here

const romanNumerals = input => {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  if (typeof input === "string") {
    for (let i in roman) {
      let number = 0;
      // while (input !== i) {
      while (input.includes(i)) {
        number += roman[i];
        input = input.replace(i, "");
        console.log(i);
        console.log(number);
        // console.log(input);
      }
      return number;
    }
  } else {
    let string = "";
    for (let i in roman) {
      while (input >= roman[i]) {
        string += i;
        input -= roman[i];
      }
    }
    return string;
  }
};

// console.log(romanNumerals(input1)); // "XLV"; 45
// console.log(romanNumerals(input3)); // "MDCLXVI"; 1666
console.log(romanNumerals(input)); // 4;
console.log(romanNumerals(input2)); // 182;

// Pseudocode:

// Solution:

// Methods:
