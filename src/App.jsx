import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/fonts.css";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
