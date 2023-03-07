// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line


const { today: highToday } = HIGH_TEMPERATURES;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES;


console.log(highToday);
  // Only change code above this line