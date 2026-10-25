import React from 'react';
import './UtilityBar.css';

export default function UtilityBar() {
  return (
    <div className="utility-bar">
      <div className="container utility-container">
        <div className="utility-links">
          <a href="/bantuan">Bantuan &amp; Kontak</a>
          <a href="#kebijakan">Kebijakan Privasi</a>
          <a href="#syarat">Syarat dan Ketentuan</a>
        </div>
        <div className="utility-actions">
          <a href="/daftar" className="btn-utility-outline">Buat Akun</a>
          <a href="/masuk" className="btn-utility-solid">Masuk</a>
        </div>
      </div>
    </div>
  );
}
