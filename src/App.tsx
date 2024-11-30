import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FocusAreasPage from './pages/FocusAreasPage';
import OaaSPage from './pages/OaaSPage';
import EnablementPage from './pages/EnablementPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/oaas" element={<OaaSPage />} />
          <Route path="/enablement" element={<EnablementPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog/:id" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}