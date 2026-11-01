# 🌿 PehTani - Platform Penjualan Hasil Pertanian

Platform marketplace pertanian yang menghubungkan petani langsung dengan pembeli untuk menciptakan ekosistem pertanian yang lebih adil, transparan, dan terintegrasi.

---

## Struktur Direktori Proyek

Proyek ini menggunakan arsitektur terpisah antara **Frontend (FE - React.js + Vite)** dan **Backend (BE - Next.js App Router API)**.

```text
Pertanian/
├── FE/                              # FRONTEND (React.js + Vite)
│   ├── src/                         # Source code aplikasi React
│   │   ├── components/              # Komponen UI
│   │   ├── pages/                   # Halaman aplikasi
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterRolePage.jsx
│   │   │   ├── RegisterFarmerPage.jsx
│   │   │   ├── RegisterBuyerPage.jsx
│   │   │   ├── OtpVerificationPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── HelpContactPage.jsx
│   │   │   ├── PrivacyPolicyPage.jsx
│   │   │   └── TermsPage.jsx
│   │   ├── App.jsx                  # Routing React Router
│   │   ├── main.jsx                 # Entry point React
│   │   └── index.css                # Global stylesheet
│   ├── previews/                    # Preview HTML/CSS
│   │   ├── index.html
│   │   ├── login.html
│   │   ├── daftar.html
│   │   ├── daftar-petani.html
│   │   ├── daftar-pembeli.html
│   │   ├── otp.html
│   │   ├── tentang.html
│   │   ├── bantuan.html
│   │   ├── kebijakan-privasi.html
│   │   ├── syarat-ketentuan.html
│   │   ├── style.css
│   │   └── script.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/                         # BACKEND (Next.js API)
│   ├── app/                         # Next.js App Router
│   │   ├── layout.js                # Root Layout
│   │   ├── page.js                  # Dashboard API
│   │   └── api/                     # REST API
│   │       ├── auth/
│   │       │   ├── login/route.js
│   │       │   ├── register/route.js
│   │       │   └── verify-otp/route.js
│   │       ├── products/route.js
│   │       └── content/
│   │           ├── privacy-policy/route.js
│   │           └── terms-conditions/route.js
│   ├── next.config.mjs              # Konfigurasi Next.js
│   ├── package.json
│   └── README.md
│
└── README.md                        # Dokumentasi proyek
```

---

## 1. Menjalankan Frontend (React.js)

```bash
cd FE
npm install
npm run dev
```

Akses frontend melalui:

http://localhost:5173

**Tips Preview Cepat:** File HTML di folder `FE/previews/` dapat dibuka langsung melalui browser tanpa menjalankan server development.

---

## 2. Menjalankan Backend (Next.js)

```bash
cd backend
npm install
npm run dev
```

Akses backend melalui port yang dikonfigurasi pada proyek.

Jika menggunakan port 5000:

http://localhost:5000

### Endpoint Backend

| Method | Endpoint | Keterangan |
|---|---|---|
| POST | `/api/auth/login` | Login pengguna |
| POST | `/api/auth/register` | Registrasi pengguna |
| POST | `/api/auth/verify-otp` | Verifikasi OTP |
| GET, POST | `/api/products` | Pengelolaan produk |
| GET | `/api/content/privacy-policy` | Kebijakan privasi |
| GET | `/api/content/terms-conditions` | Syarat dan ketentuan |

---

## Referensi Desain

Desain UI mengacu pada mockup Figma **Pemasaran Pertanian - Ramayuda Mahardika**.

---

© 2026 PehTani - Platform Pertanian Nusantara
