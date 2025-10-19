import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // <-- ADD THIS IMPORT
import './index.css';

// Define the base path for GitHub Pages deployment
const repoName = '/PORTFOLIO-WEBSITE/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={repoName}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);