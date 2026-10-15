import React from 'react';
import './StepBar.css';

export default function StepBar() {
  const steps = [
    { number: 1, title: 'Membuat Akun' },
    { number: 2, title: 'Tambahkan Hasil Pertanian' },
    { number: 3, title: 'Pesan dan Bayar' },
  ];

  return (
    <div className="step-bar-wrapper">
      <div className="container">
        <div className="step-bar-card">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-item">
                <div className="step-circle">{step.number}</div>
                <span className="step-text">{step.title}</span>
              </div>
              {index < steps.length - 1 && <div className="step-line"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
