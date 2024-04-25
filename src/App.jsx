import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/homepage/HomePage';
import About from './components/pages/about/About';
import Services from './components/pages/services/Services';
import Contact from './components/pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
