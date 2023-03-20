// Everything Be True

function truthCheck(collection, pre) {

    return collection.every(function (element) {
        return element[pre];
    });
}

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));