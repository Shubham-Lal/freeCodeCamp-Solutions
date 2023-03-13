// We have defined a function, mixedNumbers, which we are passing an array as an argument. 
// Modify the function by using push() and unshift() to add 
// 'I', 2, 'three' to the beginning of the array and 
// 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.

function mixedNumbers(arr) {
    // Only change code below this line

    arr.unshift("three");
    arr.unshift(2);
    arr.unshift("I");

    arr.push(7);
    arr.push("VIII");
    arr.push(9);

    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));