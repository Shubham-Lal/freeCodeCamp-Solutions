# Use Destructuring Assignment to Assign Variables from Objects

Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

Using the same object from the last example:

```
const user = { name: 'John Doe', age: 34 };
```

Here's how you can give new variable names in the assignment:

```
const { name: userName, age: userAge } = user;
```

You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.
