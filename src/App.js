import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// import Favourites from './components/Favourites';
import Home from './components/Home';
import Market from './components/Market';
import Navbar from './components/Navbar';
function App() {
  
  
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
        </Routes>
    </Router>
  );
}

export default App;
