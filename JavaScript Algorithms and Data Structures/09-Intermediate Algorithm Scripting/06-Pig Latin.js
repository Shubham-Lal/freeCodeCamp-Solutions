// Translate the provided string to Pig Latin. 
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("algorithm"));