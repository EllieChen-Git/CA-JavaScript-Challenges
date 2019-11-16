//[Challenge] 1115 Objects, Prototypes & Classes  - Capitalise the Front: https://edstem.org/courses/3790/challenges/6621
    // Create a function that will take a string as an argument. In this function, use your favourite loop to capitalise the first letter of each word, whilst making each other letter lowercase
    // E.g. capitaliseTheFront("sinGLE"), should return "Single"
    // E.g. capitaliseTheFront("TWO words"), should return "Two Words"
    // E.g. capitaliseTheFront("Quite a Long SENTENCE!"), should return "Quite A Long Sentence!"


// Solution:

const capitaliseTheFront = (string) => {
	let split = string.split(" ");
	//.split with (" "): split string into an array of words
	let arr = [];
	for (let i of split){
		let firstChar = i.charAt(0).toUpperCase();
    //upcase the first character of a word
		let rest = i.substring(1).toLowerCase();
	//downcase the remaining character of a word
    //.substring: returns the part of the string between the start index to the end of the string.
		let word = firstChar + rest;
    //combined them together => capitalise a word
		arr.push(word);
	//push every word back to an array
	}
		return arr.join(" ");
	//join elements in array back to a string
}

console.log(capitaliseTheFront("sinGLE"))// "Single"
console.log(capitaliseTheFront("TWO words"))// "Two Words"
console.log(capitaliseTheFront("Quite a Long SENTENCE!"))// "Quite A Long Sentence!"

// Methods:
    // .split
    // .charAt
    // .substring
    // .toUpperCase
    // .toLowerCase
    // .push
    // .join    
    