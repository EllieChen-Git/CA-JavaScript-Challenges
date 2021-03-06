[GitHub Link - javascript_methods_collection.md](https://github.com/EllieChen-Git/codewars/blob/master/javascript_methods_collection.md)

---

### Date

**.toUTCString()**: converts a date to a string, using the UTC time zone.

- Also refer here for extra info: https://stackoverflow.com/questions/5416920/timestamp-to-human-readable-format

```javascript
const event = new Date("14 Jun 2017 00:00:00 PDT");

console.log(event.toUTCString());
// expected output: Wed, 14 Jun 2017 07:00:00 GMT
```

---

### Number

**.toString**: returns a string representing the specified Number object.

**(numObj).toString([radix])** (how to convert number to different bases): radix => An integer in the range 2 through 36 specifying the base to use for representing numeric values.

```javascript
1234.toString(2) // binary: '10011010010'

1234.toString(16) // hex: '4d2'

1234.toString(10) // decimal: '1234'

```

**how to convert a number to its corresponding letter**

```javascript

> String.fromCharCode(65);
'A'
> String.fromCharCode(90);
'Z'
> String.fromCharCode(97);
'a'
> String.fromCharCode(122);
'z'

```

**how to convert a letter to its corresponding number**

```javascript
// we count from zero
"a".charCodeAt(0) - 97; //index '0' means it's a single character
//0
"b".charCodeAt(0) - 97;
//1
"z".charCodeAt(0) - 97;
//25
```

**.toFixed()**: formats a number using fixed-point notation.

```javascript
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

console.log(financial(123.456));
// expected output: "123.46"

console.log(financial(0.004));
// expected output: "0.00"

console.log(financial("1.23e+5"));
// expected output: "123000.00"
```

---

### String

**.parseFloat**: parses an argument and returns a floating point number.

**.parseInt()**: parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

**Generating the alphabet in JavaScript**

- https://codegolf.stackexchange.com/questions/71613/generating-the-alphabet-in-javascript

**.repeat**: constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

```javascript
var chorus = "Because I'm happy. ";

console.log('Chorus lyrics for "Happy": ' + chorus.repeat(3));
// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy."
```

**.split**: splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

```javascript
"TWO words".split(" ");
// [ 'TWO', 'words' ]     //split string into array of words

"TWO words".split("");
// [
// 'T', 'W', 'O',
// ' ', 'w', 'o',
// 'r', 'd', 's'
// ]                      //split string into array of characters

"TWO words".split();
// [ 'TWO words' ]        //turn the whole string into an array
```

**.charAt**: returns a new string consisting of the character at the index

```javascript
"TWO words".charAt(2);
//'O'
```

**.trim()**: removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
**.trimEnd()** / **trimRight()**: removes whitespace from the end of a string.
**.trimStart()** / **trimLeft()**: removes whitespace from the beginning of a string.

```javascript
var greeting = "   Hello world!   ";

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
```

**.toUpperCase**: returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

**.toLowerCase**: returns the calling string value converted to lower case.

**.substring**: returns the part of the string between the start and end indexes, or to the end of the string.

```javascript
var str = "Mozilla";

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```

**.replace**: returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

- Syntax: str.replace(regexp|substr, newSubstr|function)

```
var s = a.replace(b, '')
```

**.slice**: extracts a section of a string and returns it as a new string, without modifying the original string.

- ##### beginIndex
  The zero-based index at which to begin extraction. If negative, it is treated as strLength + beginIndex where strLength is the length of the string (for example, if beginIndex is -3 it is treated as strLength - 3). If beginIndex is greater than or equal to the length of the string, slice() returns an empty string.
- ##### endIndex(Optional):
  The zero-based index before which to end extraction. The character at this index will not be included. If endIndex is omitted, slice() extracts to the end of the string. If negative, it is treated as strLength + endIndex where strLength is the length of the string (for example, if endIndex is -3 it is treated as strLength - 3).

```javascript
//when index is 0 or positive, .slice & .substring act the same!
> let a = "doggo"
> a.slice(0);
'doggo'
> a.substring(0);
'doggo'
> a.slice(1);
'oggo'
> a.substring(1);
'oggo'
> a.slice(2);
'ggo'
> a.substring(2);
'ggo'

//when index is negative, .slice & .substring act differently!
> a.slice(-1);
'o'
> a.slice(-2);
'go'
> a.substring(-1);
'doggo'
> a.substring(-2);
'doggo'

//.slice & .substring can be used to add a character inside a string
let append0 = function(y){
    if(y[3] === " "){
        let yWith0 = y.slice(0, 3) + "0" + y.slice(3);
        // let yWith0 = y.substring(0, 3) + "0" + y.substring(3);
        // can achieve the same effect with .substring
        return yWith0;
    }
}

append0("7:5 AM"); // return '7:50 AM'
```

##### How to reverse a word

- Use .split("") to separeate all characters into an array
- Then use .reverse() to rever the order of teh array
- Lastly, use .join(" ") to join back the word

##### How to capitalise a word

```javascript
let firstChar = i.charAt(0).toUpperCase();
//upcase the first character of a word
let rest = i.substring(1).toLowerCase();
//downcase the remaining character of a word
//.substring: returns the part of the string between the start index to the end of the string.
let word = firstChar + rest;
```

**.match**: retrieves the matches when matching a string against a regular expression (will return an array).

```javascript
let Boulevards = [
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard la Madeleine"
];

let de = Boulevards.filter(i => i.match("de"));

console.log(de);

// expected output:
// [ 'Boulevard de la Madeleine',
//   'Boulevard de Magenta',
//   'Boulevard Marguerite-de-Rochechouart',
//   'Boulevard la Madeleine' ]
```

---

### Array

**You can access element in array with negative index in JavaScript**: https://medium.com/uncaught-exception/javascript-array-negative-index-using-proxies-ed096dc84416

- The way to work around is to use 'array[array.length -1]', instead of 'array[-1]'

**How to create a new array from an array or a string**

- **Spread syntax** allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```javascript
let a = [1, 2, 2, 3, 3]
[...a] // expected: [ 1, 2, 2, 3, 3 ]

let b = "AAAABBBCCDAABBB"
[...b] //expected: [ 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'D', 'A', 'A', 'B', 'B', 'B' ]


```

**slice()**: returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

```javascript
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
```

**.splice()**: changes the contents of an array by removing existing elements and/or adding new elements.

```javascript
// Remove 1 element from index 3
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);
// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]

// Remove 0 (zero) elements from index 2, and insert "drum"
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

**How to remove an element from**: https://love2dev.com/blog/javascript-remove-from-array/

- **Array.splice()**: If you know the value you want to remove from an array you can use the splice method. First you must identify the index of the target item. You then use the index as the start element and remove just one element.

**Array.from()**: creates a new, shallow-copied Array instance from an array-like or iterable object.

```javascript
console.log(Array.from("foo"));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

**.array.forEach**: executes a provided function once for each array element.

```javascript
const array1 = ["a", "b", "c"];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

**.join**: creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

```javascript
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join(" "));
// expected output: "Fire Air Water"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"
```

**.map**: creates a new array with **the results** of calling a provided function on **every element** in the calling array.

```javascript
const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

