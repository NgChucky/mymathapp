import React from "react";
import { MathJax, MathJaxContext} from "better-react-mathjax";

function MainContent()
{
	const style1 = {
		position: 'fixed',
		top: '0',
		left: '15%',
		right: '15%',
		height: '100%',
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		filter: 'blur(0px)',
		borderRight: '1px solid #000',
		borderLeft: '1px solid #000',
		padding: '0px',
		wordWrap: 'break-word',
	};

	const style2 = {
		position: 'relative',
		height: '100%',
		padding: '0% 5% 0% 5%',
		overflowX: 'scroll',
		overflowY: 'scroll'
	};
	
	const renderMathJax = (text) => {
		text = text.replace(/\//g, "\\"); // Replacing / with \

		const newLine = /,...,/g;  // Regular expression for new line
		const regexInline = /\$(.*?)\$/g; // Regular expression for inline MathJax delimiters: $
		const regexDisplay = /\$\$(.*?)\$\$/gs; // Regular expression for display MathJax delimiters: $$
		const regexBlock = /\\begin\{(.*?)\}(.*?)\\end\{(.*?)\}/gs; // Regular expression for block MathJax delimiters: \begin and \end
	
		const equations = [];
		const newLines = [];
	
		text = text.replace(regexDisplay, (_match, p1, index) => {
		equations.push({ type: "display", text: _match, index });
		return "#".repeat(_match.length); // Accounting for the '$$' delimiters
		});

		text = text.replace(regexInline, (_match, p1, index) => {
			equations.push({ type: "inline", text: _match, index });
			return "#".repeat(_match.length);
			});
	
		text = text.replace(regexBlock, (_match, p1, p2, p3, index) => {
		equations.push({ type: "block", text: _match, index });
		return "#".repeat(_match.length); // Accounting for the '\begin' and '\end' delimiters
		});

		text = text.replace(newLine, (_match, index) => {
		newLines.push({ type: "newLine", text: "\,\.\.\.\,", index });
		return "#".repeat(_match.length);
		});
	
		const plainTextSegments = text.split("#").map((segment, index) => ({ text: segment, index }));
	
		const allElements = [...equations, ...plainTextSegments, ...newLines].sort((a, b) => a.index - b.index);
	
		const elements = allElements.map((element, index) => {
		if (element.type === "inline" || element.type === "display" || element.type === "block") {
			return (
			<MathJaxContext key={`${element.index}`} version={3}>
				<MathJax>{element.text}</MathJax>
			</MathJaxContext>
			);
		}
		else if (element.type === "newLine") {
			return <br key={`${element.index}`}/>; // Return <br/> directly
		}
		else {
			return <span key={`${element.index}`}>{element.text}</span>;
		}
		});
	
		return elements;
	};	  
		

	var content = `
	The equation of the circle is $x^2+y^2=r^2$, where (x,y) are coordinates and $r$ is the radius of the circle. So, the area of the upper half of a circle of radius $r$ is the proper integral $$ /int/limits_{-r}^{r}/left(/sqrt{r^2-x^2}/right)$$, which equals $/frac{/pi r^2}{2}$. The slope of the circle in terms of x and y is obtained by implicit differentiation:
	/begin{align*}
		x^2 + y^2 &= r^2 //
		/frac{d}{dx}(x^2 + y^2) &= /frac{d}{dx}(r^2) //
		/frac{d}{dx}(x^2) + /frac{d}{dx}(y^2) &= /frac{d}{dx}(r^2) //
		2x + 2y/frac{dy}{dx} &= 0 //
		/frac{dy}{dx} &= -/frac{x}{y} //
	/end{align*}
	`;

	return (
		<div className="main-content" style={style1}>
      		<div className="heading" style={{ textAlign: "center", borderBottom: "1px solid #000" }}>
        		<h1>Math Practice</h1>
      		</div>
      		<div className="content" contentEditable={true} style={style2}>
				<p>
					{renderMathJax(content)}
				</p>
			</div>
		</div>
	);
};
export default MainContent;