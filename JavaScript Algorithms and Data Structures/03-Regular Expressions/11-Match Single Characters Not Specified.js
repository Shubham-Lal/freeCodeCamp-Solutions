// Create a single regex that matches all characters that are not a number or a vowel. 
// Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);