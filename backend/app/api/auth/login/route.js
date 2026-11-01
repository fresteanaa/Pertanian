import { NextResponse } from 'next/server';

// Data pengguna dummy (in-memory) untuk development
const users = [
  {
    id: 1,
    name: 'Petani Demo',
    email: 'petani@pehtani.com',
    password: 'password123',
    role: 'petani',
  },
  {
    id: 2,
    name: 'Pembeli Demo',
    email: 'pembeli@pehtani.com',
    password: 'password123',
    role: 'pembeli',
  },
];

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email/No HP dan kata sandi wajib diisi.' },
        { status: 400 }
      );
    }

    // Cari user berdasarkan email atau fallback demo
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

    if (!user || user.password !== password) {
      // Jika akun demo tidak cocok persis, kita periksa apakah format email valid untuk testing
      if (email && password.length >= 6) {
        return NextResponse.json({
          message: 'Login berhasil!',
          access_token: `dummy-jwt-${Date.now()}`,
          user: {
            id: 99,
            name: email.split('@')[0],
            email: email,
            role: 'petani',
          },
        });
      }

      return NextResponse.json(
        { message: 'Email atau kata sandi salah.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'Login berhasil!',
      access_token: `dummy-jwt-${user.id}-${Date.now()}`,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Terjadi kesalahan pada server.', error: error.message },
      { status: 500 }
    );
  }
}

