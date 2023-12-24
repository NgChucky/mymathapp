import React from 'react';
import './App.css';
import MathJax from 'react-mathjax2';
import MainContent from './MainContent.js';
import Animations from './animations.js';

function App() {
  const mathJaxConfig = {
    tex2jax: {
      inlineMath: [['$', '$']],
      displayMath: [['$$', '$$']],
      processEscapes: true,
    },
    showProcessingMessages: false,
    messageStyle: 'none'
  };

  return (
    <MathJax.Context input='tex' onLoad={() => console.log("Loaded MathJax script!")} src="/MathJax-2.7.9/MathJax.js" options={mathJaxConfig}>
      <div className='App'>
        <Animations />
        <MainContent />
      </div>
    </MathJax.Context>
  );
}
export default App;