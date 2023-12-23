import { React, useRef } from "react";
import { MathJax } from "better-react-mathjax";

function MainContent()
{
  const style = {
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
    overflowX: 'scroll',
    overflowY: 'scroll'
  };


  const editorRef = useRef(null);

  // Function to handle changes in the content
  const handleContentChange = () => {
    // Get the edited content from the editor
    const editedContent = editorRef.current.innerHTML;
    // You can use this content as needed, for example, updating state or performing other actions
    console.log('Edited content:', editedContent);
  };

  return (
    <div className="main-content" style={style} contentEditable="true" ref={editorRef} onBlur={handleContentChange}>
      <div className="heading" style={{ textAlign: "center", borderBottom: "1px solid #000" }}>
        <h1>Math Practice</h1>
      </div>
      <div className="content" style={{ padding: "2vw" }}>
        <p>
          <div className="mx">
          <MathJax>{"$ \\text\{Let \} \\{a_n\\} \\text\{ be a sequence of positive terms and \}\{s_n\} = \\sum\\limits_\{k=1\}^\{n\} {a_k}$"}</MathJax> 
          <MathJax>{`
            \\begin{align*}
            \\lim\\limits_{x\\to\\infty}\\frac{a_{n+1}}{a_n} &< 1 \\implies \\{s_n\\} \\text{ converges} \\\\
              &> 1 \\implies \\{s_n\\} \\text{ diverges} \\\\ 
            \\end{align*}
            `}
          </MathJax> 
          </div>
        </p>
      </div>
    </div>
  );
};
export default MainContent;