import React, { useState } from 'react';
import './HelpContactPage.css';

export default function HelpContactPage() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  // Data FAQ Kolom Kiri
  const leftFaq = [
    {
      id: 'l1',
      question: 'Bagaimana cara mendaftar?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 'l2',
      question: 'Cara melakukan pemesanan?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 'l3',
      question: 'Bagaimana metode pembayaran?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  // Data FAQ Kolom Kanan
  const rightFaq = [
    {
      id: 'r1',
      question: 'Bagaimana cara mendaftar?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 'r2',
      question: 'Cara melakukan pemesanan?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
    {
      id: 'r3',
      question: 'Bagaimana metode pembayaran?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    },
  ];

  return (
    <div className="help-page">
      {/* ─── Top Brand Header ─── */}
      <header className="help-top-bar">
        <a href="/" className="help-brand-logo">
          <span className="logo-peh">peh</span>
          <span className="logo-tani">tani</span>
        </a>
      </header>

      {/* ─── Secondary Nav / Action Bar ─── */}
      <div className="help-nav-bar">
        <div className="container help-nav-container">
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
          <nav className="help-subnav-links">
            <a href="/tentang" className="subnav-item">Tentang</a>
            <a href="/bantuan" className="subnav-item active">Bantuan &amp; Kontak</a>
            <a href="#kebijakan" className="subnav-item">Kebijakan Privasi</a>
            <a href="#syarat" className="subnav-item">Syarat dan Ketentuan</a>
          </nav>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="help-main-content">
        <div className="container">
          {/* Section 1: Bantuan FAQ */}
          <section className="faq-section">
            <h1 className="help-section-title">Bantuan FAQ</h1>

            <div className="faq-grid">
              {/* Kolom 1 */}
              <div className="faq-column">
                <div className="faq-divider-top"></div>
                {leftFaq.map((item) => (
                  <div key={item.id} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                    <div className="faq-divider"></div>
                  </div>
                ))}
              </div>

              {/* Kolom 2 */}
              <div className="faq-column">
                <div className="faq-divider-top"></div>
                {rightFaq.map((item) => (
                  <div key={item.id} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                    <div className="faq-divider"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Hubungi Kami */}
          <section className="contact-section">
            <h2 className="help-section-title">Hubungi Kami</h2>
            <div className="contact-card">
              <div className="contact-divider-top"></div>
              <div className="contact-list">
                <div className="contact-row">
                  <span className="contact-label">Email:</span>
                  <a href="mailto:support@pehtani.com" className="contact-value">support@pehtani.com</a>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Telepon:</span>
                  <a href="tel:0800123456" className="contact-value">0800-123-456</a>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Instagram:</span>
                  <a href="https://instagram.com/pehtani.id" target="_blank" rel="noreferrer" className="contact-value">@pehtani.id</a>
                </div>
              </div>
              <div className="contact-divider-bottom"></div>
            </div>
          </section>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="help-footer">
        <div className="container help-footer-inner">
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

