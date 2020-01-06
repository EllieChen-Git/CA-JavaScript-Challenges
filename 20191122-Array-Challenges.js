//[Challenge] 1122 DOM, Node Manipulation & Event Listeners - Array Challenges: https://gist.github.com/harrisonmalone/0db3c8d53bcb47a5aee1a850a6ceb394

// ***************************************************************//
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
    let answer1500s = inventors.filter(i => (i.year.toString().slice(0, 2)) === "15");
    // console.log(answer1500s);

  // Array.map()
  // 2. Give us an array of the inventors' first and last names
    let investorNames = inventors.map(i => `${i.first} ${i.last}`);
    // console.log(investorNames);
  
  // Array.sort()
  // 3. Sort the inventors by birth date, oldest to youngest

    let investorBirthDate = inventors.sort(function(a, b){
        return a.year - b.year;
    });
    // console.log(investorBirthDate);

  // Array.sort()
  // 4. Sort the inventors by years lived

    let investorYearsLived = inventors.sort(function(a, b){
        return (a.passed - a.year) - (b.passed - b.year);
    });
    // console.log(investorYearsLived);


// ***************************************************************//
  // Array.filter()
  // 5. Create a list of Boulevards in Paris that contain 'de' anywhere in the name, you'll need to create your own array
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
let Boulevards = [ "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard la Madeleine"];

let de = Boulevards.filter(i => i.match("de"));
// console.log(de);


// ***************************************************************//
  const peopleOne = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
  
  // Array.sort()
  // 6. Sort the peopleOne alphabetically by last name
  
  let sortByLastName = peopleOne.sort(function(a , b){
    let lastA = a.split(",")[1].trim();
    let lastB = b.split(",")[1].trim();
    if (lastA < lastB) return -1;
    if (lastA > lastB) return 1;
    return 0;
  });
//   console.log(sortByLastName);

// ***************************************************************//
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.find()
  // Find is like filter, but instead returns just the one you are looking for
  // 7. Find the comment with the ID of 823423

  let findID = comments.find(i => i.id === 823423);
    //   console.log(findID);
  
  // Array.findIndex()
  // 8. Find the comment with this ID

    let findIDbyIndex = comments.findIndex(i => i.id === 823423)
    //   console.log(findIDbyIndex);

  // 9. Delete the comment with the ID of 823423
    let a = comments.splice(findIDbyIndex, 1);
    // console.log(comments);

// ***************************************************************//
  const peopleTwo = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.some()
  // 10. is at least one person 19 or older?
  
  let olderThan19 = peopleTwo.some(i => (2019 - i.year) > 19);
//   console.log(olderThan19)

  // Array.every()
  // 11. Is everyone 19 or older?

  let everyoneOlderThan19 = peopleTwo.every(i => (2019 - i.year) > 19);
//   console.log(everyoneOlderThan19)

  // reduce is one of those functions that is very difficult to use at first
  // give it a go and ask teachers if you need some help
  
  // Array.reduce()
  // 12. How many years did all the inventors live?
  
  let yearsLived = inventors.map(i => (i.passed - i.year));
  let totalYearsLived  = yearsLived.reduce((a, b) => (a+b));
//   console.log(yearsLived);
//   console.log(totalYearsLived);

  // Array.reduce()
  // 13. Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  //[Solution 1]
  var countData = data.reduce(function(allData, element) { 
    if (element in allData) {
    allData[element]++;
    }
    else {
    allData[element] = 1;
    }
    return allData;
  }, {});

//   console.log(countData);


    //[Solution 2]
      let initialValue = {}
      let reducer = function(count, element) {
        if (!count[element]) {
          count[element] = 1;
        } else {
          count[element] = count[element] + 1;
        }
        return count;
      }
      let result = data.reduce(reducer, initialValue) 
    //   console.log(result);    

  //[Solution 3]
      let dataCount = {}, index, instance;                                
      for (index = 0; index < data.length; index++) {
          instance = data[index];
          if (typeof dataCount[instance] === "undefined") {      //first time counting a instance, the datatype of it is 'undefined'
              dataCount[instance] = 1;                           //so we set the initial count equals to '1' here
          } else {
              dataCount[instance]++;
          }
      }
    //   console.log(dataCount);

  // source: wes bos (edited by harrison and aaron)
    
    