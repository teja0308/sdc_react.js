import React, { useState, useEffect, useRef } from 'react';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import './puzzlepage.css';
import pathss from './pathss';
import { useNavigate } from 'react-router-dom';

const PuzzlePage = () => {
    const [clickCount, setClickCount] = useState(0);
    const [hoveredTime, setHoveredTime] = useState(0);
    const [puzzleSolved, setPuzzleSolved] = useState(false);
    const [puzzleAnswer, setPuzzleAnswer] = useState('');
    const [token1,setToken1] = useState("");
    const navigate = useNavigate();
    
    const MINIMUM_CLICK_COUNT = calculateMinimumClicks();
    
    const commentRef = useRef(null);
    const ans = pathss();

     useEffect(()=>{
          localStorage.setItem("token1",token1);
     },[token1]);
    
    useEffect(() => {
        commentRef.current = document.createComment(ans);
        document.body.appendChild(commentRef.current);
        
        return () => {
            if (commentRef.current) {
                document.body.removeChild(commentRef.current);
            }
        };
    }, []);
    
    const Pagess= () => {
        const encodedPath = 'L3BhdGhoaA=='; 
        const decodedPath = atob(encodedPath); 
        setToken1("345");
        navigate(decodedPath); 
    };
    
    
    const checkPuzzleAnswer = () => {
        const userInput = puzzleAnswer.trim();
        if (userInput.length === 1 && userInput.charCodeAt(0) === 55) {
            setPuzzleSolved(true);
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrapper">
                <div className="header-section">
                    <h1 className="title">Interactive Curiosities</h1>
                    <p className="subtitle">Move around and explore...things might not be as straight as you see</p>
                    <p className="subtitle">Everything falls into place automatically when you take the right step</p>
                </div>

                <div className="puzzle-container">
                    <h3>Solve the riddle to find the magic number:</h3>
                    <p>"Take the last digit, double it, and subtract it from the rest. Keep going, and soon you'll find the number that divides perfectly."</p>
                    
                    <div className="puzzle-input">
                        <input 
                            type="text" 
                            value={puzzleAnswer} 
                            onChange={(e) => setPuzzleAnswer(e.target.value)}
                            placeholder="Enter answer"
                        />
                        <button onClick={checkPuzzleAnswer}>Check</button>
                    </div>
                    
                    {puzzleSolved && (
                        <div className="puzzle-solved">
                            <p>Correct! Now you know the minimum clicks needed.</p>
                        </div>
                    )}
                </div>

                <div className="interactive-grid">
                    <div 
                        className="click-counter" 
                        onClick={() => setClickCount(prev => prev + 1)}
                    >
                        <div className="icon-text">
                            <TagFacesIcon />
                            <span className="counter-title">Try hovering for 2 seconds...</span>
                        </div>
                    </div>

                    <div 
                        className="hidden-surprise" 
                        onMouseEnter={() => setHoveredTime(Date.now())}
                        onMouseLeave={() => {
                            if (Date.now() - hoveredTime > 1500 && clickCount >= MINIMUM_CLICK_COUNT) {
                                Pagess();
                            }
                        }}
                    >
                        <p className="hover-text">Click counter</p>
                        <p className="counter-value">Clicks: {clickCount}</p>
                    </div>
                </div>

                <div className="hidden-text">You found the hidden text! Keep exploring...</div>
                <div className="moving-elements">
                    <StarIcon />
                    <FavoriteIcon />
                </div>
            </div>
        </div>
    );
};

export default PuzzlePage;

const calculateMinimumClicks = () => {
    let result = 50;
    result = result + 10;
    result = result - 5;
    result = result / 5;
    result = result * 3;
    result = result - 15;
    result = result / 2;
    result = result + 4;
    result = result - 6;
    result = result + 1;
    result = result - 1;
    result = result + 2;
    result = result - 2;
    result = result * 2;
    result = result / 2;
    result = result + 3;
    result = result - 3;
    result = result + 5;
    result = result - 5;
    result = result * 2;
    result = result / 2;
    result = result + 6;
    result = result - 6;
    result = result + 7;
    result = result - 7;
    result = result + 8;
    result = result - 8;
    result = result * 2;
    result = result / 2;
    result = result + 1;
    result = result - 1;
    result = result * 2;
    result = result / 2;
    result = result + 3;
    result = result - 3;
    result = result * 2;
    result = result / 2;
    result = result + 4;
    result = result - 4;
    result = result + 2;
    result = result - 2;
    result = result * 2;
    result = result / 2;
    result = result + 5;
    result = result - 5;
    result = result + 1;
    result = result - 1;

    return result;
};