// Exercise 1
// ------------
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
  // write some code
  myPromise = new Promise((resolve, reject) => {
    if(array.every(word => typeof word === 'string')) {
    resolve(array.map(word => word.toUpperCase()))
    } else {
    reject(`Looks like not everythings a string chief!`)
    }
  })
  return myPromise
};

const sortWords = (array) => {
  myPromise = new Promise((resolve, reject) => {
    const sorted = array.sort((a, b) => {
      if (a > b) return 1;
      else if (a < b) return -1;
      else return 0;
    });
    resolve(sorted);
  });
  return myPromise
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));


  //Write two functions that use Promises that you can chain!

//- The first function, `makeAllCaps()`, takes in an array of words, capitalizes them and returns a new array.
//- The second function, `sortWords()`, takes in an array of words, sorts the words in alphabetical order and return a new array.
//- If the array contains anything but strings, it should throw an error.

//⚡ Be sure to take a look at how the functions are being called.

//---

//## NOTE on the rest of the exercises

//The exercises below ask you to `return` the output of the Promises. In order to see the result of the promise, you can temporarily output via a console.log the data WITHIN the promise chain (in its own `.then`).

//You are `return`ing the value, because you will need this functionality in a later exercise.

//If you console.log the function call, you will not see the result because console.log doesn't wait for the promise to be resolved to execute. This why in the previous exercises we console.log in a `.then()` after the Promise is done.

//```js
//compareToTen(15)
//  .then((result) => console.log(result)) // <-- that will console what the promise returns
//  .catch((error) => console.log(error));