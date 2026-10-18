import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import StepBar from './components/StepBar';
import FreshProduce from './components/FreshProduce';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';

// ─── Halaman Utama ─────────────────────────────────────────────────────────
function HomePage() {
  return (
    <>
      <Hero />
      <StepBar />
      <FreshProduce />
      <AboutSection />
      <StatsSection />
      <FeatureCards />
      <Footer />
    </>
  );
}

// ─── Aplikasi Utama dengan Routing ──────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Landing / Beranda */}
        <Route path="/" element={<HomePage />} />

        {/* Halaman Login */}
        <Route path="/masuk" element={<LoginPage />} />

        {/* Halaman Daftar — akan dibuat berikutnya */}
        {/* <Route path="/daftar" element={<RegisterPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
