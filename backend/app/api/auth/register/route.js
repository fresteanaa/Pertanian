import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { role, namaPengguna, noHp, namaUsaha, provinsiUsaha } = body;

    if (!role || !namaPengguna || !noHp) {
      return NextResponse.json(
        { message: 'Role, Nama Pengguna, dan Nomor HP wajib diisi.' },
        { status: 400 }
      );
    }

    // Simulasi pembuatan akun & generate kode OTP
    const generatedOtp = '12345'; // dummy fixed OTP untuk kemudahan testing

    return NextResponse.json({
      message: 'Pendaftaran berhasil dikirim. Silakan verifikasi OTP.',
      status: 'pending_verification',
      data: {
        role,
        namaPengguna,
        noHp,
        namaUsaha: namaUsaha || null,
        provinsiUsaha: provinsiUsaha || null,
      },
      debugOtp: generatedOtp, // hanya untuk kemudahan developer melihat kode OTP
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal memproses pendaftaran.', error: error.message },
      { status: 500 }
    );
  }
}
