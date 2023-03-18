// Sum All Numbers in a Range

function sumAll(arr) {
    let sum = 0, temp;

    if (arr[1] < arr[0]) {
        temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
    }

    for (let i = arr[0]; i <= arr.slice(-1); i++) {
        sum += i;
    }
    return sum;
}

console.log(sumAll([4, 1]));