**.find**: returns the value of the **first element** in the array that satisfies the provided testing function. Otherwise undefined is returned.

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

**.indexOf**: returns the first index at which a given element can be found in the array, or -1 if it is not present.

```javascript
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// expected output: -1
```

**.findIndex()**: takes a callback function, and returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test.

```javascript
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); // 3
console.log(fruits[index]); // blueberries
```

**.lastIndexOf**: takes an argument, and returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

```javascript
var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
```

**.filter**: creates a new array with **all elements that pass the test** implemented by the provided function.
array.filter(Boolean) => filter all the "true" elements
https://devdocs.io/javascript/global_objects/array/filter

```javascript
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

**.includes**: determines whether an array includes a certain element, returning true or false as appropriate.

```javascript
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("at"));
// expected output: false
```

**.sort**: sorts the elements of an array in place and returns the array.

- Unable to sort numbers correctly (The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.). For more details, see https://devdocs.io/javascript/global_objects/array/sort

```javascript
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

##### Advanced sorting: .sort(function (a, b) {})

```javascript
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 }
];

// sort by value
items.sort(function(a, b) {
  return a.value - b.value;
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
```

**How to return unique elements in array**

Ref: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates

**Set**: object lets you store unique values of any type, whether primitive values or object references.
https://devdocs.io/javascript/global_objects/set

