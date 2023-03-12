# Catch Use of Assignment Operator Instead of Equality Operator

Branching programs, i.e. ones that do different things if certain conditions are met, rely on if, else if, and else statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the =, or assignment operator. This leads to unexpected control flow in your program.

As covered in previous challenges, the assignment operator (=) in JavaScript assigns a value to a variable name. And the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).

The code below assigns x to be 2, which evaluates as true. Almost every value on its own in JavaScript evaluates to true, except what are known as the "falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

```
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

In this example, the code block within the if statement will run for any value of y, unless y is falsy. The else block, which we expect to run here, will not actually run.
