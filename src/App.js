
import Login from './components/Login'
import React from 'react';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
