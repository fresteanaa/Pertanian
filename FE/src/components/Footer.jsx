import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-container">
        <div className="footer-copyright">
          @2024, PEHTANI, Ramayuda Mahardika
        </div>
        <div className="footer-links">
          <a href="#kebijakan">Kebijakan Privasi</a>
          <a href="#syarat">Syarat dan Ketentuan</a>
          <a href="#bantuan">Bantuan &amp; Kontak</a>
        </div>
      </div>
    </footer>
  );
}
