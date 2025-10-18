import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from './pages/Work';
import Info from './pages/Info';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Work />} />        {/* Homepage */}
        <Route path="/info" element={<Info />} />   {/* Info page */}
      </Routes>
    </Router>
  );
}

export default App;