```javascript
//Using 'Set' & 'Spread' operator
let unique = [...new Set(array)];
return unique;

//Using ES6 Syntax: filter & indexOf

let listTwo = list.filter(
  (item, index, arrayRef) => arrayRef.indexOf(index) == item
);

//array reference (in this case "list")
```

**How to count elements in array (1)**

```javascript
let i = 0;
for (let element of array) {
  if (element === true) {
    i++;
  }
}
console.log(i);

let count = 0;
for (let i = 0; i < array.length; ++i) {
  if (array[i] == true) count++;
}
console.log(count);
```

**How to count elements in array & save result as an object (2)**

```javascript
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck"
];

//[Solution 1]
var countData = data.reduce((allData, element) => {
  if (element in allData) {
    allData[element]++;
  } else {
    allData[element] = 1;
  }
  return allData;
}, {});

//   console.log(countData);

//[Solution 2]
let initialValue = {};
let reducer = function(count, element) {
  if (!count[element]) {
    count[element] = 1;
  } else {
    count[element] = count[element] + 1;
  }
  return count;
};
let result = data.reduce(reducer, initialValue);
//   console.log(result);

//[Solution 3]
let dataCount = {},
  index,
  instance;
for (index = 0; index < data.length; index++) {
  instance = data[index];
  if (typeof dataCount[instance] === "undefined") {
    //first time counting a instance, the datatype of it is 'undefined'
    dataCount[instance] = 1; //so we set the initial count equals to '1' here
  } else {
    dataCount[instance]++;
  }
}
//   console.log(dataCount);
```

**How to add up all elements in array**

```javascript
let sum = array.reduce((a, b) => a + b);
```

**.some()**: tests whether at least one element in the array passes the test implemented by the provided function.

- Note: This method returns false for any condition put on an empty array.

**.every()**: method tests whether all elements in the array pass the test implemented by the provided function.

- Note: This method returns true for any condition put on an empty array.

```javascript
const peopleTwo = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];

let olderThan19 = peopleTwo.some(i => 2019 - i.year > 19);
console.log(olderThan19); //true

let everyoneOlderThan19 = peopleTwo.every(i => 2019 - i.year > 19);
console.log(everyoneOlderThan19); //false

//Check if two arrays share common elements
const answer = arrOne.every(x => arrTwo.includes(x));
```

---

### Object

**.Object.keys()**: returns an array of a given object's own property names, in the same order as we get with a normal loop.

```javascript
const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

**.Object.values()**: returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

```javascript
const object1 = {
  a: "somestring",
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]
```

**How to find a key by its value**:

```javascript
obj = { "21": 2, "24": 1, "46": 3, "56": 3, "75": 3, "96": 3 };

