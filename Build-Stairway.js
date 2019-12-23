//[Challenge] {canvas_module_date} Single Page Apps & React Router - Morning Challenge: https://coderacademy.instructure.com/courses/239/pages/single-page-apps-and-react-router?module_item_id=9467

// Stairway to Michael Beaven!
// Wow, what a great cricketer. Create a function called buildStairway.
// This function will take a height and a type of stair as input, and will return the stairway
// If the height is zero or less than zero, return an empty array

"use strict";

const height = 3;
const type = "#";

const height1 = 5;
const type1 = "*";

const height2 = 0;
const type2 = "$";

const height3 = -2;
const type3 = "A";

// Write function here

function buildStairway(height, type) {
  let arr = [];
  if (height <= 0) {
    return [];
  } else {
    for (let i = 0; i < height; i++) {
      arr.push(type);
    }
    // for (let j = 0; j < arr.length; j++) {

    //   console.log(newArr);
    // }
    let newArr = arr;
    newArr[newArr.length - 1] = "_";

    return `
    ${newArr}
    ${arr}`;
  }
}

console.log(buildStairway(height, type));
// ["#", "_", "_"],
// ["#", "#", "_"],
// ["#", "#", "#"];

console.log(buildStairway(height1, type1));
// ["*", "_", "_", "-", "-"],
// ["*", "*", "_", "-", "-"],
// ["*", "*", "*", "-", "-"],
// ["*", "*", "*", "*", "-"],
// ["*", "*", "*", "*", "*"];

// console.log(buildStairway(height2, type2));
// [];

// console.log(buildStairway(height3, type3));
// []

// Methods:
