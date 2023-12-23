import React from "react";
const Airplane = ({ airplane }) => {
    var i = Math.random();
    if (i>=0.5) {
        i=1;
    }
    else {
        i=0;
    }
    const style = {
        position: 'fixed',
        left: `${Math.random()*100*i-5}vw`,
        top: `${Math.random()*100*(1-i)+i*100}vh`,
        fontSize: `${Math.random() * 1.5 + 0.5}rem`,
        animation: `aeroplaneFly 10s infinite linear`,
        animationDelay: `${Math.random()*4}s`
    };

    return (
        <div className="airplane" style={style}>
        {airplane}
        </div>
    );
};

export default Airplane;