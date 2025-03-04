import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute1 = ({ children }) => {
  const token1 = localStorage.getItem("token1");

  if (!token1) {
    alert("Unauthorized! Please solve this.");
    return <Navigate to="/PuzzlePage" />;
  }
  return children;
};

export default ProtectedRoute1;