# Write Arrow Functions with Parameters

Just like a regular function, you can pass arguments into an arrow function.

```
const doubler = (item) => item * 2;
doubler(4);
```

doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

```
const doubler = item => item \* 2;
```

It is possible to pass more than one argument into an arrow function.

```
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

multiplier(4, 2) would return the value 8.
