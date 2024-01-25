import React from 'react';
import './Suggestion.css';

const Suggestion = ({ setPrompt }) => {
  const handleButtonClick = (promptText) => {
    setPrompt(promptText);
  };

  return (
    <div className="container">
      <div className="suggestion">
        <div className="text">
          <p>Hey, Can I write a cover letter for you?</p>
        </div>
        <div className="btns">
          <button className="button" onClick={() => handleButtonClick("Hey, write a cover letter for me?")}>+</button>
          <span className="backdrop"></span>
        </div>
      </div>
      
      <div className="suggestion">
        <div className="text">
          <p>Hey, can I help you in your code?</p>
        </div>
        <div className="btns">
          <button className="button" onClick={() => handleButtonClick("Hey, help me in my code?")}>+</button>
          <span className="backdrop"></span>
        </div>
      </div>
      
      <div className="suggestion">
        <div className="text">
          <p>Hey, I can help you to make a new project!!!</p>
        </div>
        <div className="btns">
          <button className="button" onClick={() => handleButtonClick("Hey, can you help me to make a new project!!!")}>+</button>
          <span className="backdrop"></span>
        </div>
      </div>
      
      <div className="suggestion">
        <div className="text">
          <p>Do You want any help to debug your code?</p>
        </div>
        <div className="btns">
          <button className="button" onClick={() => handleButtonClick("will You help me to debugmy code?")}>+</button>
          <span className="backdrop"></span>
        </div>
      </div>
      
      <div className="suggestion">
        <div className="text">
          <p>Do you need any help?</p>
        </div>
        <div className="btns">
          <button className="button" onClick={() => handleButtonClick("Do you need any help?")}>+</button>
          <span className="backdrop"></span>
        </div>
      </div>
    </div>
  );
}

export default Suggestion;
