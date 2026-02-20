import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';

import Header from './layouts/Header/Header';
import Sidebar from './layouts/Sidebar/Sidebar';
import Footer from './layouts/Footer/Footer';

// Synchronous load for above-the-fold content
import Home from './pages/Home/Home';

// Lazy load secondary pages for code splitting
const Products = lazy(() => import('./pages/Products/Products'));
const About = lazy(() => import('./pages/About/About'));
const Blog = lazy(() => import('./pages/Blog/Blog'));

// Loading fallback component
const PageLoader = () => null; // No fallback for minimize CLS

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  return (
    <Router>
      <ScrollToTop />
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={
            <Suspense fallback={<PageLoader />}>
              <Products />
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<PageLoader />}>
              <Blog />
            </Suspense>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}