// Chunky Monkey

// Using Splice
function chunkArrayInGroups(arr, size) {
    const newArr = [];
    while (arr.length > 0) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// Using Slice
function chunkArrayInGroups(arr, size) {
    // Break it up.
    const newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));