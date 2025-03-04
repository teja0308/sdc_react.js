import React, { useState,useEffect } from 'react';
import './lockpage.css';
import { useNavigate } from 'react-router-dom';

const PuzzleNavigation = () => {
  const [puzzleStage, setPuzzleStage] = useState(0);
  const [secretCode, setSecretCode] = useState('');
  const [message, setMessage] = useState('Solve the web development riddles to unlock the hidden endpoint!');
  const [token2,setToken2] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
            localStorage.setItem("token2",token2);
       },[token2]);

  const puzzles = [
    {
      riddle: "I make pages come alive with behavior, but I'm not HTML or CSS. What am I?",
      answerCheck: (input) => btoa(input.toLowerCase().trim()) === "amF2YXNjcmlwdA==",
      hint: "I start with 'J' and I handle events and interactivity"
    },
    {
      riddle: "I'm the art of making websites look good on phones, tablets, and desktops. What am I?",
      answerCheck: (input) => btoa(input.toLowerCase().trim()) === "cmVzcG9uc2l2ZQ==",
      hint: "Websites need to be this to work well on different screen sizes"
    },
    {
      riddle: "I store small pieces of data in the user's browser that persist even after the page is closed. What am I?",
      answerCheck: (input) => btoa(input.toLowerCase().trim()) === "Y29va2llcw==",
      hint: "Browsers love to save these sweet data morsels"
    }
  ];
  
  const handleCodeSubmit = (e) => {
    e.preventDefault();
    
    if (puzzles[puzzleStage].answerCheck(secretCode)) {
      if (puzzleStage < puzzles.length - 1) {
        setPuzzleStage(puzzleStage + 1);
        setMessage(`Correct! ${puzzleStage + 1}/3 puzzles solved. On to the next one!`);
      } else {
         setToken2("567");
        setMessage('🎉 Congratulations! You\'ve unlocked the hidden endpoint! Redirecting...');
        setTimeout(() => {
          navigate("/hidden-treasure");
        }, 3000);
      }
      setSecretCode('');
    } else {
      setMessage('Incorrect! Try again or use a hint.');
    }
  };
  const getHint = () => {
    setMessage(`Hint: ${puzzles[puzzleStage].hint}`);
  };
  
  return (
    <div className="puzzle-container">
      <div className="icon-wrapper">
        {puzzleStage < puzzles.length ? `🔒 ${puzzleStage}/3` : '🔓 3/3'}
      </div>
      
      <h2 className="puzzle-title">Web Dev Puzzle Challenge</h2>
      <h4>""""only use ascii characters from 97 to 122""""</h4>
      <h4>.</h4>
      {puzzleStage < puzzles.length ? (
        <>
          <p className="puzzle-riddle">
            {puzzles[puzzleStage].riddle}
          </p>
          
          <form onSubmit={handleCodeSubmit} className="puzzle-form">
            <input
              type="text"
              value={secretCode}
              onChange={(e) => setSecretCode(e.target.value)}
              placeholder="Enter your answer"
              className="puzzle-input"
            />
            
            <div className="button-wrapper">
              <button
                type="submit"
                className="submit-btn"
              >
                Submit Answer
              </button>
              
              <button
                type="button"
                onClick={getHint}
                className="hint-btn"
              >
                Get Hint
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="success-message">
          <p>🏆 All Web Dev Puzzles Solved!</p>
        </div>
      )}
      
      <div className="message-wrapper">
        <p className={`message ${message.includes('Congratulations') ? 'success' : 
           message.includes('Incorrect') ? 'error' : 
           message.includes('Correct') ? 'success' : 'default'}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default PuzzleNavigation;