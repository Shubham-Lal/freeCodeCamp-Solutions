// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. 
// Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /ru.|su.|fu.|pu.|nu.|bun/; // Change this line
let result = unRegex.test(exampleStr);