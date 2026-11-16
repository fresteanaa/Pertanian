import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import StepBar from './components/StepBar';
import FreshProduce from './components/FreshProduce';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';

import BuyerDashboardPage from './pages/BuyerDashboardPage';
import FarmerDashboardPage from './pages/FarmerDashboardPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import HelpContactPage from './pages/HelpContactPage';
import RegisterRolePage from './pages/RegisterRolePage';
import RegisterFarmerPage from './pages/RegisterFarmerPage';
import RegisterBuyerPage from './pages/RegisterBuyerPage';
import OtpVerificationPage from './pages/OtpVerificationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

// ─── Halaman Utama Landing Page ────────────────────────────────────────────
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
        {/* Halaman Landing / Beranda Publik */}
        <Route path="/" element={<HomePage />} />

        {/* 🌿 Fitur Beranda Petani (Role Petani) */}
        <Route path="/petani" element={<FarmerDashboardPage />} />
        <Route path="/beranda-petani" element={<FarmerDashboardPage />} />

        {/* 🛒 Fitur Pasar & Beranda Pembeli (Role Pembeli) */}
        <Route path="/pembeli" element={<BuyerDashboardPage />} />
        <Route path="/pasar" element={<BuyerDashboardPage />} />

        {/* Halaman Login / Masuk */}
        <Route path="/masuk" element={<LoginPage />} />

        {/* Halaman Pilih Role Pendaftaran */}
        <Route path="/daftar" element={<RegisterRolePage />} />

        {/* Halaman Pendaftaran Petani */}
        <Route path="/daftar/petani" element={<RegisterFarmerPage />} />

        {/* Halaman Pendaftaran Pembeli */}
        <Route path="/daftar/pembeli" element={<RegisterBuyerPage />} />

        {/* Halaman Verifikasi OTP */}
        <Route path="/verifikasi-otp" element={<OtpVerificationPage />} />

        {/* Halaman Tentang Kami */}
        <Route path="/tentang" element={<AboutPage />} />

        {/* Halaman Bantuan & Kontak / Pelaporan */}
        <Route path="/bantuan" element={<HelpContactPage />} />

        {/* Halaman Kebijakan Privasi */}
        <Route path="/kebijakan-privasi" element={<PrivacyPolicyPage />} />

        {/* Halaman Syarat dan Ketentuan */}
        <Route path="/syarat-ketentuan" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
