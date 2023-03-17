// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). 
// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
// An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].
// Note: Your function should not use any kind of for or while loops or the forEach() function.

// My Solution
const squareList = arr => {
    // Only change code below this line
    let newArr = [];
    let filteredArr = [];

    arr
        .filter((item) => {
            Number.isInteger(item) !== false && Math.sign(item) !== -1
                && newArr.push(item)
        });

    newArr.reduce((sqr, item) => {
        sqr = item ** 2;
        return filteredArr.push(sqr);
    }, 0);

    return filteredArr;
    // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);

// --------------------------------------------------------------------------

// Alternate Solution
const squareListAlt = arr => {
    // Only change code below this line

    return arr
        .filter(num => num > 0 && num % parseInt(num) === 0)
        .map(num => Math.pow(num, 2));

    // Only change code above this line
};

const squaredIntegersAlt = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);