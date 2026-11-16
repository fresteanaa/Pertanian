/**
 * API Service PehTani — Penghubung Frontend (FE React) ke Backend (Next.js API)
 * Port Backend default: http://localhost:5000
 */

export const API_BASE_URL = 'http://localhost:5000/api';

// ─── 1. Auth API ────────────────────────────────────────────────────────────
export const authApi = {
  login: async ({ email, password }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Email atau kata sandi salah.');
      return data;
    } catch (err) {
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        console.warn('Backend Next.js (port 5000) offline. Menggunakan simulasi.');
        return {
          message: 'Login berhasil (mode simulasi offline)',
          access_token: `mock-token-${Date.now()}`,
          user: { id: 1, name: email.split('@')[0], email, role: 'petani' },
        };
      }
      throw err;
    }
  },
};

// ─── 2. Farmer API (Beranda Petani, Panen & Pesanan) ────────────────────────
export const farmerApi = {
  // Ambil data hasil panen petani
  getHarvests: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/farmer/harvests`);
      if (!res.ok) throw new Error('Gagal memuat hasil panen');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Gagal memuat panen dari backend Next.js, menggunakan fallback.');
      return null;
    }
  },

  // Tambah hasil panen baru
  addHarvest: async (harvestData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/farmer/harvests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(harvestData),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Gagal menambahkan hasil panen');
      return json.data;
    } catch (err) {
      console.warn('Gagal menambah panen ke backend, menyimpan secara lokal.');
      return harvestData;
    }
  },

  // Ambil pesanan masuk dari pembeli untuk dikonfirmasi petani
  getOrders: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/farmer/orders`);
      if (!res.ok) throw new Error('Gagal memuat pesanan');
      const json = await res.json();
      return json.data;
    } catch (err) {
      console.warn('Gagal memuat pesanan dari backend, menggunakan fallback.');
      return null;
    }
  },

  // Konfirmasi pesanan pembeli
  confirmOrder: async (orderId) => {
    try {
      const res = await fetch(`${API_BASE_URL}/farmer/orders`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, status: 'Dikonfirmasi' }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || 'Gagal mengonfirmasi pesanan');
      return json.data;
    } catch (err) {
      console.warn('Konfirmasi pesanan offline (simulasi).');
      return { id: orderId, status: 'Dikonfirmasi' };
    }
  },
};

// ─── 3. Products API (Marketplace Pembeli) ──────────────────────────────────
export const productsApi = {
  getAll: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/products`);
      if (!res.ok) throw new Error('Gagal mengambil data produk');
      const json = await res.json();
      return json.data;
    } catch (err) {
      return null;
    }
  },
};
