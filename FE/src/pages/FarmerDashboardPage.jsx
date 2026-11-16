import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { farmerApi } from '../services/api';
import './FarmerDashboardPage.css';

// ─── Data Default Hasil Panen ──────────────────────────────────────────────
const DEFAULT_HARVESTS = [
  {
    id: 1,
    name: 'Tomat Merah Segar',
    category: 'Sayuran',
    price: 'Rp12.000 / Kg',
    location: 'Lembang, Jawa Barat',
    stock: '50 Kg',
    img: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Cabai Rawit Merah',
    category: 'Sayuran',
    price: 'Rp30.000 / Kg',
    location: 'Brebes, Jawa Tengah',
    stock: '120 Kg',
    img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=500&q=80',
  },
];

// ─── Data Artikel Terkait Petani ───────────────────────────────────────────
const FARMER_ARTICLES = [
  {
    id: 1,
    title: 'Teknologi yang Mengubah Cara Petani Bekerja',
    desc: 'Berbagai inovasi teknologi dalam dunia pertanian yang membantu meningkatkan efisiensi dan hasil panen. Dari alat pertanian modern hingga aplikasi berbasis data, teknologi memberikan dampak besar pada cara petani mengelola lahan mereka.',
    img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Menjaga Kesehatan Tanah',
    desc: 'Tips tentang pengelolaan tanah yang baik, penggunaan pupuk organik, dan teknik rotasi tanaman.',
    img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Bibit Pertanian yang Berkualitas',
    desc: 'Memberikan informasi lengkap untuk petani pemula maupun yang berpengalaman untuk memilih bibit.',
    img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
  },
];

