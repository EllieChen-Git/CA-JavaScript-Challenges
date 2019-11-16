//[Challenge] 1113 JavaScript Intro - Ruby vs JS: https://coderacademyedu.github.io/resources/unit_ruby_vs_js.html

// 1. Create a new variable called user, set the value to: tom
// 2. Write an if statement: if the user's name is tom, say 'Hello Tom'
// 3. Add an else condition: say 'Hello someone other than Tom'
let user = "ellie";
if (user === "tom"){
    console.log("Hello Tom")
} else {
    console.log("Hello someone other than Tom")
};

// 4. Add a new variable called age, set the value to: 18
// 5. If the user is 18, say 'welcome to the casino!'

let age = 18;
if (age === 18){
    console.log("welcome to the casino!")
};

// (Browser ONLY)
// 6. Research 'prompt'. Use it in your code to ask the user for their age.
// 7. If the user is less than 18 years old, use the alert method to deny entry.

let age = prompt("What is your age");
if (age < 18){
    console.log("Entry denied")
};


// Beast Mode
// 1. Assign an empty array to a students variable.
// 2. Use the push method to add a student called Sarah

let students = [];
students.push("Sarah");
console.log(students)

// 3. Use prompt to ask the user for their name, add it to the array.
let students = [];
let name = prompt("Whats your name?");
students.push(name);
console.log(students)

// 4. Use a loop to ask the user for 3 names, add them all to the array.
// 5. Loop through the array and use the alert method to read each user back to the user.
let count = 3;
let students = [];
while (count > 0) {
    let name = prompt("Whats your name?");
    students.push(name);
    count--;
};
alert(students)

// Beast Mode++
// 1. Store hashes in your students array
// 2. Each student should have a name and age property.
let students = [];
students.push({Ellie: 100});
students.push({Ricky: 1});
students.push({Angel: 5});
console.log(students);
