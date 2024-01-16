import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Layouts/Navbar";
import Home from "./Layouts/Home/Home";
import Search from "./Layouts/Search";

function App() {
  return (
  <div className="App">
  <Router>
  <Routes>
  <Route path="/" element={ <><Navbar /><Home /></>} />
  <Route path="/Search" element={<><Navbar /><Search /></>} />
  </Routes>
  </Router>
  </div>
);
}

export default App;
