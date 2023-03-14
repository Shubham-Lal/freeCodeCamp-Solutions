// Celsius to Fahrenheit converter function

function convertCtoF(celsius) {
    let fahrenheit;

    fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
}

console.log(convertCtoF(30));