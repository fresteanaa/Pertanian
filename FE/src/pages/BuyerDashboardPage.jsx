import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './BuyerDashboardPage.css';

// ─── Data Produk (Sayuran & Buah-Buahan) ──────────────────────────────────────
const INITIAL_PRODUCTS = [
  // Sayuran
  {
    id: 1,
    name: 'Tomat Merah Segar',
    category: 'Sayuran',
    price: 'Rp12.000',
    unit: '/ Kg',
    location: 'Lembang, Jawa Barat',
    sold: 'Terjual 226 kg',
    img: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Cabai Rawit Merah',
    category: 'Sayuran',
    price: 'Rp30.000',
    unit: '/ Kg',
    location: 'Klaten, Jawa Tengah',
    sold: 'Terjual 188 kg',
    img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Wortel Segar',
    category: 'Sayuran',
    price: 'Rp10.000',
    unit: '/ Kg',
    location: 'Bandung, Jawa Barat',
    sold: 'Terjual 333 kg',
    img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    name: 'Kentang Dieng',
    category: 'Sayuran',
    price: 'Rp15.000',
    unit: '/ Kg',
    location: 'Wonosobo, Jawa Tengah',
    sold: 'Terjual 200 kg',
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    name: 'Tomat Segar',
    category: 'Sayuran',
    price: 'Rp12.000',
    unit: '/ Kg',
    location: 'Lembang, Jawa Barat',
    sold: 'Terjual 226 kg',
    img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80',
  },
  // Buah-Buahan
  {
    id: 6,
    name: 'Pisang Cavendish',
    category: 'Buah',
    price: 'Rp20.000',
    unit: '/ Kg',
    location: 'Lampung, Sumatera',
    sold: 'Terjual 280 kg',
    img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 7,
    name: 'Mangga Harum Manis',
    category: 'Buah',
    price: 'Rp30.000',
    unit: '/ Kg',
    location: 'Indramayu, Jawa Barat',
    sold: 'Terjual 150 kg',
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    name: 'Apel Malang',
    category: 'Buah',
    price: 'Rp25.000',
    unit: '/ Kg',
    location: 'Malang, Jawa Timur',
    sold: 'Terjual 150 kg',
    img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 9,
    name: 'Jeruk Medan',
    category: 'Buah',
    price: 'Rp20.000',
    unit: '/ Kg',
    location: 'Medan, Sumatera Utara',
    sold: 'Terjual 300 kg',
    img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80',
  },
];

// ─── Data Artikel / Edukasi ──────────────────────────────────────────────────
const ARTICLES = [
  {
    id: 1,
    title: 'Panduan Memilih Buah Segar',
    desc: 'Artikel ini memberikan panduan mudah dalam memilih buah yang matang dan segar di pasar atau supermarket, serta tips-tips buat mendapatkan yang berkualitas.',
    img: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Manfaat Konsumsi Organik',
    desc: 'Temukan berbagai manfaat kesehatan dari makanan organik bagi kesehatan dan lingkungan, serta perbedaan antara produk organik dan konvensional.',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Cara Memasak Sehat',
    desc: 'Belajar teknik memasak sehat yang mempertahankan nutrisi makanan, dan tips-tips meminimalisir penggunaan minyak, garam, dan bahan tambahan yang berlebihan.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
  },
];

