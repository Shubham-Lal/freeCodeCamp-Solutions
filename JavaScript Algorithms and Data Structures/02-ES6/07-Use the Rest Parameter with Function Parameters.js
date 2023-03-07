// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

const sum = (...args) => {

    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

console.log(sum());