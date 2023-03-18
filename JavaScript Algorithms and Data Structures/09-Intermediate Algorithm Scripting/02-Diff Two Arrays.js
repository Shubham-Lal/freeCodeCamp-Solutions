// Diff Two Arrays

function diffArray(arr1, arr2) {

    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));

}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));