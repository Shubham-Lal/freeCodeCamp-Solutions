// Telephone Number Validator

function telephoneCheck(str) {
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
    return regex.test(str)
}

console.log(telephoneCheck("555-555-5555"));

//   1- ^ beginning of the string.
//   2- (1\s?)? allows for "1" or "1 " if there is one.
//   3- \d{n} checks for exactly n number of digits so \d{3} checks for three digits
//   4. - x|y checks for either x or y so (\(\d{3}\)|\d{3} checks for either three digits surrounded by parentheses or three digits by themselves with no parentheses
//   5. [\s\-]? checks for spaces or dashes between the groups of digits.
//   6. $ end of the string