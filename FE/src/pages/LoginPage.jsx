import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Email dan kata sandi wajib diisi.');
      return;
    }
    setLoading(true);
    try {
      // TODO: Ganti URL ini dengan endpoint backend nyata
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });
      if (!res.ok) throw new Error('Email atau kata sandi salah.');
      const data = await res.json();
      localStorage.setItem('token', data.access_token);
      window.location.href = '/'; // Arahkan ke halaman utama
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* ─── Navbar Minimal ─── */}
      <header className="login-navbar">
        <a href="/" className="login-logo">
          <span className="logo-peh">peh</span>
          <span className="logo-tani">tani</span>
        </a>
      </header>

      {/* ─── Main Content ─── */}
      <main className="login-main">
        <div className="login-heading">
          <h1>Masuk Ke Akun Anda</h1>
          <p>Silahkan Masukkan Email dan Kata Sandi Anda</p>
        </div>

        <div className="login-card">
          {/* ─── Tombol Sosial ─── */}
          <div className="login-social-row">
            <button type="button" className="btn-social btn-google">
              <svg viewBox="0 0 48 48" width="20" height="20">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Google
            </button>
            <button type="button" className="btn-social btn-facebook">
              <svg viewBox="0 0 32 32" width="20" height="20" fill="#1877F2">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 8.013 5.865 14.655 13.547 15.82V20.625H9.5V16h4.047v-3.35c0-3.993 2.378-6.2 6.017-6.2 1.743 0 3.566.312 3.566.312v3.924h-2.008c-1.979 0-2.597 1.228-2.597 2.488V16h4.422l-.707 4.625H18.52V31.82C26.135 30.655 32 24.013 32 16 32 7.163 24.837 0 16 0z"/>
              </svg>
              Facebook
            </button>
          </div>

          {/* ─── Divider ─── */}
          <div className="login-divider" />

          {/* ─── Form ─── */}
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="login-error">{error}</div>}

            <div className="login-field">
              <label htmlFor="email">Email atau Nomor HP :</label>
              <input
                id="email"
                name="email"
                type="text"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                placeholder=""
              />
            </div>

            <div className="login-field">
              <label htmlFor="password">Kata Sandi :</label>
              <div className="input-password-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder=""
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="login-forgot">
              Lupa Kata Sandi?{' '}
              <a href="/lupa-kata-sandi">Klik Disini</a>
            </div>
          </form>

          {/* ─── Divider ─── */}
          <div className="login-divider" />

          {/* ─── Bottom Action Bar ─── */}
          <div className="login-actions">
            <span className="login-register-text">
              Belum Punya Akun?{' '}
              <a href="/daftar">Daftar Disini</a>
            </span>
            <button
              type="submit"
              className="btn-masuk"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Memuat...' : 'Masuk Akun'}
              {!loading && <span className="btn-arrow">→</span>}
            </button>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="login-footer">
        <div className="login-footer-inner">
          <span>@2024, PEHTANI, Ramayuda Mahardika</span>
          <div className="login-footer-links">
            <a href="#">Kebijakan Privasi</a>
            <a href="#">Syarat dan Ketentuan</a>
            <a href="#">Bantuan &amp; Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

