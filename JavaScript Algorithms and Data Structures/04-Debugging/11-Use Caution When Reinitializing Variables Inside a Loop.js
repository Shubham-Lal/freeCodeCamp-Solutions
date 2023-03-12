// The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. 
// Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. 
// Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
        let row = []; /* <-----  row has been declared inside the outer loop. 
       Now a new row will be initialised during each iteration of the outer loop allowing 
       for the desired matrix. */
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);