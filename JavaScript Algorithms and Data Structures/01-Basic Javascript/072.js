function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val >= 5 && val <= 10) {
        return "Between 5 and 10";
    } else {
        return "Smaller than 5";
    }
}

testElseIf(7);