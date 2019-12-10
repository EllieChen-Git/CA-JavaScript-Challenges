//[Challenge] 1210 Document Databases (Normalising vs Denormalising) - Mo Ch - Object Destructuring: https://coderacademy.instructure.com/courses/239/pages/document-databases-normalising-vs-denormalising?module_item_id=9458

// Core:
// (1) - Object Destructuring
// Declare a fat arrow function called mult() that will multiply values of the x, y, z fields of the passed object.

"use strict";

var obj = {
  x: 5,
  y: 20,
  z: 3
};

// Write mult() function here
let mult = () => {
  let {x, y, z} = obj;
  return x * y * z
};
console.log(mult(obj)); // 300

// (2) - Destructuring and Rest Operator
// Assign values to the a, b, c variables using destructuring and rest operator.

"use strict";

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

// Write code here
[a] = arr;
console.log(a); // 1
[a, b] = arr;
console.log(b); // 2
[a, b, ...c] = arr;
console.log(c); // [3, 4, 5, 6, 7]

    
    