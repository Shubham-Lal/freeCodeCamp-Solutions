// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
// Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
    // Only change code below this line

    arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

    // Only change code above this line
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));