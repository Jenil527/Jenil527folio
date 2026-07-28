import React, { useEffect, useState } from 'react';
import './Loader.css';

function Loader({ onFinish }) {
  const text = "WELCOME";
  const [displayText, setDisplayText] = useState(Array(text.length).fill(""));
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => prev.map((_, index) => {
        if (index < iterations) {
          return text[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      }));

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      
      iterations += 1 / 4; 
    }, 40); // 40ms interval

    // Finishes roughly around the time the text fully resolves
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 2500); 

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div className="loader-container">
      <div className="loading-logo-container">
        <h1 className="loading-text">
          {displayText.map((char, index) => (
            <span key={index} className={char === text[index] ? 'resolved' : 'unresolved'}>
              {char}
            </span>
          ))}
        </h1>
        <div className="loading-bar"></div>
      </div>
    </div>
  );
}

export default Loader;
