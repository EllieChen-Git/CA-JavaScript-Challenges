//[Challenge] 1115 Objects, Prototypes & Classes - JS Object: https://coderacademyedu.github.io/resources/unit_js_objects.html

// Challenge

// 1.	Assign a new empty object to a variable called me
let me = {};

// 2.	On the next line, add one key 'age' and set its value to your age
me.age = 100;

// 3.	On the next line, add one key 'current location' and set its value to your current location
me["currecnt_location"] = "Burwood";

// 4.	Use console.log to display the age and current location on screen
// console.log(me);

// 5.	Use code to add an array of hobbies to your me object
me["hobbies"] = ["coding", "watching youtube", "reading"];

// 6.	Use code to delete your age key
delete me.age;

// 7.	Iterate through me.hobbies and log each hobby to the screen
for (let hobby of me.hobbies){
    // console.log(hobby);
}

// Beast Mode

// 1.	Add another item to the end of the hobbies array
me.hobbies.push("cooking");

// 2.	Delete the first item in the hobbies array
me.hobbies.shift();

// 3.	Add a mother key, set its value to an empty object
me.mother = {};

// 4.	Add name, age and location keys to the mother object
me.mother.name = "May";
me.mother.age = 60;
me.mother.location = "Taiwan";

// 5.	Add a print_details function to the me object.
me.print_details = function(){};

// 6.	Call the function to log some details about yourself. I.e. me.print_details() should work
me.print_details = function(){console.log(me.hobbies);};
// me.print_details();

// 7.	Note the difference between calling me.print_details and me.print_details()

    
// Beast Mode++

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

// 1.	Use console.log and interpolation to display your campus' street and state from the coder_academy object
console.log(`${sydney_campus.street}, ${sydney_campus.state}`);

// 2.	If we use code to delete the state from your campus, will your log of the coder_academy object still work? I.e. did it copy each campus object or does it reference each campus object?

delete sydney_campus.state;
console.log(sydney_campus);
console.log(`${sydney_campus.street}, ${sydney_campus.state}`);

// 3.	Research: value vs reference (a common interview question)

// Refer to 'JavaScript - Reference vs Primitive Values/ Types': https://www.youtube.com/watch?v=9ooYYRLdg_g