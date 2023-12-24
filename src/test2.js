const renderMathJax = (text) => {
    text = text.replace(/\//g, "\\"); // Replacing / with \

    const newLine = /\.,/g; // Regular expression for new line
    const regexInline = /\$(.*?)\$/g; // Regular expression for inline MathJax delimiters: $
    const regexDisplay = /\$\$(.*?)\$\$/gs; // Regular expression for display MathJax delimiters: $$
    const regexBlock = /\\begin\{(.*?)\}(.*?)\\end\{(.*?)\}/gs; // Regular expression for block MathJax delimiters: \begin and \end

    const equations = [];
    const newLines = [];

    text = text.replace(regexDisplay, (_match, p1, index) => {
        equations.push({ type: "display", text: _match, index });
        console.log({_match});
        return "#".repeat(_match.length); // Accounting for the '$$' delimiters
    });

    text = text.replace(regexInline, (_match, p1, index) => {
    equations.push({ type: "inline", text: _match, index });
    console.log({_match});
    return "#".repeat(_match.length);
    });

    text = text.replace(regexBlock, (_match, p1, p2, p3, index) => {
    equations.push({ type: "block", text: _match, index });
    return "#".repeat(_match.length); // Accounting for the '\begin' and '\end' delimiters
    });

    text = text.replace(newLine, (_match, index) => {
    newLines.push({ type: "newLine", text: '\n', index });
    return "#".repeat(5);
    });

    return ;
};	  
    

var content = `
$$ /frac{1}{2} $$
$ hello $
`;

console.log(renderMathJax(content));