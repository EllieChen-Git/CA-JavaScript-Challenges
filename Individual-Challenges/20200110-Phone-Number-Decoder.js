//[Challenge] Redux Intro - Mo Ch - Phone Number Decoder: https://coderacademy.instructure.com/courses/239/pages/redux-intro?module_item_id=9469

// Phone Number Decoder
// Create a function that converts a phone number with letters to one with only numbers.
// All phone numbers will contain letters or capital letters.
// All phone numbers will be in the following format XXX-XXX-XXXX or (XXX)XXX-XXXX

"use strict";

let phoneNum = "123-647-EYES";
let phoneNum1 = "(653)TRY-THIS";
let phoneNum2 = "435-224-7613";

// My solution
// Methods:Regex: '[]' (any one), '-' (range), 'g' (globally)
const textToNum = num => {
  let obj = {
    "/[A-C]/g": 2
    "/[A-C]/g": 2,
    "/[D-F]/g": 3,
    "/[G-I]/g": 4,
    "/[J-L]/g": 5,
    "/[M-O]/g": 6,
    "/[P-S]/g": 7,
    "/[T-V]/g": 8,
    "/[W-Z]/g": 9
  };

  // let i = /[A-C]/g;
  // return num
  //   .replace(/[A-C]/g, 2)
  //   .replace(/[D-F]/g, 3)
  //   .replace(/[G-I]/g, 4)
  //   .replace(/[J-L]/g, 5)
  //   .replace(/[M-O]/g, 6)
  //   .replace(/[P-S]/g, 7)
  //   .replace(/[T-V]/g, 8)
  //   .replace(/[W-Z]/g, 9);
};

console.log(textToNum(phoneNum)); // "123-647-3937";
console.log(textToNum(phoneNum1)); // "(653)879-8447";
console.log(textToNum(phoneNum2)); // "435-224-7613";

// Marks's solution
// const letterToNumberMap = {
//   A: 2,
//   B: 2,
//   C: 2,
//   D: 3,
//   E: 3,
//   F: 3,
//   G: 4,
//   H: 4,
//   I: 4,
//   J: 5,
//   K: 5,
//   L: 5,
//   M: 6,
//   N: 6,
//   O: 6,
//   P: 7,
//   Q: 7,
//   R: 7,
//   S: 7,
//   T: 8,
//   U: 8,
//   V: 8,
//   W: 9,
//   X: 9,
//   Y: 9,
//   Z: 9
// };

// function textToNum(phoneNum) {
//   let result = "";
//   for (let index in phoneNum) {
//     if (/[A-Z]/.test(phoneNum[index])) {
//       result += letterToNumberMap[phoneNum[index]];
//     } else {
//       result += phoneNum[index];
//     }
//   }
//   return result;
// }
