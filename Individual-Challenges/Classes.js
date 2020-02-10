//[Challenge] 1115 Objects, Prototypes & Classes -  Classes: https://coderacademyedu.github.io/resources/unit_classes.html

// Beast Mode 1. Create a Walk class with properties: location and distance
class Walk {
    constructor(location, distance){
        this.location = location;
        this.distance = distance;
// Beast Mode 3. Introduce a timestamp to each walk, automatically add the current time when you instantiate a walk
        this.timestamp = new Date().toUTCString();
            }
}

// Challenge 1. Create a Dog class. Each dog should have a name and a location.
class Dog {
    constructor(name, location){
        this.name = name;
        this.location = location;
        this.walkingRecord = [];
        this.totalWalks = 0;
    }
// Challenge 2. Add a speak method that logs "Woof! my name is {name}"
    speak(){
        return `Woof! my name is ${this.name}`;
    }
// Challenge 3. Add a walk method that accepts two arguments: location (string) and distance (integer)
    walk(location, distance){
        // this.walkingRecord.push({ location: location, distance: distance }); //code before class Walk
        this.totalWalks += distance;

        
// Beast Mode 2. Update your Dog class: when the walk method is called, use this new Walk class to create a walk
        let walk = new Walk(location, distance);
        this.walkingRecord.push(walk);
    }
// Challenge 4. Add a display_walks method that console.logs all of the dog's walks
    displayWalks(){
        console.log(this.walkingRecord);
    }

// Challenge 5. Add a total_distance method that returns the total distance of all the walks
    totalDistance(){
        console.log(`I have walked ${this.totalWalks} km`);
    } 

}
let dog1 = new Dog("Hunter", "Cabramatta")
// let dog2 = new Dog("Ruben", "Ashfield")
// console.log(dog1);
// console.log(dog2);
// console.log(dog1.speak());
dog1.walk("Burwood", 5);
dog1.walk("North Sydney", 15);
dog1.displayWalks();
dog1.totalDistance();
// console.log(dog1);
// console.log(dog2);

// Challenge 6. Research: what's the difference between console.log and return? Make sure you have a solid understanding

// Beast Mode++
// 1. Create a basic GUI in the browser to interact with your classes. Use buttons, prompts and lists to create and display dogs (view example).
// 2. Add walks to the GUI. I.e. add a `New Walk` button to each dog and display their walks under their name.





// =================OLD ONE==================

// Concept: When we're writing code we refer to the things an object has as attributes (name, location) and the things an object does (drink, greet) as methods.

// Warm up: Take a look at the following list, can you identify which are attributes and which are methods?
// 1. star_sign
    // attribute
// 2. write_code
    // method
// 3. date_of_birth
    // attribute
// 4. clothes
    // attribute


// Challenge: Build a Cat class.
// 1. Each cat should have a name
// 2. Implement a speak method to say meow.
// 3. Add each cat's name to the speak method (Pixie says meow).
    
class Cat {
    constructor(name){
        this.name = name;
    }
    speak() {
        return `${this.name} says meow`;
    }
}

let cat1 = new Cat("Pixie");
let cat2 = new Cat("Rebun");
// console.log(cat1.speak());
// console.log(cat2.speak());


// convert code from Ruby to JavaScript
/*
class Dog
  def initialize(dog_name, dog_age)
    @name = dog_name
    @age = dog_age
    puts "I've been initialized!"
  end
  def speak
    puts "#{@name} says woof! I am #{@age} years old."
  end
end

doggo = Dog.new('Rover', 2)
doggo.speak
pupper = Dog.new('Lassie', 5)
pupper.speak
*/

// class Dog {
//     constructor(name, age, location){
//         this.name = name;
//         this.age = age;
//         this.location = location;
//         // console.log("I've been initialized!");
//         this.n = 1;
//     }
//     speak(){
//         return `${this.name} says woof! I am ${this.age} years old`;
//     }
//     walk(){
//         // console.log(`I have been for ${this.n} walks today`);
//         this.n++;
//     }
// }


//     let doggo = new Dog("Rover", 2, "Brisbane")
//     let pupper = new Dog("Lassie", 5)
    // console.log(doggo);
    // console.log(pupper);
    // console.log(doggo.speak());
    // console.log(pupper.speak());

// 1. We've got name and age, let's give each dog a location too. Test your location works by printing the dog's location.
// doggo = Dog.new('Rover', 2, 'Brisbane')
// puts doggo.location # -> Brisbane (You might get a no method error, remember attr_accessor?)

    // console.log(doggo.location);

// 2. Create a walk method. This should say "I have been for X walks.". Every time you call walk, the number should increase by one E.g:
// doggo = Dog.new(...)
// doggo.walk # -> I have been for 1 walks today
// doggo.walk # -> I have been for 2 walks today

    // console.log(doggo.walk());
    // console.log(doggo.walk());

    
    