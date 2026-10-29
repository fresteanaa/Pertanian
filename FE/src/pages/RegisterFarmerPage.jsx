import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterFarmerPage.css';

export default function RegisterFarmerPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    namaPengguna: '',
    namaUsaha: '',
    provinsiUsaha: '',
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

    // Simpan informasi registrasi sementara ke sessionStorage untuk OTP
    sessionStorage.setItem('pending_registration', JSON.stringify({
      role: 'petani',
      ...form,
    }));

    // Navigasi ke verifikasi OTP
    navigate('/verifikasi-otp', {
      state: {
        role: 'petani',
        namaPengguna: form.namaPengguna,
        noHp: `+62${form.noHp}`,
        email: 'ra********@gmail.com',
      },
    });
  };

  return (
    <div className="register-farmer-page">
      {/* ─── Main Content ─── */}
      <main className="farmer-main">
        {/* Header Heading */}
        <div className="farmer-header">
          <h1 className="farmer-title">Daftar Sebagai Petani</h1>
          <p className="farmer-subtitle">
            Isi informasi berikut untuk membuat akun dan mulai terhubung langsung dengan petani lokal atau pelanggan.
          </p>
        </div>

        {/* Form Card */}
        <div className="farmer-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="farmer-card-body">
              {error && <div className="farmer-error-msg">{error}</div>}

              {/* Field 1: Nama Pengguna */}
              <div className="farmer-field">
                <label htmlFor="namaPengguna" className="farmer-label">
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  id="namaPengguna"
                  name="namaPengguna"
                  value={form.namaPengguna}
                  onChange={handleChange}
                  className="farmer-input"
                  placeholder=""
                  autoComplete="username"
                  required
                />
              </div>

              {/* Field 2: Nama Usaha */}
              <div className="farmer-field">
                <label htmlFor="namaUsaha" className="farmer-label">
                  Nama Usaha :
                </label>
                <input
                  type="text"
                  id="namaUsaha"
                  name="namaUsaha"
                  value={form.namaUsaha}
                  onChange={handleChange}
                  className="farmer-input"
                  placeholder=""
                />
              </div>

              {/* Field 3 & 4: 2 Kolom (Provinsi Usaha & No HP) */}
              <div className="farmer-two-col">
                <div className="farmer-field col-left">
                  <label htmlFor="provinsiUsaha" className="farmer-label">
                    Provinsi Usaha :
                  </label>
                  <input
                    type="text"
                    id="provinsiUsaha"
                    name="provinsiUsaha"
                    value={form.provinsiUsaha}
                    onChange={handleChange}
                    className="farmer-input"
                    placeholder=""
                  />
                </div>

                <div className="farmer-field col-right">
                  <label htmlFor="noHp" className="farmer-label">
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
            <div className="farmer-card-divider" />

            {/* Bottom Actions */}
            <div className="farmer-card-footer">
              <Link to="/daftar" className="farmer-back-link">
                &larr; Ganti Role
              </Link>
              <button type="submit" className="btn-farmer-submit">
                Lanjutkan Mendaftar &rarr;
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="farmer-footer">
        <div className="farmer-footer-inner">
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

