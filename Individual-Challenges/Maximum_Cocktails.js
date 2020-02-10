//[Challenge] Alex B's Challenge - Brad, the bartender: https://edstem.org/courses/3790/challenges/9155

// Brad is a bartender at a fancy cocktail bar; he's a fantastic mixologist but not the best mathematician. Let's help him out and create a function that lets him know how many cocktails he can make with the ingredients on hand.

// Write a function maximumCocktails(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cocktails Brad can bake (integer). For simplicity there are no units for the amounts (e.g. 100ml of vodka or 20 olives  are simply 100 or 20).

// Solution:

const maximumCocktails = (recipe, available) => {
  const recipeIngredients = Object.keys(recipe);
  const stockIngredients = Object.keys(available);
  const recipeVolumes = Object.values(recipe);
  const stockVolumes = Object.values(available);

  //Check if every ingredient is in stock
  const makeable = recipeIngredients.every(x => stockIngredients.includes(x));

  //If not enough ingredients, return 0
  if (!makeable) {
    return 0;
  } else {
    let arr = [];
    for (let i = 0; i < recipeVolumes.length; i++) {
      //Remove ingredients that do not need
      if (recipeIngredients[i] !== stockIngredients[i]) {
        stockVolumes.splice(stockVolumes.indexOf(stockVolumes[i]), 1);
      }
      //Calculate the ingredients needed
      let count = stockVolumes[i] / recipeVolumes[i];
      arr.push(parseInt(count));
    }
    //Return the smaller number of count
    return arr.sort((a, b) => a - b)[0];
  }
};

let martiniRecipe = { gin: 50, vermouth: 10, olives: 3 };
let barStock = { gin: 160, vermouth: 300, olives: 36 };
console.log(maximumCocktails(martiniRecipe, barStock)); //=> 3
// maximumCocktails should return three as that's the most cocktails we can make before running out of gin

let negroniRecipe = { gin: 25, vermouth: 25, campari: 25 };
let barStock2 = { gin: 2250, vermouth: 2250, olives: 60 };
console.log(maximumCocktails(negroniRecipe, barStock2)); //=> 0
// maximumCocktails should return zero as there's no campari to make a negroni with

let negroniRecipe2 = { gin: 25, vermouth: 25, campari: 25 };
let barStock3 = { gin: 2250, vermouth: 2250, olives: 60, campari: 1400 };
console.log(maximumCocktails(negroniRecipe2, barStock3)); //=> 56

// Methods:
// Object.keys();
// Object.values();
// .every
// .splice
// .indexOf
// parseInt()
// .sort((a, b) => a - b)
