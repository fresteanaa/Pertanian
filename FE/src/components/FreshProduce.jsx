import React from 'react';
import './FreshProduce.css';

export default function FreshProduce() {
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
    {
      id: 2,
      name: 'Cabai Rawit Merah',
      category: 'Sayuran',
      price: 'Rp30.000',
      unit: '/ Kg',
      location: 'Klaten, Jawa Tengah',
      sold: 'Terjual 188 kg',
      image: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Wortel Segar',
      category: 'Sayuran',
      price: 'Rp10.000',
      unit: '/ Kg',
      location: 'Bandung, Jawa Barat',
      sold: 'Terjual 333 kg',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section className="produce-section" id="produk">
      <div className="container">
        {/* Header row */}
        <div className="produce-header">
          <div className="produce-title-group">
            <span className="badge-harvest">Baru Saja Dipanen</span>
            <h2 className="produce-heading">Sayuran Segar</h2>
          </div>
          <a href="#lainnya" className="produce-more-link">
            Lainnya <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Product Grid */}
        <div className="produce-grid">
          {products.map((product) => (
            <div key={product.id} className="produce-card">
              <div className="produce-img-wrap">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="produce-details">
                <h3 className="produce-name">{product.name}</h3>
                <span className="produce-category">{product.category}</span>
                <div className="produce-price">
                  {product.price} <span className="produce-unit">{product.unit}</span>
                </div>
                <div className="produce-location">{product.location}</div>
                <div className="produce-sold">{product.sold}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
