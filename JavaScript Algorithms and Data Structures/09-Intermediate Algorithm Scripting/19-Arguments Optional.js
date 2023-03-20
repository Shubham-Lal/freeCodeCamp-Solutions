// Arguments Optional

function addTogether() {
    const [first, second] = arguments;
    if (typeof (first) !== "number")
        return undefined;
    if (arguments.length === 1)
        return (second) => addTogether(first, second);
    if (typeof (second) !== "number")
        return undefined;
    return first + second;
}

console.log(addTogether(2, 3));