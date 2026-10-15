import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section" id="tentang">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="about-title">
            Dapatkan sayuran segar<br />
            dari rumah Anda
          </h2>
          <p className="about-description">
            Temukan produk segar dan sehat untuk kebutuhan sehari-hari serta dukung petani Indonesia untuk terus berkembang
          </p>
          <a href="#produk" className="btn-about">
            Temukan Hasil Pertanian Segar
          </a>
        </div>

        <div className="about-image-card">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80"
            alt="Sayuran dan buah segar dari rumah"
          />
        </div>
      </div>
    </section>
  );
}
