// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). 
// removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted.

function removeFirstTwo(list) {
    // Only change code below this line
    const [, , ...shorterList] = list; // Change this line
    // Only change code above this line
    return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);