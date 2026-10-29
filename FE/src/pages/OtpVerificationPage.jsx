import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './OtpVerificationPage.css';

export default function OtpVerificationPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil state dari pendaftaran jika ada, atau gunakan default dari desain
  const userTarget = location.state?.email || location.state?.noHp || 'ra********@gmail.com';

  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [isResending, setIsResending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const inputRefs = useRef([]);

  // Hitung mundur resend OTP
  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  // Fokus otomatis ke input pertama saat halaman dimuat
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    // Hanya perbolehkan karakter angka
    const digit = value.replace(/\D/g, '').slice(-1);

    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    if (error) setError('');

    // Pindah ke kotak berikutnya jika angka diisi
    if (digit && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Tombol Backspace untuk kembali ke kotak sebelumnya
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 5);
    if (!pastedData) return;

    const newOtp = [...otp];
    for (let i = 0; i < 5; i++) {
      newOtp[i] = pastedData[i] || '';
    }
    setOtp(newOtp);

    // Fokus ke kotak setelah digit terakhir yang terisi
    const lastFilledIndex = Math.min(pastedData.length, 4);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setIsResending(true);
    setTimeout(() => {
      setResendTimer(60);
      setIsResending(false);
      setSuccessMessage('Kode OTP baru telah dikirimkan ulang!');
      setTimeout(() => setSuccessMessage(''), 4000);
    }, 600);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const fullCode = otp.join('');

    if (fullCode.length < 5) {
      setError('Silakan masukkan 5 digit kode OTP dengan lengkap.');
      return;
    }

    // Simulasi verifikasi berhasil
    setSuccessMessage('Verifikasi Berhasil! Mengalihkan ke halaman masuk...');
    setTimeout(() => {
      navigate('/masuk');
    }, 1500);
  };

  return (
    <div className="otp-page">
      {/* ─── Main Content ─── */}
      <main className="otp-main">
        <div className="otp-container">
          {/* Heading */}
          <div className="otp-header">
            <h1 className="otp-title">Masukkan Kode OTP</h1>
            <p className="otp-subtitle">
              Masukkan kode OTP yang telah dikirimkan ke email {userTarget}
            </p>
          </div>

          {/* Feedback messages */}
          {error && <div className="otp-alert otp-alert-error">{error}</div>}
          {successMessage && <div className="otp-alert otp-alert-success">{successMessage}</div>}

          {/* 5 Input Boxes */}
          <form onSubmit={handleVerify} className="otp-form" onPaste={handlePaste}>
            <div className="otp-inputs-row">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputRefs.current[idx] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(idx, e)}
                  className="otp-box"
                  aria-label={`Digit OTP ke ${idx + 1}`}
                  autoComplete="off"
                />
              ))}
            </div>

            {/* Resend Link */}
            <div className="otp-resend-wrap">
              <span className="otp-resend-text">Tidak Mendapatkan OTP? </span>
              {resendTimer > 0 ? (
                <span className="otp-timer">Kirim Ulang ({resendTimer}s)</span>
              ) : (
                <button
                  type="button"
                  className="btn-resend-link"
                  onClick={handleResend}
                  disabled={isResending}
                >
                  {isResending ? 'Mengirim...' : 'Kirim Ulang OTP'}
                </button>
              )}
            </div>

            {/* Verification Button */}
            <div className="otp-action-wrap">
              <button type="submit" className="btn-otp-verify">
                Verifikasi
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="otp-footer">
        <div className="otp-footer-inner">
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

