import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

/**
 * AuthModule — Mendaftarkan AuthController dan AuthService agar bisa digunakan.
 * Modul ini kemudian di-import ke AppModule.
 */
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}

