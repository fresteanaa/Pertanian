import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterBuyerPage.css';

export default function RegisterBuyerPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    namaPengguna: '',
    noHp: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.namaPengguna.trim() || !form.noHp.trim()) {
      setError('Nama Pengguna dan No HP wajib diisi.');
      return;
    }

    sessionStorage.setItem('pending_registration', JSON.stringify({
      role: 'pembeli',
      ...form,
    }));

    navigate('/verifikasi-otp', {
      state: {
        role: 'pembeli',
        namaPengguna: form.namaPengguna,
        noHp: `+62${form.noHp}`,
        email: 'ra********@gmail.com',
      },
    });
  };

  return (
    <div className="register-buyer-page">
      {/* ─── Main Content ─── */}
      <main className="buyer-main">
        {/* Header Heading */}
        <div className="buyer-header">
          <h1 className="buyer-title">Daftar Sebagai Pembeli</h1>
          <p className="buyer-subtitle">
            Isi informasi berikut untuk membuat akun dan mulai terhubung langsung dengan petani lokal atau pelanggan.
          </p>
        </div>

        {/* Form Card */}
        <div className="buyer-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="buyer-card-body">
              {error && <div className="buyer-error-msg">{error}</div>}

              {/* 2 Kolom: Nama Pengguna & No HP */}
              <div className="buyer-two-col">
                <div className="buyer-field col-left">
                  <label htmlFor="namaPengguna" className="buyer-label">
                    Nama Pengguna :
                  </label>
                  <input
                    type="text"
                    id="namaPengguna"
                    name="namaPengguna"
                    value={form.namaPengguna}
                    onChange={handleChange}
                    className="buyer-input"
                    placeholder=""
                    autoComplete="username"
                    required
                  />
                </div>

                <div className="buyer-field col-right">
                  <label htmlFor="noHp" className="buyer-label">
                    No HP :
                  </label>
                  <div className="phone-input-group">
                    <div className="phone-prefix" title="Indonesia (+62)">
                      <span className="id-flag" aria-hidden="true">
                        <span className="flag-red"></span>
                        <span className="flag-white"></span>
                      </span>
                      <span className="prefix-code">(+62)</span>
                    </div>
                    <input
                      type="tel"
                      id="noHp"
                      name="noHp"
                      value={form.noHp}
                      onChange={handleChange}
                      className="phone-field-input"
                      placeholder="8123456789"
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator Divider */}
            <div className="buyer-card-divider" />

            {/* Bottom Actions */}
            <div className="buyer-card-footer">
              <Link to="/daftar" className="buyer-back-link">
                &larr; Ganti Role
              </Link>
              <button type="submit" className="btn-buyer-submit">
                Lanjutkan Mendaftar &rarr;
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="buyer-footer">
        <div className="buyer-footer-inner">
          <span className="footer-copy">@2024, PEHTANI, Ramayuda Mahardika</span>
          <div className="footer-links">
            <a href="#kebijakan">Kebijakan Privasi</a>
            <a href="#syarat">Syarat dan Ketentuan</a>
            <Link to="/bantuan">Bantuan &amp; Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

