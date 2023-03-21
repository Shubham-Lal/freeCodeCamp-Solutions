// Palindrome Checker

function palindrome(str) {
    let prevStr = str.toLowerCase().replace(/[\W_]/g, "");
    let newStr = prevStr.split("").reverse().join("");

    if (prevStr !== newStr) return false;
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));