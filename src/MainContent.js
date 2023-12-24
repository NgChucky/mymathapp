import React from "react";
import MathJax from 'react-mathjax2';

function MainContent()
{
	const style1 = {
		position: 'fixed',
		top: '0',
		bottom : '0',
		left: '15%',
		right: '15%',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		borderRight: '1px solid #000',
		borderLeft: '1px solid #000',
		padding: '0px',
		wordWrap: 'break-word',
	};

	const style2 = {
		marginTop: '0%',
		marginBottom: '0%',
		padding : '0% 0% 0% 0%',
		borderBottom : '1px solid #000',
		position: 'relative',
		height : '10%',
		textAlign: 'center',
		fontSize: '2.5vh',
	};

	const style3 = {
		position: 'relative',
		width : '96%',
		height : '86.5%',
		padding: '0% 2% 0% 2%',
		overflowX: 'scroll',
		overflowY: 'scroll'
	};
	
	const renderMathJax = (text) => {

		text = text.replace(/\//g, "\\");

		let match;
		let regex = /[^#]+/g;
		const newLine = /,\s*\.\.\.,\s*/g;
		const regexInline = /\$(.*?)\$/g;
		const regexDisplay = /\$\$(.*?)\$\$/g;
		const regexBlock = /\\begin\{(.*?)\\end\{(.*?)\}/gs;
	
		const equations = [];
		const newLines = [];
		const plainTextSegments = [];
	
		text = text.replace(regexDisplay, (_match, p1, index) => {
			equations.push({ type: "display", text: _match, index: index  });
			return "#".repeat(_match.length);
		});
		text = text.replace(regexInline, (_match, p1, index) => {
			equations.push({ type: "inline", text: _match, index: index });
			return "#".repeat(_match.length);
		});
		
		text = text.replace(regexBlock, (_match, p1, p2, index) => {
			equations.push({ type: "block", text: _match, index: index  });
			return "#".repeat(_match.length);
		});
		
		text = text.replace(newLine, (_match, index) => {
			newLines.push({ type: "newline", text: <br key={index} />, index: index  });
			return "#".repeat(_match.length);
		});
		
		while ((match = regex.exec(text)) !== null) {
			plainTextSegments.push({
				type: 'plain',
				text: match[0],
				index: match.index
			});
		}

		var skip = -1;
		const allElements = [...equations, ...plainTextSegments, ...newLines].sort((a, b) => a.index - b.index);
	
		const elements = allElements.map((element, index, array) => {
			skip += 1; //skip == 0 on first entry
			if (skip === 0 || skip === 2) {
				if (element.type === "plain" && array[index+1]?.type === "inline") {
					skip = 0;
					return (
						<span key={`${element.index}`}>
    						{element.text}
    						<MathJax.Text text={array[index+1]?.text}/>
						</span>
					);
				}
				else {
					skip -= 1;
					if (element.type === "inline" || element.type === "block" || element.type === "display") {
						return (
							<MathJax.Text key={`${element.index}`} text={element.text} />
						);
					}
					else if (element.type === "newLine") {
						return element.text; // Return <br/> directly
					}
					else {
						return <span key={`${element.index}`}>{element.text}</span>;
					}
				}
			}
		});
		return elements;
	};	  
		

	var content = `
	This is line 1 ,..., 
	This is line 2 ,..., 
	This is inline math: $i^2 = -1$ ,...,
	This is displaymath: $$/frac{1}{2} + /frac{1}{3} = /frac{5}{6}$$ ,...,
	This is block math: /begin{align*} /frac{1}{2} + /frac{1}{3} = /frac{5}{6} /end{align*} ,...,
	`;

	return (
		<div className="main-content" style={style1}>
      		<div className="heading" style={style2}>
        		<h1>Math Practice</h1>
      		</div>
      		<div className="content" contentEditable={true} style={style3}>
				<p>
					{renderMathJax(content)}
				</p>
			</div>
		</div>
	);
};
export default MainContent;