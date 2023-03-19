// Drop it

function dropElements(arr, func) {
    if (arr.length === 0 || func(arr[0])) {
        return arr;
    } else {
        arr.shift();
        return dropElements(arr, func);
    }
}

dropElements([1, 2, 3], function (n) { return n < 3; });