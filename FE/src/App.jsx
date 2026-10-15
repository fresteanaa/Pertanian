import React from 'react';
import Hero from './components/Hero';
import StepBar from './components/StepBar';
import FreshProduce from './components/FreshProduce';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import FeatureCards from './components/FeatureCards';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-root">
      {/* 1. Hero Section with UtilityBar & Floating Navbar */}
      <Hero />

      {/* 2. Step Process Floating Bar */}
      <StepBar />

      {/* 3. Fresh Produce (Sayuran Segar) */}
      <FreshProduce />

      {/* 4. About / Callout (Dapatkan sayuran segar dari rumah Anda) */}
      <AboutSection />

      {/* 5. Statistics Counters */}
      <StatsSection />

      {/* 6. Feature / Education Cards */}
      <FeatureCards />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
