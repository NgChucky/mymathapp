import React from 'react';
import './App.css';
import { MathJaxContext } from 'better-react-mathjax';
import MainContent from './MainContent.js';
import Animations from './animations.js';

function App() {
	const mathJaxConfig = {
		tex: {
			inlineMath: [['$', '$']],
			displayMath: [['$$', '$$']]
		}
	};
  return (
	<MathJaxContext 
		version={3}  
		src="/MathJax-master/es5/tex-mml-chtml.js" 
		config={mathJaxConfig}
	>
    	<div className='App'>
			<Animations />
			<MainContent />
    	</div>
	</MathJaxContext>
  );
}
export default App;