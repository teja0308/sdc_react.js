import React, { useState, useEffect } from "react";
import "./HiddenTreasure.css";

const HiddenTreasure = () => {
  const [targetPoint, setTargetPoint] = useState({ x: 0, y: 0 });
  const [userX, setUserX] = useState("");
  const [userY, setUserY] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [treasureRevealed, setTreasureRevealed] = useState(false);
  const [distance, setDistance] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    const randomX = Math.floor(Math.random() * 200) + 100; 
    const randomY = Math.floor(Math.random() * 150) + 100; 
    setTargetPoint({ x: randomX, y: randomY });
    }, []);

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(0);
  };

  const getFeedback = (distance) => {
    if (distance < 10) return "🔥 Very hot! You're extremely close!";
    if (distance < 30) return "🔥 Hot! Getting closer!";
    if (distance < 50) return "🌡️ Warm! On the right track.";
    if (distance < 100) return "❄️ Cold, but you're moving in a direction.";
    return "🧊 Freezing! Try a completely different area.";
  };

  const checkCoordinates = () => {
    const x = parseInt(userX);
    const y = parseInt(userY);
    
    if (isNaN(x) || isNaN(y)) {
      alert("Please enter valid numbers for both X and Y coordinates.");
      return;
    }
    
    setAttempts(attempts + 1);
    
    if (x === targetPoint.x && y === targetPoint.y) {
      setShowBubble(true);
      setDistance(null);
    } else {
      const newDistance = calculateDistance(x, y, targetPoint.x, targetPoint.y);
      setDistance(newDistance);
    }
  };

  const handleBubbleClick = () => {
    setShowButton(true);
    setShowBubble(false);
  };

  const handleTreasureClick = () => {
    setTreasureRevealed(true);
  };

  const resetGame = () => {
    const randomX = Math.floor(Math.random() * 200) + 100;
    const randomY = Math.floor(Math.random() * 150) + 100;
    setTargetPoint({ x: randomX, y: randomY });
    setUserX("");
    setUserY("");
    setShowBubble(false);
    setShowButton(false);
    setTreasureRevealed(false);
    setDistance(null);
    setAttempts(0);
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  const renderGrid = () => {
    if (!showGrid) return null;
    
    const gridLines = [];
    for (let y = 50; y <= 350; y += 50) {
      gridLines.push(
        <div key={`h-${y}`} className="grid-line h-line" style={{ top: `${y}px` }}>
          <span className="grid-label">{y}</span>
        </div>
      );
    }
    for (let x = 50; x <= 350; x += 50) {
      gridLines.push(
        <div key={`v-${x}`} className="grid-line v-line" style={{ left: `${x}px` }}>
          <span className="grid-label">{x}</span>
        </div>
      );
    }
    return gridLines;
  };

  return (
    <div className="treasure-container">
      <h1>Find the Hidden Treasure! 🏆</h1>
      <p>🔍Enter the correct (X, Y) coordinates.</p>
      <p>Write a line in the source code to know the positional values</p>
      <div className="quiz-box">  
        <input
          type="number"
          placeholder="Enter X"
          value={userX}
          onChange={(e) => setUserX(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Y"
          value={userY}
          onChange={(e) => setUserY(e.target.value)}
        />
        <button onClick={checkCoordinates}>Dig Here!</button>
      </div>
      
      {distance && (
        <div className="distance-hint">
          <p>Distance from treasure: <strong>{distance} units</strong></p>
          <p>{getFeedback(distance)}</p>
        </div>
      )}
      
      <div className="attempt-counter">
        Attempts: {attempts}
      </div>
      
      <div className="treasure-map">
        {renderGrid()}
        
        {showBubble && (
          <div
            className="bubble"
            style={{ left: `${targetPoint.x}px`, top: `${targetPoint.y}px` }}
            onClick={handleBubbleClick}
          >
            🔍
          </div>
        )}
        
        {distance && userX && userY && (
          <div 
            className="user-guess"
            style={{ left: `${parseInt(userX)}px`, top: `${parseInt(userY)}px` }}
          ></div>
        )}
      </div>
      
      <div className="control-buttons">
        <button
          className="secondary-button"
          onClick={toggleGrid}
        >
          {showGrid ? "Hide Grid" : "Show Grid"}
        </button>
        
        <button
          className="secondary-button"
          onClick={resetGame}
        >
          New Treasure
        </button>
      </div>
      

      {showButton && (
        <div>
          <button 
            className="hidden-button"
            onClick={handleTreasureClick}
          >
            Open Treasure Chest 🎁
          </button>
        </div>
      )}

      {treasureRevealed && (
        <div className="congratulations">
          <h2 className="treasure">🎉 You found the treasure! 🎉</h2>
          <p>the theme is______</p>
        </div>
      )}
    </div>
  );
};

export default HiddenTreasure;