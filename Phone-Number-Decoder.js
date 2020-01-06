//[Challenge] Redux Intro - Mo Ch - Phone Number Decoder: https://coderacademy.instructure.com/courses/239/pages/redux-intro?module_item_id=9469

// Phone Number Decoder
// Create a function that converts a phone number with letters to one with only numbers.
// All phone numbers will contain letters or capital letters.
// All phone numbers will be in the following format XXX-XXX-XXXX or (XXX)XXX-XXXX

"use strict";

let phoneNum = "123-647-EYES";
let phoneNum1 = "(653)TRY-THIS";
let phoneNum2 = "435-224-7613";

// Write function here

const textToNum = num => {
  return num
    .replace(/[A-C]/g, 2)
    .replace(/[D-F]/g, 3)
    .replace(/[G-I]/g, 4)
    .replace(/[J-L]/g, 5)
    .replace(/[M-O]/g, 6)
    .replace(/[P-S]/g, 7)
    .replace(/[T-V]/g, 8)
    .replace(/[W-Z]/g, 9);
};

console.log(textToNum(phoneNum)); // "123-647-3937";
console.log(textToNum(phoneNum1)); // "(653)879-8447";
console.log(textToNum(phoneNum2)); // "435-224-7613";

// Methods:
// Regex: '[]' (any one), '-' (range), 'g' (globally)
