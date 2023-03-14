// Find the Longest Word in a String

function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            if (currentLength > longestLength) {
                longestLength = currentLength;
            }
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    if (currentLength > longestLength) {
        longestLength = currentLength;
    }

    return longestLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));