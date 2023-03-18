// Wherefore art thou

function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);

    return collection
        .filter(obj => sourceKeys
            .every(key => obj.hasOwnProperty(key) &&
                obj[key] === source[key])
        );

}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));