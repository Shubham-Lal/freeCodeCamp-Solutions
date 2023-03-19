// Sorted Union

function uniteUnique() {

    return [...arguments]
        .flat()
        .filter((item, ind, arr) => arr.indexOf(item) === ind);
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));