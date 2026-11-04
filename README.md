# 🌿 PehTani - Platform Penjualan Hasil Pertanian

Platform marketplace pertanian yang menghubungkan petani langsung dengan pembeli untuk menciptakan ekosistem pertanian yang lebih adil, transparan, dan terintegrasi.

---

## Struktur Direktori Proyek

Proyek ini telah distrukturisasi dengan rapi dan terpisah jelas antara **Frontend (FE)** dan **Backend (BE)**:

```text
Pertanian/
├── FE/                              # FRONTEND (React.js + Vite)
│   ├── src/                         # Source code aplikasi React
│   │   ├── components/              # Komponen UI (Navbar, Hero, Footer, dll.)
│   │   ├── pages/                   # Halaman aplikasi:
│   │   │   ├── LoginPage.jsx        # Halaman Masuk Akun
│   │   │   ├── RegisterRolePage.jsx # Halaman Pilih Role (Petani / Pembeli)
│   │   │   ├── RegisterFarmerPage.jsx# Form Daftar Petani
│   │   │   ├── RegisterBuyerPage.jsx # Form Daftar Pembeli
│   │   │   ├── OtpVerificationPage.jsx# Halaman Verifikasi OTP
│   │   │   ├── AboutPage.jsx        # Halaman Tentang Kami
│   │   │   └── HelpContactPage.jsx  # Halaman Bantuan & Kontak
│   │   ├── App.jsx                  # Konfigurasi Routing (React Router)
│   │   ├── main.jsx                 # Entry point React
│   │   └── index.css                # Global stylesheet
│   ├── previews/                    #  File HTML/CSS Preview Mandiri (Langsung Double-Click)
│   │   ├── index.html               # Preview Landing Page
│   │   ├── login.html               # Preview Halaman Masuk
│   │   ├── daftar.html              # Preview Pilih Role
│   │   ├── daftar-petani.html       # Preview Form Petani
│   │   ├── daftar-pembeli.html      # Preview Form Pembeli
│   │   ├── otp.html                 # Preview Verifikasi OTP
│   │   ├── tentang.html             # Preview Tentang
│   │   ├── bantuan.html             # Preview Bantuan
│   │   ├── style.css                # Styling untuk mockup preview
│   │   └── script.js                # Interaktivitas mockup
│   ├── index.html                   # Entry template Vite
│   ├── package.json                 # Dependency React & Script NPM
│   └── vite.config.js               # Konfigurasi Vite
│
├── backend/                         # BACKEND (NextJS API)
│   ├── src/                         # Source code NestJS
│   │   ├── auth/                    # Modul Autentikasi (Login, Register, JWT)
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   └── auth.module.ts
│   │   ├── products/                # Modul Produk Pertanian
│   │   │   ├── products.controller.ts
│   │   │   ├── products.service.ts
│   │   │   └── products.module.ts
│   │   ├── app.module.ts            # Root module NestJS
│   │   └── main.ts                  # Entry point Server Backend
│   ├── nest-cli.json
│   ├── package.json
│   └── tsconfig.json
│
└── README.md                        # Dokumentasi Proyek
```

---

### 1. Menjalankan Frontend (React.js)
```bash
cd FE
npm install
npm run dev
```
Akses di browser: `http://localhost:5173`

> **Tips Preview Cepat:** Kamu juga dapat membuka langsung file-file di folder `FE/previews/` (seperti `FE/previews/index.html` atau `FE/previews/daftar.html`) di browser dengan klik dua kali tanpa perlu menjalankan terminal.

### 2. Menjalankan Backend (NextJS)
```bash
cd backend
npm install
npm run start:dev
```
Akses server di: `http://localhost:3000`

---

---
*©2026 PehTani - Platform Pertanian Nusantara*
