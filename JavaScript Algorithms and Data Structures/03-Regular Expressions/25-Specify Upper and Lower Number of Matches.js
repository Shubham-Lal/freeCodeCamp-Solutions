// Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/g; // Change this line
let result = ohRegex.test(ohStr);

console.log(result);