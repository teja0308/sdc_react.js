import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import systemConfig from '../../main';
const LoginPage = () => {
    const [token,setToken] = useState("");
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate();

    useEffect(()=>{
      localStorage.setItem("token",token);
    },[token]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setError('');
  
      const validCreds = getDeepCredentials();
  
      if (validCreds && userId === validCreds._uid && 
          password === validCreds._pwd) {
        alert('Welcome aboard, Space Explorer! 🚀');
        setToken("123");
        localStorage.setItem('3Clue','/sdc3');
        navigate('/PuzzlePage');
      } else {
        setError('Invalid credentials');
      }
    };
  
    const bubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 100 + 50),
      left: Math.floor(Math.random() * 100),
      duration: Math.floor(Math.random() * 10 + 5)
    }));
  
    return (
      <div className="login-container">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: bubble.size + 'px',
              height: bubble.size + 'px',
              left: bubble.left + '%',
              animationDuration: bubble.duration + 's'
            }}
          />
        ))}
        
        <div className="login-card">
          <h2 className="login-title">Galactic Portal Login 🌌</h2>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Explorer ID</label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your explorer ID"
              />
            </div>
            
            <div className="form-group">
              <label>Access Code</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your access code"
              />
            </div>
  
            {error && (
              <div className="error-message">
                <div className="error-icon"></div>
                <span>{error}</span>
              </div>
            )}
            
            <button type="submit" className="login-button">
              Initiate Portal Sequence
            </button>
            <p>Hint:A good path may reveal itself if you start where things begin and move onward.</p>
          </form>
        </div>
      </div>
    );
  };
  
  export default LoginPage;

 





















































































  const getDeepCredentials = () => {
     return {_uid:systemConfig.app.environment.settings.security.protocol.level,
        _pwd:systemConfig.app.environment.settings.security.protocol.level2
        }
  };

  