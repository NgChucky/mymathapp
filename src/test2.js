var content = `
Hello $1$ hi $$22$$ hola /begin{align*} 8*7 &= 56 // 8*9 &= 72 // /end{align*} ,..., goodbye
`;
var content2 = content;

content2 = content2.replace(/\//g, "\\");
let regex = /[^#]+/g;
const newLine = /,\.\.\.,/g;
const regexInline = /\$(.*?)\$/g;
const regexDisplay = /\$\$(.*?)\$\$/g;
const regexBlock = /\\begin\{(.*?)\\end\{(.*?)\}/gs;
let y = [];
let match;

// while ((match = regexDisplay.exec(content)) !== null) {
//     let _match = match[0];
//     let p1 = match[1];
//     let index = match.index;
//     y.push({ type: "display", text: _match, index });
//     content2.replace(_match, "#".repeat(_match.length));
// }

content2 = content2.replace(regexDisplay, (_match, p1, index) => {
    y.push({ type: "display", text: _match, index: index  });
    return "#".repeat(_match.length);
});
content2 = content2.replace(regexInline, (_match, p1, index) => {
    y.push({ type: "inline", text: _match, index: index });
    return "#".repeat(_match.length);
});

content2 = content2.replace(regexBlock, (_match, p1, p2, index) => {
    y.push({ type: "block", text: _match, index: index  });
    return "#".repeat(_match.length);
});

content2 = content2.replace(newLine, (_match, index) => {
    y.push({ type: "newline", text: _match, index: index  });
    return "#".repeat(_match.length);
});

while ((match = regex.exec(content2)) !== null) {
    y.push({
        type: 'plain',
        text: match[0],
        index: match.index
    });
}

console.log(y, content2);
console.log(content);
var h = [...y].sort((a, b) => a.index - b.index);
console.log(h);