export default function BuyerDashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showOrdersModal, setShowOrdersModal] = useState(false);

  // Ambil nama user jika tersimpan, fallback ke 'ramayuda'
  const savedUser = useMemo(() => {
    try {
      const u = localStorage.getItem('user');
      return u ? JSON.parse(u) : null;
    } catch {
      return null;
    }
  }, []);
  const userName = savedUser?.name || 'ramayuda';

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchQuery.trim());
  };

  const clearSearch = () => {
    setSearchQuery('');
    setActiveSearch('');
    setSelectedCategory(null);
  };

  // Filter produk berdasarkan pencarian atau kategori
  const filteredProducts = useMemo(() => {
    if (!activeSearch && !selectedCategory) return [];

    return INITIAL_PRODUCTS.filter((p) => {
      const matchSearch = activeSearch
        ? p.name.toLowerCase().includes(activeSearch.toLowerCase()) ||
          p.location.toLowerCase().includes(activeSearch.toLowerCase())
        : true;
      const matchCategory = selectedCategory
        ? p.category.toLowerCase() === selectedCategory.toLowerCase()
        : true;
      return matchSearch && matchCategory;
    });
  }, [activeSearch, selectedCategory]);

  const isSearching = Boolean(activeSearch) || Boolean(selectedCategory);

  // Data sayuran & buah untuk tampilan beranda normal
  const vegetables = INITIAL_PRODUCTS.filter((p) => p.category === 'Sayuran').slice(0, 4);
  const fruits = INITIAL_PRODUCTS.filter((p) => p.category === 'Buah').slice(0, 4);

  return (
    <div className="buyer-dashboard">
      {/* ─── Top Navbar ─── */}
      <header className="buyer-top-navbar">
        <div className="container buyer-navbar-inner">
          {/* Logo */}
          <Link to="/pembeli" className="buyer-logo" onClick={clearSearch}>
            <span className="logo-peh">peh</span>
            <span className="logo-tani">tani</span>
          </Link>

          {/* Search Bar */}
          <form className="buyer-search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Tomat Segar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="buyer-search-input"
            />
            <button type="submit" className="buyer-search-btn" aria-label="Cari Produk">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>

          {/* User Profile */}
          <div className="buyer-profile-chip">
            <span className="buyer-username">{userName}</span>
            <div className="buyer-avatar-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Sub-Navbar Bar ─── */}
      <div className="buyer-subnav-bar">
        <div className="container buyer-subnav-inner">
          <button
            type="button"
            className="btn-pesanan-saya"
            onClick={() => setShowOrdersModal(true)}
          >
            Pesanan Saya
          </button>

          <nav className="buyer-nav-menu">
            <Link to="/pembeli" className="buyer-nav-link active" onClick={clearSearch}>
              Beranda
            </Link>
            <a href="#pasar" className="buyer-nav-link">
              Pasar
            </a>
            <Link to="/tentang" className="buyer-nav-link">
              Tentang
            </Link>
            <Link to="/bantuan" className="buyer-nav-link">
              Pelaporan
            </Link>
          </nav>
        </div>
      </div>

      {/* ─── Main Content ─── */}
      <main className="buyer-main-area">
        <div className="container">
          {/* Kondisi 1: TAMPILAN PENCARIAN DITEMUKAN (Screen 2) */}
          {isSearching ? (
            <div className="search-results-layout">
              {/* Sidebar Kategori */}
              <aside className="buyer-sidebar">
                <div className="category-menu-card">
                  <button
                    type="button"
                    className={`category-item ${selectedCategory === 'Sayuran' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(selectedCategory === 'Sayuran' ? null : 'Sayuran')}
                  >
                    <span className="cat-icon-text">
                      <span className="cat-emoji">🌱</span> Sayuran
                    </span>
                    <span className="cat-chevron">&rsaquo;</span>
                  </button>
                  <button
                    type="button"
                    className={`category-item ${selectedCategory === 'Buah' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(selectedCategory === 'Buah' ? null : 'Buah')}
                  >
                    <span className="cat-icon-text">
                      <span className="cat-emoji">🍎</span> Buah-Buahan
                    </span>
                    <span className="cat-chevron">&rsaquo;</span>
                  </button>
                  <button
                    type="button"
                    className={`category-item ${selectedCategory === 'Rempah' ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(selectedCategory === 'Rempah' ? null : 'Rempah')}
                  >
                    <span className="cat-icon-text">
                      <span className="cat-emoji">🌿</span> Rempah-Rempah
                    </span>
                    <span className="cat-chevron">&rsaquo;</span>
                  </button>
                </div>
              </aside>

              {/* Area Hasil Pencarian */}
              <section className="search-results-content">
                <div className="search-header-row">
                  <h1 className="search-title">Pencarian Ditemukan</h1>
                  <button type="button" className="btn-reset-search" onClick={clearSearch}>
                    &times; Bersihkan Pencarian
                  </button>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="empty-search-state">
                    <p>Tidak ada produk yang cocok dengan "<strong>{activeSearch || selectedCategory}</strong>".</p>
                    <button type="button" className="btn-back-home" onClick={clearSearch}>
                      Kembali ke Semua Produk
                    </button>
                  </div>
                ) : (
                  <div className="product-grid search-grid">
                    {filteredProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                )}
              </section>
            </div>
          ) : (
            /* Kondisi 2: TAMPILAN BERANDA UTAMA PEMBELI (Screen 1) */
            <>
              {/* ─── Hero Section with Sidebar Categories ─── */}
              <div className="buyer-hero-grid">
                {/* Left: Sidebar Categories Card */}
                <div className="category-menu-card">
                  <button
                    type="button"
                    className="category-item"
                    onClick={() => setSelectedCategory('Sayuran')}
                  >
                    <span className="cat-icon-text">
                      <span className="cat-emoji">🌱</span> Sayuran
                    </span>
                    <span className="cat-chevron">&rsaquo;</span>
                  </button>
                  <button
                    type="button"
                    className="category-item"
                    onClick={() => setSelectedCategory('Buah')}
                  >
                    <span className="cat-icon-text">
                      <span className="cat-emoji">🍎</span> Buah-Buahan
                    </span>
                    <span className="cat-chevron">&rsaquo;</span>
                  </button>
                  <button
                    type="button"
                    className="category-item"
                    onClick={() => setSelectedCategory('Rempah')}
                  >
                    <span className="cat-icon-text">
                      <span className="cat-emoji">🌿</span> Rempah-Rempah
                    </span>
                    <span className="cat-chevron">&rsaquo;</span>
                  </button>
                </div>

                {/* Center: Hero Main Banner */}
                <div className="hero-main-banner">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80"
                    alt="Aneka Sayuran Segar"
                    className="hero-banner-img"
                  />
                  <div className="hero-banner-overlay">
                    <p className="hero-banner-text">
                      Dapatkan sayur-sayuran segar dengan harga spesial! Nikmati harga spesial untuk berbagai pilihan sayur sehat, hanya dalam waktu terbatas.
                    </p>
                    <button
                      type="button"
                      className="btn-temukan"
                      onClick={() => setSelectedCategory('Sayuran')}
                    >
                      Temukan Sekarang
                    </button>
                  </div>
                </div>

                {/* Right: Small Banner Buah Promo */}
                <div className="hero-promo-card">
                  <img
                    src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80"
                    alt="Buah Buahan Segar"
                    className="promo-card-img"
                  />
                  <div className="promo-card-overlay">
                    <h3 className="promo-title">Buah-Buahan Segar, dengan harga spesial</h3>
                    <button
                      type="button"
                      className="btn-pesan"
                      onClick={() => setSelectedCategory('Buah')}
                    >
                      Pesan
                    </button>
                  </div>
                </div>
              </div>

              {/* ─── Step Process Bar ─── */}
              <div className="buyer-steps-bar">
                <div className="step-node">
                  <span className="step-num">1</span>
                  <span className="step-label">Temukan Produk</span>
                </div>
                <div className="step-connector"></div>

                <div className="step-node">
                  <span className="step-num">2</span>
                  <span className="step-label">Lihat Detail Produk</span>
                </div>
                <div className="step-connector"></div>

                <div className="step-node">
                  <span className="step-num">3</span>
                  <span className="step-label">Pesan Produk</span>
                </div>
                <div className="step-connector"></div>

                <div className="step-node">
                  <span className="step-num">4</span>
                  <span className="step-label">Lakukan Pembayaran</span>
                </div>
              </div>

              {/* ─── Section 1: Sayuran Segar ─── */}
              <section className="produce-group-section">
                <div className="produce-group-header">
                  <div>
                    <span className="badge-fresh">Baru Saja Dipanen</span>
                    <h2 className="group-title">Sayuran Segar</h2>
                  </div>
                  <button
                    type="button"
                    className="btn-lainnya"
                    onClick={() => setSelectedCategory('Sayuran')}
                  >
                    Lainnya &rarr;
                  </button>
                </div>

                <div className="product-grid">
                  {vegetables.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>

              {/* ─── Educational Feature Cards ─── */}
              <section className="buyer-articles-section">
                <div className="articles-grid">
                  {ARTICLES.map((art) => (
                    <div key={art.id} className="article-card">
                      <img src={art.img} alt={art.title} className="article-img" />
                      <div className="article-overlay">
                        <h3 className="article-title">{art.title}</h3>
                        <p className="article-desc">{art.desc}</p>
                        <button type="button" className="btn-article-more">
                          Lihat Lebih Lanjut
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ─── Section 2: Buah-Buahan Segar ─── */}
              <section className="produce-group-section">
                <div className="produce-group-header">
                  <div>
                    <span className="badge-fresh">Baru Saja Dipanen</span>
                    <h2 className="group-title">Buah-Buahan Segar</h2>
                  </div>
                  <button
                    type="button"
                    className="btn-lainnya"
                    onClick={() => setSelectedCategory('Buah')}
                  >
                    Lainnya &rarr;
                  </button>
                </div>

                <div className="product-grid">
                  {fruits.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </main>

      {/* ─── Modal Pesanan Saya (Simulasi) ─── */}
      {showOrdersModal && (
        <div className="modal-backdrop" onClick={() => setShowOrdersModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Pesanan Saya</h2>
              <button
                type="button"
                className="btn-close-modal"
                onClick={() => setShowOrdersModal(false)}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="order-item">
                <img
                  src="https://images.unsplash.com/photo-1546094096-0df4bcabd337?auto=format&fit=crop&w=200&q=80"
                  alt="Tomat"
                  className="order-img"
                />
                <div className="order-info">
                  <h4>Tomat Merah Segar (2 Kg)</h4>
                  <p className="order-price">Rp24.000</p>
                  <span className="order-status badge-success">Dalam Pengiriman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── Footer ─── */}
      <footer className="buyer-footer">
        <div className="container buyer-footer-inner">
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

// ─── Sub-Component: Product Card ─────────────────────────────────────────────
function ProductCard({ product }) {
  return (
    <div className="buyer-product-card">
      <div className="product-img-wrap">
        <img src={product.img} alt={product.name} className="product-thumb" />
      </div>
      <div className="product-info-wrap">
        <h4 className="product-name">{product.name}</h4>
        <span className="product-cat">{product.category}</span>
        <div className="product-price-row">
          <span className="product-price">{product.price}</span>
          <span className="product-unit">{product.unit}</span>
        </div>
        <div className="product-location">{product.location}</div>
        <div className="product-sold">{product.sold}</div>
      </div>
    </div>
  );
}

