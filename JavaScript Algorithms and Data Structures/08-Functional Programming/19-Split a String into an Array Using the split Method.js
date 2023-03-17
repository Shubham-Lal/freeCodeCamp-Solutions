// Use the split method inside the splitify function to split str into an array of words. 
// The function should return the array. 
// Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
    // Only change code below this 

    return str.split(/\W/); // \W equivalent to [^A-Za-z0-9_]

    // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));