import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PrivacyPolicyPage.css';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="legal-page">
      {/* ─── Top Brand Header ─── */}
      <header className="legal-top-bar">
        <Link to="/" className="legal-brand-logo">
          <span className="logo-peh">peh</span>
          <span className="logo-tani">tani</span>
        </Link>
      </header>

      {/* ─── Secondary Nav / Action Bar ─── */}
      <div className="legal-nav-bar">
        <div className="container legal-nav-container">
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

          {/* Subnav links */}
          <nav className="legal-subnav-links">
            <Link to="/tentang" className="subnav-item">Tentang</Link>
            <Link to="/bantuan" className="subnav-item">Bantuan &amp; Kontak</Link>
            <Link to="/kebijakan-privasi" className="subnav-item active">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan" className="subnav-item">Syarat dan Ketentuan</Link>
          </nav>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="legal-main-content">
        <div className="container legal-container">
          <h1 className="legal-headline">
            Kebijakan privasi ini akan membantu Anda lebih memahami bagaimana kami mengumpulkan, menggunakan, dan membagikan informasi pribadi Anda
          </h1>

          <section className="legal-article">
            <h2 className="legal-section-title">Kebijakan Privasi</h2>

            <div className="legal-paragraphs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.
              </p>

              <p>
                Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="legal-footer">
        <div className="container legal-footer-inner">
          <span className="footer-copy">@2024, PEHTANI, Ramayuda Mahardika</span>
          <div className="footer-links">
            <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan">Syarat dan Ketentuan</Link>
            <Link to="/bantuan">Bantuan &amp; Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
