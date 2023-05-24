marked.setOptions({
    breaks: true,
});

const updatePreview = () => {
    document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
};

const defaultProps = () => {
    let defaultText = `# Shubham Welcomes You

## .md Previewer

[Source Code](https://github.com/CERTIFIED2003/freeCodeCamp-Solutions/tree/main/Front%20End%20Development%20Libraries/7-Front%20End%20Development%20Libraries%20Projects/2-Build%20a%20Markdown%20Previewer)

<dl>
    <dt>Greetings!</dt>
    <dd>How was your day, buddy?</dd>
</dl>

Thank \`GOD\` for everything!

\`\`\`\`
function(todo) {
    console.log("Eat, Code, Sleep");
}
\`\`\`\`

Contributors:
- [Shubham Lal](https://shubhamlal.is-a.dev)

> Miss my childhood days :( ![This is me xD](https://github.com/CERTIFIED2003/media-in-readme/assets/111045472/751f37bc-13bd-4f64-b16f-798ba7eac76c)

**Bye bye**`;
    document.getElementById("editor").value = defaultText;
    document.getElementById("preview").innerHTML = marked.parse(defaultText);
}