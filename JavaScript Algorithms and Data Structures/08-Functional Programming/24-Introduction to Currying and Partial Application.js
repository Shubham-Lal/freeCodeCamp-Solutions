// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

function add(x) {
    // Only change code below this line

    return y => z => x + y + z;

    // Alternate
    return function add(y) {
        return function add(z) {
            return x + y + z;
        }
    }

    // Only change code above this line
}

console.log(add(10)(20)(30));