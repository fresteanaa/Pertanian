import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { otp } = body;

    if (!otp || String(otp).length < 5) {
      return NextResponse.json(
        { message: 'Kode OTP harus 5 digit lengkap.' },
        { status: 400 }
      );
    }

    // Untuk demo development: kode apa pun dengan 5 digit diterima (atau '12345')
    return NextResponse.json({
      message: 'Kode OTP valid! Akun Anda telah berhasil diverifikasi.',
      verified: true,
      access_token: `verified-token-${Date.now()}`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal memverifikasi OTP.', error: error.message },
      { status: 500 }
    );
  }
}

