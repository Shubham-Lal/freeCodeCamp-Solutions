// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
// The function is supposed to return a new array made up of num copies of arr. 
// We have done most of the work for you, but it doesn't work quite right yet. 
// Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).


// My Method
function copyMachine(arr, num) {
    let newArr = [];
    // Only change code below this line

    for (let i = 0; i < num; i++) {
        newArr.push([...arr]);
    }

    // Only change code above this line
    return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Accepted Solution

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);
        // change code above this line
        num--;
    }
    return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));