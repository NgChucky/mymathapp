import React  from "react";
const Emoji = ({ emoji }) => {
    const style = {
      position: `fixed`,
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      fontSize: `${1.2}rem`,
      animation: `shrinkEmojis ${Math.random()+0.5}s infinite alternate`,
      animationDelay: `${Math.random() * 2 + 1}s`,
    };

    return (
      <div className="emoji" style={style}>
        {emoji}
      </div>
    );
};

export default Emoji;