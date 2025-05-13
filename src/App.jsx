import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage Components/Homepage";

function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
