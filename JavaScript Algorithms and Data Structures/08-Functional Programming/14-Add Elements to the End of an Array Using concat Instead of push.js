// Change the nonMutatingPush function so it uses concat to merge newItem to the end of original without mutating original or newItem arrays. 
// The function should return an array.

function nonMutatingPush(original, newItem) {
    // Only change code below this line

    return original.concat(newItem);

    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);