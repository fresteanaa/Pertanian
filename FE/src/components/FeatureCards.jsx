import React from 'react';
import './FeatureCards.css';

export default function FeatureCards() {
  const features = [
    {
      id: 1,
      title: 'Teknologi yang Mengubah Cara Petani Bekerja',
      description:
        'Berbagai inovasi teknologi dalam dunia pertanian yang membantu meningkatkan efisiensi dan hasil panen. Dan alat pertanian modern hingga aplikasi berbasis data, teknologi memberikan dampak besar pada cara petani mengelola lahan mereka.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Menjaga Kesehatan Tanah',
      description:
        'Tips tentang pengelolaan tanah yang baik, penggunaan pupuk organik, dan teknik rotasi tanaman.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Bibit Pertanian yang Berkualitas',
      description:
        'Memberikan informasi lengkap untuk petani pemula maupun yang berpengalaman untuk memilih bibit.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="features-section" id="edukasi">
      <div className="container">
        <div className="features-grid">
          {features.map((item) => (
            <div
              key={item.id}
              className="feature-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="feature-card-overlay"></div>
              <div className="feature-card-body">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.description}</p>
                <button className="btn-feature">Lihat Lebih Lanjut</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
