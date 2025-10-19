import React from "react";
// ✅ CORRECT: Import Routes and Route, but NOT BrowserRouter
import { Routes, Route } from "react-router-dom";

// Import your page and layout components
import Work from './pages/Work';
import Info from './pages/Info';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // ✅ Use a React Fragment instead of the extra Router
    <>
      
      <Routes>
        <Route path="/" element={<Work />} />      {/* Homepage */}
        <Route path="/info" element={<Info />} />  {/* Info page */}
      </Routes>
     
    </>
  );
}

export default App;

