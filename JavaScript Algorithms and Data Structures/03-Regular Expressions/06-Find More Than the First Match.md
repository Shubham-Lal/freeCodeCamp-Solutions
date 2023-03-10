# Find More Than the First Match

So far, you have only been able to extract or search a pattern once.

```
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.

```
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

And here match returns the value ["Repeat", "Repeat", "Repeat"]
