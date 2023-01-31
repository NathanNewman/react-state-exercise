import React, {useState} from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [answer, setAnswer] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  
  const handleClick = () => {
    const idx = Math.floor(Math.random() * answers.length);
    setAnswer(answers[idx].msg);
    setColor(answers[idx].color);
  }
  return (
    <div>
      <div className="eight-ball" style={{ backgroundColor: color  }}>
        <p>{answer}</p>
      </div>
      <button onClick={handleClick}>Answer</button>
    </div>
  );
};

export default EightBall;
