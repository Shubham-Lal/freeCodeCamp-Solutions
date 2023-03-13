// Here we've defined an object userActivity, which includes another object nested within it. 
// Set the value of the online key to 45.

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

// Only change code below this line

userActivity.data.online = 45;

// Only change code above this line

console.log(userActivity);