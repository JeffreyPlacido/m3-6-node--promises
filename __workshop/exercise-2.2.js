// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require('request-promise');

const greeting = (langCode) => {
  return request("https://journeyedu.herokuapp.com/hello/" + langCode) // 1
    .then((response) => JSON.parse(response))
    .then((parsedResponse) => {
      return parsedResponse.data.text;
    })
    .catch((err) => console.log('Error: ', err));
};

// Testing
greeting('fr').then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3

// ### Exercise 2.2 - How do I say "hello" in... ?

// Write a Promise using `request-promise` that contacts the `/hello` API. The function accepts one argument, the language code, and returns a greeting in that language.

// 1. Insert the appropriate API url
// 2. Return just the greeting object.
//    e.g. `greeting('fr')` should return `{ lang: "French", code: "FR", text: "Bonjour" }`.

// The provided test case should console the appropriate greetings

// Call the function a few more times with other `langCode`s.

// const greeting = (langCode) => {
//   return request("https://journeyedu.herokuapp.com/hello/" + langCode) // 1
//     .then((response) => JSON.parse(response))
//     .then((parsedResponse) => {
//       return parsedResponse.data.text; // 2
//     })
//     .catch((err) => console.log("Error: ", err));
// };