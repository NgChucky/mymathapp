import React, { useState, useEffect } from 'react';
import { MathJax } from "better-react-mathjax";
import Equation from './Equation.js';
import Airplane from './Airplane.js';
import Emoji from './Emoji.js';

function Animations()
{
    const [emojis, setEmojis] = useState([]);
    const [equations, setEquations] = useState([]);
    const [aeroplanes, setAeroplanes] = useState([]);

    useEffect(() => {
    generateEmojis();
    generateRandomEquation();
    generateAeroplanes();

    // Cleanup logic if necessary
    return () => {
        // Cleanup logic here if needed
    };
    }, []);

    const generateEmojis = () => {
    const emojisList =  ['😂', '😜', '🤣', '😆', '🥳', '😎', '🤩', '😍', '🤓', '😇', '🤔', '😬', '🙄', '😌', '🥺', '😏', '😻', '👀', '🌟', '💫'];
    const numEmojis = 30;
    const generatedEmojis = Array.from({ length: numEmojis }, () => emojisList[Math.floor(Math.random() * emojisList.length)]);
    setEmojis(generatedEmojis);
    };

    const generateRandomEquation = () => {
    const equationsList = [
        <MathJax>{" $$ E=mc^2 $$ " }</MathJax>,
        <MathJax>{" $$ F = ma $$ " }</MathJax>,
        <MathJax>{" $$ \\nabla \\cdot \\vec{E} = \\frac{\\rho}{\\epsilon_0} $$ " }</MathJax>,
        <MathJax>{" $$ \\int_a^b f(x) \\,dx = F(b) - F(a)  $$ " }</MathJax>,
        <MathJax>{" $$  PV = nRT  $$ " }</MathJax>,
        <MathJax>{" $$ \\vec{F} = q(\\vec{E} + \\vec{v} \\times \\vec{B}) $$ " }</MathJax>,
        <MathJax>{" $$ \\frac{d}{dx}(e^x) = e^x $$ " }</MathJax>,
        <MathJax>{" $$ \\frac{d}{dx}(\\sin x) = \\cos x $$ " }</MathJax>,
        <MathJax>{" $$ \\frac{d}{dx}(\\cos x) = -\\sin x $$ " }</MathJax>,
        <MathJax>{" $$ \\Delta x \\Delta p \\geq \\frac{\\hbar}{2} $$ " }</MathJax>,
        <MathJax>{" $$ \\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot d\\vec{S} $$ " }</MathJax>,
        <MathJax>{" $$ \\frac{d^2y}{dx^2} + p(x)\\frac{dy}{dx} + q(x)y = 0 $$ " }</MathJax>,
        <MathJax>{" $$ \\hat{H}\\Psi = E\\Psi $$ " }</MathJax>,
        <MathJax>{" $$ \\frac{\\partial^2 u}{\\partial t^2} = c^2\\nabla^2 u $$ " }</MathJax>,
    ];
    const numEquations = 11;
    const generatedEquations = Array.from({ length: numEquations }, () => equationsList[Math.floor(Math.random() * equationsList.length)]);
    setEquations(generatedEquations);
    };

    const generateAeroplanes = () => {
    const aeroplanesList = ['✈️'];
    const numAeroplanes = 20;
    const generatedAeroplanes = Array.from({ length: numAeroplanes }, () => aeroplanesList[0]);
    setAeroplanes(generatedAeroplanes);
    };

    return (
    <div className="App">
        {emojis.map((emoji, index) => (
        <Emoji key={index} emoji={emoji} />
        ))}

        {equations.map((equation, index) => (
        <Equation key={index} equation={equation} />
        ))}

        {aeroplanes.map((aeroplane, index) => (
        <Airplane key={index} airplane={aeroplane} />
        ))}
    </div>
    );
}
export default Animations;