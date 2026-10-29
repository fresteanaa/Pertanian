import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterRolePage.css';

export default function RegisterRolePage() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleContinue = () => {
    if (selectedRole) {
      navigate(`/daftar/${selectedRole}`);
    }
  };

  return (
    <div className="register-role-page">
      {/* ─── Main Content ─── */}
      <main className="role-main">
        <div className="role-container">
          <div className="role-header">
            <h1 className="role-title">Daftar Sebagai</h1>
            <p className="role-subtitle">
              Silakan pilih jenis akun yang sesuai untuk kebutuhan Anda. Setiap akun memiliki akses yang berbeda dalam menggunakan platform ini.
            </p>
          </div>

          <div className="role-cards-grid">
            {/* ─── Card 1: Petani ─── */}
            <div
              className={`role-card ${selectedRole === 'petani' ? 'selected' : ''}`}
              onClick={() => handleSelect('petani')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect('petani')}
            >
              <div className="role-icon-wrap">
                <svg
                  className="role-svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Topi Petani */}
                  <path d="M16 26c0-6 5-10 12-10s12 4 12 10" />
                  <path d="M10 26h36" />
                  <path d="M22 16c2-4 8-4 12 0" />

                  {/* Kepala & Wajah */}
                  <path d="M20 26v4a8 8 0 0 0 16 0v-4" />
                  {/* Mata & Senyum */}
                  <circle cx="25" cy="30" r="1" fill="currentColor" />
                  <circle cx="31" cy="30" r="1" fill="currentColor" />
                  <path d="M26 33c1 1 3 1 4 0" />

                  {/* Leher & Baju */}
                  <path d="M25 38v3" />
                  <path d="M31 38v3" />
                  <path d="M18 48c0-5 4-7 10-7s10 2 10 7" />

                  {/* Tali Suspender / Baju Kodok */}
                  <path d="M24 41v15" />
                  <path d="M32 41v15" />

                  {/* Garpu Tanah (Pitchfork) */}
                  <path d="M47 30v26" />
                  <path d="M43 30v7a4 4 0 0 0 8 0v-7" />
                  <path d="M47 30v7" />
                </svg>
              </div>
              <h2 className="role-name">Petani</h2>
            </div>

            {/* ─── Card 2: Pembeli ─── */}
            <div
              className={`role-card ${selectedRole === 'pembeli' ? 'selected' : ''}`}
              onClick={() => handleSelect('pembeli')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleSelect('pembeli')}
            >
              <div className="role-icon-wrap">
                <svg
                  className="role-svg"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* User Profile - Kepala */}
                  <circle cx="28" cy="22" r="9" />
                  {/* User Profile - Bahu / Badan */}
                  <path d="M12 48c0-8 7-14 16-14" />

                  {/* Keranjang Belanja (Shopping Cart) */}
                  <circle cx="48" cy="40" r="10" />
                  <path d="M43 36h1.5l1.8 6h5.2l1.5-4.5H45" />
                  <circle cx="46.5" cy="44" r="1" fill="currentColor" />
                  <circle cx="51.5" cy="44" r="1" fill="currentColor" />
                </svg>
              </div>
              <h2 className="role-name">Pembeli</h2>
            </div>
          </div>

          {selectedRole && (
            <div className="role-feedback-box">
              <p>
                Anda memilih mendaftar sebagai <strong>{selectedRole === 'petani' ? 'Petani' : 'Pembeli'}</strong>.
              </p>
              <button
                type="button"
                className="btn-continue"
                onClick={handleContinue}
              >
                Lanjutkan Pendaftaran &rarr;
              </button>
            </div>
          )}

          <div className="role-footer-help">
            <span>Sudah memiliki akun? </span>
            <a href="/masuk" className="link-login">Masuk Disini</a>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="role-footer">
        <div className="container role-footer-inner">
          <span className="footer-copy">@2024, PEHTANI, Ramayuda Mahardika</span>
          <div className="footer-links">
            <a href="#kebijakan">Kebijakan Privasi</a>
            <a href="#syarat">Syarat dan Ketentuan</a>
            <a href="/bantuan">Bantuan &amp; Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

