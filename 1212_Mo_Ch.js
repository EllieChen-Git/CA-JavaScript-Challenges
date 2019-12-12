//[Challenge] 1212 Express Middleware Deep Dive - Mo: https://coderacademy.instructure.com/courses/239/pages/express-middleware-deep-dive?module_item_id=9460

// Core:
// (1) - Spread Operator
// Use Spread Operator to construct arr variable.

"use strict";
var a, b, c, d, arr;
a = [1, 2];
b = [4, 5];
c = [8, 9, 10];
d = 11;

// Write code here
arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

// console.log(arr);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]


// (2) - Copy Array
// Create copy of the a array.
"use strict";
var a = [1, 2, 3];
var b;

//Copy array here
b = JSON.parse(JSON.stringify(a));

// console.log(b);
b.push("newElement");

console.log(a); // [1, 2, 3]

console.log(b); // [1, 2, 3, "newElement"]
    
    