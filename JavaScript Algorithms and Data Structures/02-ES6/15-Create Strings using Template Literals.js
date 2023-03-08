// Use template literal syntax with backticks to create an array of list element (li) strings. 
// Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).
// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    let failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList);