#  Panduan Alur Kerja: Fokus FE Dulu, Baru BE (Git Workflow)

##  Alur Besar Pengerjaan
```mermaid
flowchart TD
    A[" Branch: main\n(Fondasi Utama)"] -->|"git checkout -b feat/frontend"| B[" Branch: feat/frontend\n(Selesaikan SEMUA Halaman UI)"]
    B -->|"1. Buat Halaman FE (Landing, Login, Register, Katalog, dll)"| B
    B -->|"2. Gunakan Mock Data (Data Tiruan/Dummy)"| B
    B -->|"3. Commit setiap selesai 1 fitur/halaman"| B
    B -->|"Semua UI Selesai!"| C["🔀 Merge ke main\n(git merge feat/frontend)"]
    C -->|"git checkout -b feat/backend"| D[" Branch: feat/backend\n(API, Database, Autentikasi)"]
    D -->|"1. Setup Database & Model Entity"| D
    D -->|"2. Buat Endpoint REST API NestJS"| D
    D -->|"3. Hubungkan FE (fetch) ke BE sungguhan"| D
    D -->|"Semua API Selesai & Teruji!"| E[" Merge ke main\n(git merge feat/backend)"]
    E --> F[" Production Deployment\n(Vercel + Railway)"]
```

---

## Langkah Praktis di Terminal 

### Langkah 1: Buat & Pindah ke Branch `feat/frontend`
Jalankan di terminal VS Code Anda:
```bash
git checkout -b feat/frontend
```
### Langkah 2: Cara Bekerja di FE (Mock Data)
Karena backend belum dibuat, gunakan data dummy di dalam komponen React:
- **Produk:** Gunakan array dummy di `FreshProduce.jsx` 
- **Login:** Gunakan simulasi login sementara di `LoginPage.jsx` / `login.html`.

### Langkah 3: Rutin Commit Setiap Selesai 1 Halaman/Fitur
Gunakan format commit rapi:
```bash
git add FE/src/pages/LoginPage.jsx FE/src/pages/LoginPage.css
git commit -m "feat(fe): implementasi halaman login sesuai desain UI"
```

### Langkah 4: Setelah SEMUA Halaman FE Selesai → Merge ke `main`
```bash
# 1. Pindah kembali ke main
git checkout main

# 2. Gabungkan hasil kerjaan FE
git merge feat/frontend

# 3. Upload ke GitHub
git push origin main
```

### Langkah 5: Baru Lanjut ke Backend (`feat/backend`)
```bash
git checkout -b feat/backend
```