const x = Object.keys(obj).find(key => obj[key] === 1);
```

**.delete**: removes a property from an object; if no more references to the same property are held, it is eventually released automatically.

```javascript
var Employee = {
  firstname: "John",
  lastname: "Doe"
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined
```

---

### Values

**typeof**: returns a string indicating the type of the unevaluated operand.

```javascript
console.log(typeof 42);
// expected output: "number"

console.log(typeof "blubber");
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";
```

**instanceof**: tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
```

**isNaN()**: determines whether a value is NaN (return true ) or not (return false). Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.

- Why we need isNaN function: because both NaN == NaN and NaN === NaN evaluate to false.

```javascript
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// expected output: 3140
```

**Number.isNaN()**: a more robust version of the original, global isNaN() function. true if the given value is NaN and its type is Number; otherwise, false.

```javascript
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// expected output: "NaN"

console.log(typeOfNaN(NaN));
// expected output: "Number NaN"

Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true: (0/0) is NaN

// e.g. these would have been true with global isNaN()
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// These all return false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

---

### JSON

Refer here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

##### JSON.parse()

Parse a string as JSON, optionally transform the produced value and its properties, and return the value. Any violations of the JSON syntax, including those pertaining to the differences between JavaScript and JSON, cause a SyntaxError to be thrown. The reviver option allows for interpreting what the replacer has used to stand in for other datatypes.

##### JSON.stringify()

Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner. By default, all instances of undefined is replaced with null, and other unsupported native data types are censored. The replacer option allows for specifying other behavior.
Specifications

```javascript
//Turn a JS object into JSON:
lunch = { food: "Pork Bun Roll", price: 10 };
lunchJson = JSON.stringify(lunch);
//'{"food":"Pork Bun Roll","price":10}'

// Turn JSON into a JS object:
lunchJson = '{"food":"Pork Bun Roll","price":10}';
lunch = JSON.parse(lunchJson);
//{ food: 'Pork Bun Roll', price: 10 };
```

##### How to make a deep copy

```javascript
let a = ["ants"];
let b = JSON.parse(JSON.stringify(a)); //how to make a deep copy
// let b = [...a] //shallow copy by 'speard operator'. shallow copy only copies the first level, not the deeper level
b.push("in my pants");
console.log(a);
// return [ 'ants' ]
console.log(b);
// return [ 'ants', 'in my pants' ]
```

---

### Regex

Ref: https://www.ntu.edu.sg/home/ehchua/programming/howto/Regexe.html
Ref: https://regexr.com/

- Vowels: /[aeiou]/
- 'g': means global search
- 'i': means case-insensitive
- '\d': match any one digit Digits are [0-9]
- '\w': means ANY ONE word character. For ASCII, word characters are [a-zA-Z0-9_]
- {5,}: means 5 or more
- '/\w{5,}/': a word with 5 or more characters
- |: or
- '-'(dash): denotes range

- . (dot): ANY ONE character except line breaks.
- \* (Quantifier): Match 0 or more of the preceding token.
- (._): same as ._ but will add that to a capture group.
- \$1, \$2: retrieve the back references in sequential order. values of captured groups by index. \$1 is a first - captured group, and \$2 is a second captured group.
- [...]: ANY ONE of the character, e.g., [aeiou] matches "a", "e", "i", "o" or "u".

```javascript
let vowels = x.match(/[aeiou]/gi);

a.match(/\d/); // (/\d/): match any one digit Digits are [0-9]

string.replace(/\w{5,}/g, function(w))
  // (\w): means ANY ONE word character. For ASCII, word characters are [a-zA-Z0-9_]
  // {5,}: means 5 or more

.replace(/(.*),(.*)$/, "$1 &$2"); //replace the last comma with '&'

const arr = str.replace(/_|-/g, " ").split(" "); //replace all '-' or '_' with a space
const arr = str.replace(/[_-]/g, " ").split(" "); //replace all '-' or '_' with a space

.replace(/[W-Z]/g, 9); // replace W, X, Y, Z (anyone[], dash range) with 9
```

---

### JS Concept

**By value vs By Reference:**

- https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
- https://www.youtube.com/watch?v=9ooYYRLdg_g

**Primitives/Primitive Values/Primitive Types (6 datatypes that are passed by value)**:

1. Boolean — true or false
2. Null — no value
3. Undefined — a declared variable but hasn’t been given a value
4. Number — integers, floats, etc
5. String — an array of characters i.e. words
6. Symbol [ES6] — a unique value that's not equal to any other value

- A primitive is not an object and has no methods of its own.
- All primitives are immutable.
- Primitive values are stored in 'STACK'.
- If a primitive type is assigned to a variable, we can think of that variable as 'containing' the primitive value. When we assign these variables to other variables using =, we copy the value to the new variable. They are 'copied by value'. => Changing one does not change the other.

```javascript
let name = "Max";
console.log(name);
//Max
let secondName = name;
console.log(secondName);
//Max
name = "Chris";
//'Chris'
console.log(secondName);
//Max
console.log(name);
//Chris
```

**Objects/Reference Values (3 datatypes that are passed by reference)**:

1. Object
2. Array
3. Function

- Reference values are stored in 'HEAP'.
- Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
- Objects are copied by reference instead of by value.
