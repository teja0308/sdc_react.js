import React from "react"; 
import LoginPage from "./components/customHookss/LoginPage";
import PuzzlePage from "./components/customHookss/PuzzlePage";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import useGetPath from "./pages/useGetPath";
import useGetPath2 from "./pages/useGetPath2";
import PuzzleNavigation from "./components/customHookss/LockPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRoute1 from "./components/ProtectedRoute1";
import ProtectedRoute2 from "./components/ProtectedRoute2";
import HiddenTreasure from "./components/customHookss/HiddenTreasure";
import PathhhPage from "./components/customHookss/Path";
function App() {
  const {path} = useGetPath();
  const {path2} = useGetPath2();
  const encodedPath = 'L3BhdGhoaA=='; 
  const decodedPath = atob(encodedPath);
  return (
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route 
            path="/PuzzlePage" 
            element={
              <ProtectedRoute>
                <PuzzlePage />
              </ProtectedRoute>
            } 
          />
           <Route 
            path={decodedPath} 
            element={
              <ProtectedRoute1>
                <PathhhPage />
              </ProtectedRoute1>
            } 
          />
          <Route 
            path={path} 
            element={
              <ProtectedRoute1>
                <PuzzleNavigation />
              </ProtectedRoute1>
            } 
          />
          <Route 
            path={path2} 
            element={
              <ProtectedRoute2>
                <HiddenTreasure />
              </ProtectedRoute2>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
