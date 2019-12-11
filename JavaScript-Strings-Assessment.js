//[Challenge] W7 JavaScript review - JavaScript Strings Assessment: https://edstem.org/courses/3790/lessons/997/slides/8390
	// Assess basic understanding of JavaScript strings

// Solution:
const stringFunctions = {
    countSpaces: function (input) {
	   //// count the white space //// 
	   
       let spaceCount = input.split(" ").length - 1;
       return spaceCount;
    },

    capitalise: function (input) {
		////  Capitalise the first word //// 

		let split = input.split(" ") //Split sentence into words
		let firstWord = split[0]     //Grab the 1st word
		let firstChar = firstWord[0].toUpperCase(); //Upcase the 1st char of 1st word
		let rest = firstWord.substring(1).toLowerCase(); //Downcase the rest char of 1st word
		split[0] = firstChar + rest;  //Combined them back to 1st word, and replace split array with the new 1st word
		return split.join(" "); //Combined words back into sentence
    },

    firstIndex: function (input, character) {
		///// Return the first index where character is found in input //// 
		
        let split = input.split(""); //split sentence into characters
        let firstIndex = split.findIndex(x => x === character); //findIndex takes a callback function
        return firstIndex;
    },

    lastIndex: function (input, character) {
		////  Return the last index where character is found in input //// 
		
        let split = input.split(""); //split sentence into characters
        let lastIndex = split.lastIndexOf(character); //lastIndexOf takes a argument
        return lastIndex;
    },

    subString: function (input, count) {
        ////  Return a substring  with count characters from the beginning of input //// 

        //Method 1:    
			// let subtract = input.substring(count); //
			// return input.replace(subtract, "")
		//Method 2:
			return input.slice(0, count)
    },

    capitaliseAll: function (input) {
        //// Capitalise the first letter of each word in input (you can use the capitalise function here) //// 

		let split = input.split(" ")
		let caplitaliseSplit = split.map(x => capitalise(x));
		return caplitaliseSplit.join(" ");
    }
}
module.exports = stringFunctions;

    
    