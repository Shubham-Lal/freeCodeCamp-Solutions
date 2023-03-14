// Slice and Splice

function frankenSplice(arr1, arr2, n) {
    let newArr = [];

    if (arr2.length >= 1) {
        for (let i = 0; i < n; i++) {
            newArr.push(arr2[i]);
        }
    }

    newArr = newArr.concat(arr1);

    for (let i = n; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }

    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));