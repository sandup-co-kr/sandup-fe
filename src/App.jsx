import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
