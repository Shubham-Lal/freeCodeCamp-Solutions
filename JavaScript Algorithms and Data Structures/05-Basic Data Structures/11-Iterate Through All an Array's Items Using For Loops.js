// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. 
// elem represents an element that may or may not be present on one or more of the arrays nested within arr. 
// Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            //Checks every parameter for the element and if is NOT there continues the code
            newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
        }
    }

    // change code above this line
    return newArr;
}
// change code here to test different cases:
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));