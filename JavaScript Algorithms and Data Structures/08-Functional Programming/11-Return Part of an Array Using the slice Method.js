// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. 
// The function should return an array.

function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line

    return anim.slice(beginSlice, endSlice);

    // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
console.log(sliceArray(inputAnim, 1, 3));