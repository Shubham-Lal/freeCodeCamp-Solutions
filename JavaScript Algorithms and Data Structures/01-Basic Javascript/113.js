function rangeOfNumbers(startNum, endNum) {
    return (
        startNum === endNum
            ? [startNum]
            : [startNum].concat(rangeOfNumbers(startNum + 1, endNum))
    );
};