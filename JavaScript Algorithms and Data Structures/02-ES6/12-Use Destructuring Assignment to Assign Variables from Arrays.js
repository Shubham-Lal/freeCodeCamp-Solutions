// Use destructuring assignment to swap the values of a and b 
// so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];
console.log(a, b)