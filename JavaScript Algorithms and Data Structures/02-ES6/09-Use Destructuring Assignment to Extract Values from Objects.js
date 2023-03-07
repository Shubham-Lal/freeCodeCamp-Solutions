// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

const { today = 77 } = HIGH_TEMPERATURES;
const { tomorrow = 80 } = HIGH_TEMPERATURES;

  // Only change code above this line