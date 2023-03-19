// Smallest Common Multiple

function smallestCommons(arr) {

    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var mltple = max;

    for (var i = max; i >= min; i--) {
        if (mltple % i !== 0) {
            mltple += max;
            i = max;
        }
    }

    return mltple;
}

console.log(smallestCommons([1, 5]));