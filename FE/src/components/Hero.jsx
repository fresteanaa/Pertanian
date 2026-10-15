import React from 'react';
import UtilityBar from './UtilityBar';
import Navbar from './Navbar';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      {/* Top Utility Bar & Floating Navbar */}
      <UtilityBar />
      <Navbar />

      {/* Hero Main Content */}
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Sayuran &amp; Buah</span>
          <h1 className="hero-title">
            Platform Penjualan Hasil<br />
            Pertanian Langsung Dari Petani
          </h1>
          <p className="hero-description">
            Menghubungkan petani langsung dengan pembeli untuk menciptakan ekosistem pertanian yang lebih adil dan transparan. Petani dapat dengan mudah memasarkan hasil panen, dan pembeli dapat menemukan produk segar berkualitas langsung dari sumbernya.
          </p>
          <a href="#produk" className="btn-hero">
            Temukan Hasil Pertanian Segar
          </a>
        </div>
      </div>
    </section>
  );
}
