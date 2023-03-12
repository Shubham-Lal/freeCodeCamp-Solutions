// The function raiseToPower raises a base to an exponent. 
// Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);