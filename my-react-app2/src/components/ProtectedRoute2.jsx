import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute2 = ({ children }) => {
  const token2 = localStorage.getItem("token2");

  if (!token2) {
    alert("Unauthorized! Please solve this.");
    return <Navigate to="/panda" />;
  }
  return children;
};

export default ProtectedRoute2;