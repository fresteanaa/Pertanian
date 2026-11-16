import { NextResponse } from 'next/server';

// Data Pesanan Masuk yang Butuh Konfirmasi Petani
let incomingOrders = [
  {
    id: 'ORD-101',
    buyerName: 'Ramayuda Mahardika',
    productName: 'Tomat Merah Segar',
    quantity: '10 Kg',
    totalPrice: 'Rp120.000',
    status: 'Menunggu Konfirmasi',
    orderDate: '16 Nov 2026, 14:30 WIB',
    location: 'Bandung, Jawa Barat',
  },
  {
    id: 'ORD-102',
    buyerName: 'Siti Aminah',
    productName: 'Cabai Rawit Merah',
    quantity: '5 Kg',
    totalPrice: 'Rp150.000',
    status: 'Menunggu Konfirmasi',
    orderDate: '16 Nov 2026, 16:15 WIB',
    location: 'Semarang, Jawa Tengah',
  },
  {
    id: 'ORD-103',
    buyerName: 'Budi Santoso',
    productName: 'Tomat Merah Segar',
    quantity: '15 Kg',
    totalPrice: 'Rp180.000',
    status: 'Dikonfirmasi',
    orderDate: '15 Nov 2026, 10:00 WIB',
    location: 'Jakarta Selatan',
  },
];

// GET /api/farmer/orders - Mengambil daftar pesanan masuk
export async function GET() {
  return NextResponse.json({
    status: 'success',
    count: incomingOrders.length,
    data: incomingOrders,
  });
}

// PATCH /api/farmer/orders - Mengonfirmasi pesanan
export async function PATCH(request) {
  try {
    const { orderId, status } = await request.json();

    const order = incomingOrders.find((o) => o.id === orderId);
    if (!order) {
      return NextResponse.json(
        { message: 'Pesanan tidak ditemukan.' },
        { status: 404 }
      );
    }

    order.status = status || 'Dikonfirmasi';

    return NextResponse.json({
      message: `Pesanan ${orderId} berhasil dikonfirmasi!`,
      data: order,
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal mengonfirmasi pesanan.', error: error.message },
      { status: 500 }
    );
  }
}
