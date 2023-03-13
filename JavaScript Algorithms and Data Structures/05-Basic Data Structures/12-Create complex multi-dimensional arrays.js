// We have defined a variable, myNestedArray, set equal to an array.
// Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). 
// Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.

let myNestedArray = [
    // Only change code below this line
    'level 1',                   /* myNestedArray[0]             */
    ['level 2'],	               /* myNestedArray[1][0]          */
    [['level 3', 'deep']],	       /* myNestedArray[2][0][0]       */
    [[['level 4', 'deeper']]],    /* myNestedArray[3][0][0][0]    */
    [[[['level 5', 'deepest']]]]  /* myNestedArray[4][0][0][0][0] */
    // Only change code above this line
];