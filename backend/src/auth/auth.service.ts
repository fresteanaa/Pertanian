import { Injectable, UnauthorizedException } from '@nestjs/common';

/**
 * AuthService — Logika bisnis untuk autentikasi (Login & Register).
 *
 * Saat ini menggunakan data dummy (in-memory).
 * TODO: Nanti ganti dengan database (TypeORM + PostgreSQL) dan hash password (bcrypt).
 */
@Injectable()
export class AuthService {
  /**
   * Data pengguna sementara — HANYA untuk development/testing.
   * Di production, data ini harus tersimpan di database dengan password ter-hash.
   */
  private readonly users = [
    {
      id: 1,
      name: 'Petani Demo',
      email: 'petani@pehtani.com',
      password: 'password123',  // ⚠️ JANGAN simpan password plaintext di production!
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

  /**
   * Proses Login:
   * 1. Cari user berdasarkan email
   * 2. Cocokkan password (nanti pakai bcrypt.compare)
   * 3. Jika valid → kembalikan data user + token
   */
  async login(email: string, password: string) {
    // Langkah 1: Cari user berdasarkan email
    const user = this.users.find((u) => u.email === email);

    // Langkah 2: Jika user tidak ditemukan atau password salah → tolak
    if (!user || user.password !== password) {
      throw new UnauthorizedException('Email atau kata sandi salah.');
    }

    // Langkah 3: Login berhasil — kirim balik data user (TANPA password)
    // TODO: Ganti ini dengan JWT token sungguhan menggunakan @nestjs/jwt
    return {
      message: 'Login berhasil!',
      access_token: `dummy-token-${user.id}-${Date.now()}`, // placeholder token
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}

