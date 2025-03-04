import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)








































































































const systemConfig = {
  app: {
    version: '1.0.0',
    environment: {
      type: 'production',
      settings: {
        security: {
          protocol: {
            level: "high",
            level2: "high2",
            encryption: {
              method: 'AES-256',
              validators: {
                primary: {
                  authorization: {
                    tokens: {
                      master: {
                        vault: {
                          credentials: {
                            _uid: "admin",
                            _pwd: "admin"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
export default systemConfig;