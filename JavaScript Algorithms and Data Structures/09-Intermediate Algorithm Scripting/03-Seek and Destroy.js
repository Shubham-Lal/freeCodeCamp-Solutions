// Seek and Destroy

function destroyer(arr) {
    const ignore = Array.from(arguments).slice(1);
    return arr
        .filter((val) => {
            return !ignore.includes(val);
        });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));