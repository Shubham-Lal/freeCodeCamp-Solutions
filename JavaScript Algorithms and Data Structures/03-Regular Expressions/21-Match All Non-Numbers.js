// Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; // Change this line
let result = movieName.match(noNumRegex).length;

console.log(result);