export default function FarmerDashboardPage() {
  const [harvests, setHarvests] = useState(DEFAULT_HARVESTS);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showOrdersModal, setShowOrdersModal] = useState(false);

  // Form input untuk tambah panen
  const [newCrop, setNewCrop] = useState({
    name: '',
    category: 'Sayuran',
    price: '',
    location: 'Lembang, Jawa Barat',
    stock: '',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80',
  });

  // Muat data dari Backend saat komponen dimuat
  useEffect(() => {
    async function loadData() {
      const backendHarvests = await farmerApi.getHarvests();
      if (backendHarvests && backendHarvests.length > 0) {
        setHarvests(backendHarvests);
      }
      const backendOrders = await farmerApi.getOrders();
      if (backendOrders) {
        setOrders(backendOrders);
      }
    }
    loadData();
  }, []);

  // Filter pencarian hasil panen
  const filteredHarvests = harvests.filter((h) =>
    h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle submit tambah hasil panen
  const handleAddHarvest = async (e) => {
    e.preventDefault();
    if (!newCrop.name || !newCrop.price || !newCrop.stock) {
      alert('Mohon isi nama produk, harga, dan pasokan stok!');
      return;
    }

    const payload = {
      ...newCrop,
      price: newCrop.price.startsWith('Rp') ? newCrop.price : `Rp${Number(newCrop.price).toLocaleString('id-ID')} / Kg`,
      stock: newCrop.stock.toLowerCase().includes('kg') ? newCrop.stock : `${newCrop.stock} Kg`,
    };

    // Kirim ke backend Next.js
    await farmerApi.addHarvest(payload);

    // Update state tampilan frontend
    setHarvests([
      {
        id: Date.now(),
        ...payload,
      },
      ...harvests,
    ]);

    setShowAddModal(false);
    setNewCrop({
      name: '',
      category: 'Sayuran',
      price: '',
      location: 'Lembang, Jawa Barat',
      stock: '',
      img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80',
    });
  };

  // Handle konfirmasi pesanan pembeli
  const handleConfirmOrder = async (orderId) => {
    await farmerApi.confirmOrder(orderId);
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: 'Dikonfirmasi' } : ord))
    );
    alert(`Pesanan ${orderId} berhasil dikonfirmasi!`);
  };

  return (
    <div className="farmer-dashboard">
      {/* ─── Top Navbar ─── */}
      <header className="farmer-top-navbar">
        <div className="container farmer-navbar-inner">
          {/* Logo */}
          <Link to="/petani" className="farmer-brand-logo">
            <span className="logo-peh">peh</span>
            <span className="logo-tani">tani</span>
          </Link>

          {/* Search Bar */}
          <div className="farmer-search-bar">
            <input
              type="text"
              placeholder="pencarian..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="farmer-search-input"
            />
            <button type="button" className="farmer-search-btn" aria-label="Cari">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* User Profile */}
          <div className="farmer-profile-chip">
            <span className="farmer-username">rudi_hartanto</span>
            <div className="farmer-avatar-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Sub-Navbar Bar ─── */}
      <div className="farmer-subnav-bar">
        <div className="container farmer-subnav-inner">
          {/* Konfirmasi Pemesanan Orange Button */}
          <button
            type="button"
            className="btn-konfirmasi-pesanan"
            onClick={() => setShowOrdersModal(true)}
          >
            Konfirmasi Pemesanan
          </button>

          {/* Nav Links */}
          <nav className="farmer-nav-menu">
            <Link to="/petani" className="farmer-nav-link active">
              Beranda
            </Link>
            <Link to="/tentang" className="farmer-nav-link">
              Tentang
            </Link>
            <Link to="/bantuan" className="farmer-nav-link">
              Pelaporan
            </Link>
          </nav>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="farmer-main-content">
        <div className="container">

          {/* ─── SECTION 1: Daftar Hasil Panen Saya ─── */}
          <section className="harvest-section">
            <div className="harvest-header-row">
              <h1 className="harvest-section-title">Daftar Hasil Panen Saya</h1>
              <button
                type="button"
                className="btn-tambah-panen"
                onClick={() => setShowAddModal(true)}
              >
                Tambah Hasil Panen
              </button>
            </div>

            {/* Grid Kartu Hasil Panen Petani */}
            <div className="harvest-cards-grid">
              {filteredHarvests.map((crop) => (
                <div key={crop.id} className="harvest-card">
                  {/* Thumbnail Foto */}
                  <div className="harvest-img-box">
                    <img src={crop.img} alt={crop.name} className="harvest-img" />
                  </div>

                  {/* Info Tengah */}
                  <div className="harvest-info-col">
                    <h3 className="harvest-name">{crop.name}</h3>
                    <span className="harvest-category">{crop.category}</span>
                    <div className="harvest-price">{crop.price}</div>
                    <div className="harvest-location">{crop.location}</div>
                  </div>

                  {/* Info Pasokan Stok Kanan */}
                  <div className="harvest-stock-col">
                    <span className="stock-label">Pasokan</span>
                    <span className="stock-value">{crop.stock}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── SECTION 2: Artikel Terkait ─── */}
          <section className="farmer-articles-section">
            <h2 className="articles-heading">Artikel Terkait</h2>

            <div className="farmer-articles-grid">
              {FARMER_ARTICLES.map((art) => (
                <div key={art.id} className="farmer-article-card">
                  <img src={art.img} alt={art.title} className="farmer-article-img" />
                  <div className="farmer-article-overlay">
                    <h3 className="farmer-article-title">{art.title}</h3>
                    <p className="farmer-article-desc">{art.desc}</p>
                    <button type="button" className="btn-article-more">
                      Lihat Lebih Lanjut
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* ─── MODAL 1: Tambah Hasil Panen ─── */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Tambah Hasil Panen Baru</h2>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setShowAddModal(false)}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddHarvest} className="modal-form">
              <div className="modal-field">
                <label>Nama Komoditas / Produk :</label>
                <input
                  type="text"
                  placeholder="Contoh: Wortel Manis Brastagi"
                  value={newCrop.name}
                  onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                  required
                />
              </div>

              <div className="modal-row-2">
                <div className="modal-field">
                  <label>Kategori :</label>
                  <select
                    value={newCrop.category}
                    onChange={(e) => setNewCrop({ ...newCrop, category: e.target.value })}
                  >
                    <option value="Sayuran">Sayuran</option>
                    <option value="Buah">Buah-Buahan</option>
                    <option value="Rempah">Rempah-Rempah</option>
                  </select>
                </div>

                <div className="modal-field">
                  <label>Harga per Kg (Rp) :</label>
                  <input
                    type="number"
                    placeholder="15000"
                    value={newCrop.price}
                    onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="modal-row-2">
                <div className="modal-field">
                  <label>Pasokan Stok (Kg) :</label>
                  <input
                    type="text"
                    placeholder="Contoh: 80 Kg"
                    value={newCrop.stock}
                    onChange={(e) => setNewCrop({ ...newCrop, stock: e.target.value })}
                    required
                  />
                </div>

                <div className="modal-field">
                  <label>Lokasi Kebun :</label>
                  <input
                    type="text"
                    placeholder="Contoh: Lembang, Jawa Barat"
                    value={newCrop.location}
                    onChange={(e) => setNewCrop({ ...newCrop, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowAddModal(false)}
                >
                  Batal
                </button>
                <button type="submit" className="btn-save-crop">
                  Simpan Hasil Panen &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── MODAL 2: Konfirmasi Pemesanan ─── */}
      {showOrdersModal && (
        <div className="modal-backdrop" onClick={() => setShowOrdersModal(false)}>
          <div className="modal-box modal-orders" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Konfirmasi Pemesanan Masuk</h2>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setShowOrdersModal(false)}
              >
                &times;
              </button>
            </div>

            <div className="orders-list">
              {orders.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#64748b', padding: '20px 0' }}>
                  Belum ada pesanan baru yang membutuhkan konfirmasi.
                </p>
              ) : (
                orders.map((ord) => (
                  <div key={ord.id} className="farmer-order-card">
                    <div className="order-details">
                      <div className="order-header-line">
                        <span className="order-id">{ord.id}</span>
                        <span className={`order-status-badge ${ord.status === 'Dikonfirmasi' ? 'status-confirmed' : 'status-waiting'}`}>
                          {ord.status}
                        </span>
                      </div>
                      <h4 className="order-buyer">{ord.buyerName}</h4>
                      <p className="order-item-desc">
                        {ord.productName} &bull; <strong>{ord.quantity}</strong> ({ord.totalPrice})
                      </p>
                      <span className="order-meta">{ord.location} &bull; {ord.orderDate}</span>
                    </div>

                    {ord.status !== 'Dikonfirmasi' && (
                      <button
                        type="button"
                        className="btn-confirm-action"
                        onClick={() => handleConfirmOrder(ord.id)}
                      >
                        Konfirmasi Pesanan &check;
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ─── Footer ─── */}
      <footer className="farmer-footer">
        <div className="container farmer-footer-inner">
          <span className="footer-copy">@2024, PEHTANI, Ramayuda Mahardika</span>
          <div className="footer-links">
            <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan">Syarat dan Ketentuan</Link>
            <Link to="/bantuan">Bantuan &amp; Kontak</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
