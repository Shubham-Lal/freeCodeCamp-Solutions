// DNA Pairing

function pairElement(str) {
    const matchWithBasePair = (char) => {
        switch (char) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
        }
    };

    const pairs = [];
    for (let i = 0; i < str.length; i++)
        pairs.push(matchWithBasePair(str[i]));

    return pairs;
}

console.log(pairElement("GCG"));