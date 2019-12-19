function adder(x, y, c) {
    answer = x + y;
    if (c) {
      return c(answer);   
    }
    return answer;
  }
  
function shoutSomething(anwser) {
console.log(`${anwser}!`);
}

adder(1, 2, shoutSomething);  //called 'adder' & passed sS as arg
console.log(adder(3, 4))                  //no callback, so return 7 (not print out to console)

// console.log("#########")
// adder(1,2); 
// console.log("#########")
// console.log(adder(1,2))
//   console.log("*************");
//   console.log(adder(3, 4));     //no callback, use console.log to print out              
  