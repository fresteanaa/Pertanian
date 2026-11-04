#  PehTani - Backend API (Next.js)

Backend API untuk platform PehTani dibangun menggunakan **Next.js App Router (Route Handlers)**. 

---

## Struktur Direktori Backend

```text
backend/
├── app/
│   ├── layout.js                     # Root layout Next.js
│   ├── page.js                       # Dashboard info API & status
│   └── api/                          # Route Handlers API Next.js
│       ├── auth/
│       │   ├── login/
│       │   │   └── route.js          # POST /api/auth/login
│       │   ├── register/
│       │   │   └── route.js          # POST /api/auth/register
│       │   └── verify-otp/
│       │       └── route.js          # POST /api/auth/verify-otp
│       ├── products/
│       │   └── route.js              # GET & POST /api/products
│       └── content/
│           ├── privacy-policy/
│           │   └── route.js          # GET /api/content/privacy-policy
│           └── terms-conditions/
│               └── route.js          # GET /api/content/terms-conditions
├── next.config.mjs                   # Konfigurasi Next.js (CORS support)
├── package.json                      # Dependency Next.js & React
└── README.md
```

---

## Cara Menjalankan Backend

1. Buka terminal dan masuk ke folder `backend`:
   ```bash
   cd backend
   ```
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Jalankan server development:
   ```bash
   npm run dev
   ```
4. Server backend akan berjalan di:
   ```text
   http://localhost:5000
   ``

---

## Daftar Endpoint API

| Method | Endpoint | Keterangan |
| :--- | :--- | :--- |
| **POST** | `/api/auth/login` | Login akun Petani / Pembeli |
| **POST** | `/api/auth/register` | Pendaftaran akun baru |
| **POST** | `/api/auth/verify-otp` | Verifikasi 5 digit kode OTP |
| **GET** | `/api/products` | Ambil data semua produk pertanian |
| **POST** | `/api/products` | Tambah produk pertanian baru |
| **GET** | `/api/content/privacy-policy` | Ambil data Kebijakan Privasi |
| **GET** | `/api/content/terms-conditions` | Ambil data Syarat dan Ketentuan |

---
*©2026 PehTani Platform - Backend API Next.js*
