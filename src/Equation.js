import React from "react";
const Equation = ({ equation }) => {
    const style = {
      left: `${Math.random() * 80}vw`,
      top: `${Math.random() * 100}vh`,
      '--i': 'value', // Replace 'value' with appropriate logic or value
      animation: `fall ${Math.random() * 10 + 4}s linear infinite`,
    };

    return (
      <div className="equation" style={style}>
        {equation}
      </div>
    );
};
export default Equation;