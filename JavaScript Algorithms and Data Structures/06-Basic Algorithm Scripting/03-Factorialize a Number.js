// Factorialize a Number

// Using Recursion
function factorialize(num) {
    if (num === 0) return 1;
    return num * factorialize(num - 1);
}

console.log(factorialize(5));

// Using Iteration
function factorialize(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorialize(5));