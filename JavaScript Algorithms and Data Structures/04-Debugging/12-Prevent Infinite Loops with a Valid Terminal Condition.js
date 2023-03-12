// The myFunc() function contains an infinite loop because the terminal condition 
// i != 4 will never evaluate to false (and break the looping) - i will increment by 2 each pass, and jump right over 4 since i is odd to start. 
// Fix the comparison operator in the terminal condition so the loop only runs for i less than or equal to 4.

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}

myFunc();