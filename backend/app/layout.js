export const metadata = {
  title: 'PehTani Backend API (Next.js)',
  description: 'Backend REST API untuk Platform Pemasaran Hasil Pertanian PehTani',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', color: '#1e293b' }}>
        {children}
      </body>
    </html>
  );
}
