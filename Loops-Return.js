//20191121 Harry’s Review: Loops & Return

//Challenge 1: return an array with only items started with "a"
let groceryItems = ["apple", "orange", "apricot", "banana", "pear", "aqua"]
let groceryAItems = findA(groceryItems)

function findA(x){
  let newarr = [];
  for (let i of x){
    if(i[0] === "a"){
      newarr.push(i);
    }
  }
  return newarr;
}

console.log(groceryAItems);


//Challenge 2: Combine 2 arrays into 1 & sort the elements with their string length
  //Beginner level: You can use .sort method
  //Advance level: Try to finish this project without .sort method

//Pseudocode
  // 1. combine 2 arr into 1
  // 2. get length of each element of the new arr
  // 3. sort it based on the length

function combineAndOrganise(arr1, arr2){
let newArr = arr1.concat(arr2);
newArr.sort(function(a, b) {
  return a.length > b.length;
})
  return newArr;
}

let wordSet1 = ["quick", "brown", "box"];
let wordSet2 = ["what", "the", "hell"];

let organishedWords = combineAndOrganise(wordSet1, wordSet2)

console.log(organishedWords);