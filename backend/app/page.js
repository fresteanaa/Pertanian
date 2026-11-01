export default function BackendHomePage() {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/auth/login',
      desc: 'Autentikasi akun pengguna (Petani / Pembeli) dengan email dan password.',
      color: '#2563eb',
    },
    {
      method: 'POST',
      path: '/api/auth/register',
      desc: 'Mendaftarkan akun baru untuk role Petani atau Pembeli.',
      color: '#16a34a',
    },
    {
      method: 'POST',
      path: '/api/auth/verify-otp',
      desc: 'Verifikasi 5 digit kode OTP setelah registrasi.',
      color: '#16a34a',
    },
    {
      method: 'GET',
      path: '/api/products',
      desc: 'Mendapatkan daftar komoditas dan produk hasil pertanian.',
      color: '#0891b2',
    },
    {
      method: 'GET',
      path: '/api/content/privacy-policy',
      desc: 'Mendapatkan konten data halaman Kebijakan Privasi.',
      color: '#0891b2',
    },
    {
      method: 'GET',
      path: '/api/content/terms-conditions',
      desc: 'Mendapatkan konten data halaman Syarat dan Ketentuan.',
      color: '#0891b2',
    },
  ];

  return (
    <main style={{ maxWidth: 860, margin: '40px auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#ffffff', borderRadius: 12, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 32 }}>🌿</span>
          <div>
            <h1 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: '#008468' }}>
              PehTani Backend API
            </h1>
            <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>
              Ditenagai oleh <strong>Next.js App Router (Route Handlers)</strong>
            </p>
          </div>
        </div>

        <div style={{ padding: '12px 16px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 8, color: '#065f46', fontSize: 14, marginBottom: 28 }}>
          🟢 Server Backend API berjalan normal di port <strong>5000</strong>.
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#1e293b' }}>
          Daftar API Route Handlers:
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {endpoints.map((ep, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderRadius: 8,
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span
                  style={{
                    backgroundColor: ep.color,
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: 12,
                    padding: '4px 10px',
                    borderRadius: 6,
                    fontFamily: 'monospace',
                  }}
                >
                  {ep.method}
                </span>
                <div>
                  <a
                    href={ep.method === 'GET' ? ep.path : '#'}
                    style={{
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      color: '#008468',
                      textDecoration: 'none',
                      fontSize: 15,
                    }}
                  >
                    {ep.path}
                  </a>
                  <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: 13 }}>
                    {ep.desc}
                  </p>
                </div>
              </div>

              {ep.method === 'GET' && (
                <a
                  href={ep.path}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: 13,
                    color: '#008468',
                    textDecoration: 'underline',
                    fontWeight: 600,
                  }}
                >
                  Buka JSON &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
