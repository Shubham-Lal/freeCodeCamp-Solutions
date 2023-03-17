// Use the every method inside the checkPositive function to check if every element in arr is positive. 
// The function should return a Boolean value.

function checkPositive(arr) {
    // Only change code below this line

    return arr.every((item) => {
        return item > 0;
    })

    // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));