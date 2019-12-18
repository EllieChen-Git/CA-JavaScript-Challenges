//[Challenge] 1217 Passport, JWT & OAuth - Mo Ch - Object Destructuring: https://coderacademy.instructure.com/courses/239/pages/passport-jwt-and-oauth?module_item_id=9462

// Core:
// (1) - Object Destructuring
// Create a fat arrow function called personInfo() that will destructure each person object.
// If object is missing postsQuantity field, it should get a default value of 0.


"use strict";

var person1 = {
  name: "Mike",
  info: {
    country: "Spain",
    age: 23
  },
  postsQuantity: 100
};

var person2 = {
  name: "Alice",
  info: {
    country: "Italy",
    age: 25
  }
};

// Write function here
let personInfo = (x) => {
  let { name, info, postsQuantity = 0} = x;
  return `n: ${name}, c: ${info["country"]}, a: ${info.age}, p: ${postsQuantity}`;
};

// console.log(personInfo(person1)); // {n: "Mike", c: "Spain", a: 23, p: 100}
// console.log(personInfo(person2));// {n: "Alice", c: "Italy", a: 25, p: 0}


// (2) - Swap values of the two variables
// Swap values of the a and b, without creating a new variable


"use strict";

var a = "first";
var b = "second";

// Write code here

// Solution 1: with a 3rd variable
  // let c = "dunno"
  // c = a;
  // a = b;
  // b = c;

// Solution 2: destructuring - without a new variable
[a, b] = [b, a]

console.log(a, b);// second first

// Refer here for detailed explantion: https://medium.com/better-programming/how-swap-two-values-without-temporary-variables-using-javascript-8bb28f96b5f6

    
    