
[GitHub Link - javascript_methods_collection.md](https://github.com/EllieChen-Git/codewars/blob/master/javascript_methods_collection.md)

---
### Number

__.toString__: returns a string representing the specified Number object.

__how to convert a number to its corresponding letter__
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


---
### String

__.split__: splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

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

__.charAt__:  returns a new string consisting of the character at the index

```javascript
"TWO words".charAt(2)
//'O'

```


__how to convert a letter to its corresponding number__

```javascript
// we count from zero
 "a".charCodeAt(0) - 97   //index '0' means it's a single character
//0
 "b".charCodeAt(0) - 97
//1
 "z".charCodeAt(0) - 97
//25
```

__.toUpperCase__: returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

__.toLowerCase__: returns the calling string value converted to lower case.


__.substring__: returns the part of the string between the start and end indexes, or to the end of the string.
```javascript
var str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```

__How to capitalise a word__

```javascript
let firstChar = i.charAt(0).toUpperCase();
//upcase the first character of a word
let rest = i.substring(1).toLowerCase();
//downcase the remaining character of a word
//.substring: returns the part of the string between the start index to the end of the string.
let word = firstChar + rest;
````
__.parseInt()__: parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

---

### Array

__.join__: creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

```javascript
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join(' '));
// expected output: "Fire Air Water"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

```


__.filter__: creates a new array with all elements that pass the test implemented by the provided function.
    array.filter(Boolean) => filter all the "true" elements
    https://devdocs.io/javascript/global_objects/array/filter

```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

__.includes__: determines whether an array includes a certain element, returning true or false as appropriate.
```javascript
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('at'));
// expected output: false

```

__.sort__: sorts the elements of an array in place and returns the array. 
- Unable to sort numbers correctly (The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.). See https://devdocs.io/javascript/global_objects/array/sort for more details.

```javascript
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

```


__How to count elements in array (1)__

```javascript
    let i = 0;
    for (let element of array) {
        if (element === true){
            i++;
        }
    }

    console.log(i)
```

__How to count elements in array (2)__

```javascript
let count = 0;
for(let i = 0; i < array.length; ++i){
    if(array[i] == true)
        count++;
}
```

__How to add up all elements in array__
```javascript
let sum = array.reduce((a,b) => a+b);
```

---

### Object

__.delete__ : removes a property from an object; if no more references to the same property are held, it is eventually released automatically.

```javascript
var Employee = {
  firstname: "John",
  lastname: "Doe"
}

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined

```

---

### Values

__typeof__:  returns a string indicating the type of the unevaluated operand.

```javascript
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof declaredButUndefinedVariable);
// expected output: "undefined";
```

__instanceof__:  tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

```

__isNaN()__: determines whether a value is NaN (return true ) or not (return false). Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN(), as defined in ECMAScript 2015.

- Why we need isNaN function: because both NaN == NaN and NaN === NaN evaluate to false. 


```javascript
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}

console.log(milliseconds('100F'));
// expected output: "Not a Number!"

console.log(milliseconds('0.0314E+2'));
// expected output: 3140
```

__Number.isNaN()__:   a more robust version of the original, global isNaN() function. true if the given value is NaN and its type is Number; otherwise, false.

```javascript
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}

console.log(typeOfNaN('100F'));
// expected output: "NaN"

console.log(typeOfNaN(NaN));
// expected output: "Number NaN"


Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true: (0/0) is NaN

// e.g. these would have been true with global isNaN()
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// These all return false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
```

---

### JS Concept

__By value vs By Reference:__
- https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
- https://www.youtube.com/watch?v=9ooYYRLdg_g

__Primitives/Primitive Values/Primitive Types (6 datatypes that are passed by value)__: 

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
name = "Chris"
//'Chris'
console.log(secondName);
//Max
console.log(name);
//Chris
````    

__Objects/Reference Values (3 datatypes that are passed by reference)__:

1. Object
2. Array
3. Function

- Reference values are stored in 'HEAP'.
- Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
- Objects are copied by reference instead of by value.
