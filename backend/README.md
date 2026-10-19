# 🌾 PehTani Backend API Guide

Panduan backend untuk platform **PehTani**. Di dunia pengembangan web modern berbasis JavaScript/TypeScript, ada 2 framework populer yang namanya mirip namun fungsinya berbeda: **NestJS** dan **Next.js**.

---

## 🔍 Perbedaan Utama: NestJS vs Next.js

| Fitur |  NextJS (Yang ada di folder ini) | ⚡ Next.js |
| :--- | :--- | :--- |
| **Kategori** | Backend Framework murni (Server-side API) | Fullstack React Framework (Frontend + API Routes) |
| **Fokus Utama** | REST API, GraphQL, Microservices, WebSocket | Server-Side Rendering (SSR), Static Site (SSG), UI React + Route Handlers |
| **Arsitektur** | Controller, Service, Module, Dependency Injection (seperti Spring Boot / Angular) | File-based routing (`app/api/.../route.ts`) |
| **Bahasa** | TypeScript secara default | JavaScript / TypeScript |
| **Kapan Dipakai?** | Saat frontend & backend dipisah (misal: FE pakai React Vite terpisah, BE pakai NestJS) | Saat ingin frontend React dan backend API dalam 1 project Next.js |

---

## 1️⃣ Arsitektur NestJS (Backend Saat Ini)

Folder `backend/` ini menggunakan **NestJS**. Alur kerjanya terbagi menjadi 3 lapis utama:

1. **`main.ts`** -> Pintu masuk server (menjalankan server pada port 3000 dan mengaktifkan CORS untuk React Frontend).
2. **`app.module.ts`** -> Modul pusat yang menyatukan semua fitur.
3. **`products/products.controller.ts`** -> Menangani HTTP Request (`GET /products` atau `GET /products/:id`) dari frontend.
4. **`products/products.service.ts`** -> Berisi logika bisnis dan data (mengambil data produk, filtering, database query).
5. **`products/products.module.ts`** -> Mendaftarkan controller dan service produk.

### Cara Menjalankan NestJS:
```bash
npm install
npm run start:dev
```
Server akan aktif di `http://localhost:3000/products`.

---

## 2️⃣ Jika Menggunakan Next.js sebagai Backend (API Route)

Jika Anda ingin menggunakan **Next.js** untuk backend (Route Handler di Next.js App Router), polanya berbasis file (File-based Routing):

Struktur folder Next.js API:
```
app/
└── api/
    └── products/
        └── route.ts   # Endpoint: http://localhost:3000/api/products
```

Contoh kode `app/api/products/route.ts`:
```ts
import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: 'Tomat Merah Segar',
    category: 'Sayuran',
    price: 'Rp12.000',
    unit: '/ Kg',
    location: 'Lembang, Jawa Barat',
    sold: 'Terjual 226 kg',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80',
  },
];

export async function GET() {
  return NextResponse.json(products);
}
```

