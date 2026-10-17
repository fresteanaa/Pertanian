import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

export class LoginDto {
  email: string;
  password: string;
}

/**
 * AuthController — Menangani semua request yang berhubungan dengan autentikasi.
 *
 * URL yang tersedia:
 *   POST /auth/login    → Login dengan email & password
 *   POST /auth/register → Daftar akun baru (TODO: implementasi nanti)
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    // Validasi sederhana di sini, logika utama ada di AuthService
    if (!body.email || !body.password) {
      throw new UnauthorizedException('Email dan kata sandi wajib diisi.');
    }
    return this.authService.login(body.email, body.password);
  }
}

