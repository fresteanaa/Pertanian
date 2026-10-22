import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="about-page">
      {/* ─── Top Brand Header ─── */}
      <header className="about-top-bar">
        <a href="/" className="about-brand-logo">
          <span className="logo-peh">peh</span>
          <span className="logo-tani">tani</span>
        </a>
      </header>

      {/* ─── Secondary Nav / Action Bar ─── */}
      <div className="about-nav-bar">
        <div className="container about-nav-container">
          {/* Back button */}
          <button type="button" className="btn-back" onClick={handleBack}>
            <span className="btn-back-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
              </svg>
            </span>
            <span className="btn-back-text">Kembali</span>
          </button>

          {/* Nav links */}
          <nav className="about-subnav-links">
            <a href="/tentang" className="subnav-item active">Tentang</a>
            <a href="#bantuan" className="subnav-item">Bantuan &amp; Kontak</a>
            <a href="#kebijakan" className="subnav-item">Kebijakan Privasi</a>
            <a href="#syarat" className="subnav-item">Syarat dan Ketentuan</a>
          </nav>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="about-main-content">
        <div className="container about-grid">
          {/* Left Column: Image Collage */}
          <div className="about-collage">
            <div className="collage-left">
              <img
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80"
                alt="Petani di dalam greenhouse sayuran"
                className="img-tall"
              />
            </div>
            <div className="collage-right">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
                alt="Lahan pertanian dan rumah di bukit hijau"
                className="img-top"
              />
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=700&q=80"
                alt="Ladang tanaman jagung di waktu senja"
                className="img-bottom"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="about-info-col">
            <h1 className="about-title">
              Platform Pemasaran<br />
              Hasil Pertanian
            </h1>

            <div className="about-paragraphs">
              <p>
                Platform ini menghubungkan petani langsung dengan konsumen (B2C) dan bisnis lain (B2B), memungkinkan petani menjual hasil panen tanpa perantara, yang meningkatkan keuntungan mereka dan menurunkan harga bagi konsumen.
              </p>

              <p>
                Transparansi pasokan juga tercipta melalui informasi stok, kualitas, dan harga secara real-time, memudahkan pengguna melihat ketersediaan produk dan profil petani.
              </p>

              <p>
                Fitur pra-pemesanan membantu petani mengelola permintaan sebelum panen, mengurangi surplus atau kekurangan. Dukungan pembelian lokal mengurangi biaya dan emisi logistik, menciptakan rantai distribusi yang lebih singkat.
              </p>

              <p>
                Platform ini juga menyediakan edukasi dan komunitas untuk meningkatkan keterampilan petani serta data penting untuk analisis hasil panen dan tren penjualan, mendukung pengambilan keputusan di sektor pertanian.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="about-footer">
        <div className="container about-footer-inner">
          <span className="footer-copy">@2024, PEHTANI, Ramayuda Mahardika</span>
          <div className="footer-links">
            <a href="#kebijakan">Kebijakan Privasi</a>
            <a href="#syarat">Syarat dan Ketentuan</a>
            <a href="#bantuan">Bantuan &amp; Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
