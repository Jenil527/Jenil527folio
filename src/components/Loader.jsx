import React, { useEffect } from 'react';
import './Loader.css';

function Loader({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const loadingText = "LOADING".split("");

  return (
    <div className="loader-container">
      <div className="loading-logo-container">
        <h1 className="loading-text">
          {loadingText.map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.5}s` }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Loader;
