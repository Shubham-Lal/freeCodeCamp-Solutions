# Use Capture Groups to Search and Replace

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

The replace call would return the string The sky is blue..

You can also access capture groups in the replacement string with dollar signs ($).

```
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

The replace call would return the string Camp Code.
