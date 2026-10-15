import React from 'react';
import './StatsSection.css';

export default function StatsSection() {
  const stats = [
    { value: '3000+', label: 'Pesanan Per Bulan' },
    { value: '1000+', label: 'Pelanggan Aktif' },
    { value: '24/7', label: 'Akses Platform Tanpa Henti' },
    { value: '30+', label: 'Mitra Lokal dan Distributor Resmi' },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
