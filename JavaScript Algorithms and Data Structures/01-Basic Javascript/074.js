function testSize(num) {
    // Only change code below this line
    if (num >= 20) return "Huge";
    else if (num >= 15 && num < 20) return "Large";
    else if (num >= 10 && num < 15) return "Medium";
    else if (num >= 5 && num < 10) return "Small";
    else return "Tiny";

    // Only change code above this line
}

testSize(7);