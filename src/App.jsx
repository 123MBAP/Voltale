import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import FloatingNav from './components/FloatingNav';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import LoadingIntro from './components/LoadingIntro';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-ink antialiased relative">
      {/* Subtle Analog Noise Texture */}
      <div className="noise-overlay" />

      {/* Cinematic Branded Intro */}
      <LoadingIntro />

      {/* High-Tech Custom Cursor */}
      <CustomCursor />

      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress />

      <ScrollToTop />
      <FloatingNav />
      <WhatsAppButton />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}