import React, { useEffect, useRef } from 'react';
import './PathhhPage.css'; 

const PathhhPage = () => {
  const secretCommentRef = useRef(null);
  
  useEffect(() => {
    secretCommentRef.current = document.createComment('Secret endpoint: /final-treasure');
    document.body.appendChild(secretCommentRef.current);
    
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.display = 'none';
    hiddenDiv.innerHTML = '<!-- Congrats! You found it! Navigate to /final-treasure to claim your prize -->';
    document.body.appendChild(hiddenDiv);
    
    return () => {
      if (secretCommentRef.current) {
        document.body.removeChild(secretCommentRef.current);
      }
      document.body.removeChild(hiddenDiv);
    };
  }, []);

  return (
    <div className="pathhh-container">
      <header className="pathhh-header">
        <h1>The Hidden Chamber</h1>
        <p className="subtitle">You've entered a mysterious place...</p>
      </header>
      
      <section className="content-section">
        <div className="mysterious-text">
          <h2>Welcome, Explorer</h2>
          <p>You've successfully navigated through the first challenge, but your journey is far from over.</p>
         <p> Only by uncovering the next destination will you continue the journey. DESTINATION?????</p>
          <p>This chamber holds secrets that are not immediately visible to the eye.</p>
          <p>Look beneath the surface to discover the way forward.(The correct path awaits those who seek it, but beware — only the right path will lead you to the answer. There may be traps along the way, so proceed carefully and stay focused.)</p>
        </div>
        
        <div className="clue-container">
          <h3>A Riddle for the Curious</h3>
          <p className="riddle">
            "What sees without eyes and speaks without a mouth, reveals what's hidden yet remains unseen itself?"
          </p>
          <p className="hint"><span className="highlight">Inspect</span> your surroundings carefully.</p>
        </div>
        
        <div className="interactive-element">
          <button className="mystery-button">Does this do anything?</button>
          <div className="secret-message" style={{ display: 'none' }}>
            Not everything is as it seems. The true path is hidden in plain sight.
          </div>
        </div>
      </section>
      
      <footer className="pathhh-footer">
        <p>Sometimes the <span className="subtle-hint">developer tools</span> can reveal hidden truths.</p>
        <p className="copyright">© {new Date().getFullYear()} Secret Chamber Puzzles</p>
      </footer>
      
      <div id="hidden-element" style={{ position: 'absolute', left: '-9999px' }}>
        The next endpoint is carefully hidden in the HTML comments
      </div>
    </div>
  );
};

export default PathhhPage;