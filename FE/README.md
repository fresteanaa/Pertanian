# 🌿 PehTani Frontend (FE)

Implementasi desain UI PehTani berbasis **React + Vite**.

## 📁 Struktur Folder

```
FE/
├── preview.html         # Preview langsung di browser (Double-click tanpa perlu install Node)
├── index.html           # HTML template untuk Vite React
├── package.json         # Konfigurasi dependensi project
├── vite.config.js       # Konfigurasi Vite
└── src/
    ├── main.jsx         # Entry point React
    ├── App.jsx          # Komponen utama yang menggabungkan seluruh section
    ├── index.css        # Variabel warna & styling global
    └── components/
        ├── UtilityBar.jsx & .css    # Bar paling atas (Bantuan, Buat Akun, Masuk)
        ├── Navbar.jsx & .css        # Header melayang (Logo pehtani & Tentang Website)
        ├── Hero.jsx & .css          # Hero banner dengan foto sayuran & teks utama
        ├── StepBar.jsx & .css       # Floating bar 3 langkah (Membuat Akun, Tambahkan Hasil, Pesan & Bayar)
        ├── FreshProduce.jsx & .css  # Katalog "Sayuran Segar" (Tomat, Cabai, Wortel)
        ├── AboutSection.jsx & .css  # Section "Dapatkan sayuran segar dari rumah Anda"
        ├── StatsSection.jsx & .css  # Metrik platform (3000+, 1000+, 24/7, 30+)
        ├── FeatureCards.jsx & .css  # 3 Kartu edukasi/fitur teknologi pertanian
        └── Footer.jsx & .css        # Footer hijau PehTani
```

## Cara Menjalankan

### Cara 1: Buka Langsung (Tanpa Node / npm)
Buka file `preview.html` langsung dengan cara double-click atau buka via browser (Chrome / Edge / Firefox).

### Cara 2: Menjalankan dengan Node & Vite
1. Buka terminal di folder `FE`:
   ```bash
   cd FE
   ```
2. Install dependensi:
   ```bash
   npm install
   ```
3. Jalankan development server:
   ```bash
   npm run dev
   ```
