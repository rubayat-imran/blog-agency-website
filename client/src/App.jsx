import React from 'react'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage.jsx';
import LoginPage from './page/LoginPage.jsx';
import BlogsPage from './page/BlogsPage.jsx';
import AboutPage from './page/AboutPage.jsx';
import ServicesPage from './page/ServicesPage.jsx';
import ContactPage from './page/ContactPage.jsx';
import DashBoardPage from './page/DashBoardPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
