# Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

```
1) Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

2) Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
```

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.
