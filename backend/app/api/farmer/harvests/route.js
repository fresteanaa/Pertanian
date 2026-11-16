import { NextResponse } from 'next/server';

// Data Hasil Panen Petani (in-memory dummy data)
let harvests = [
  {
    id: 1,
    name: 'Tomat Merah Segar',
    category: 'Sayuran',
    price: 'Rp12.000',
    unit: '/ Kg',
    location: 'Lembang, Jawa Barat',
    stock: '50 Kg',
    img: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Cabai Rawit Merah',
    category: 'Sayuran',
    price: 'Rp30.000',
    unit: '/ Kg',
    location: 'Brebes, Jawa Tengah',
    stock: '120 Kg',
    img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=500&q=80',
  },
];

// GET /api/farmer/harvests - Ambil semua hasil panen petani
export async function GET() {
  return NextResponse.json({
    status: 'success',
    count: harvests.length,
    data: harvests,
  });
}

// POST /api/farmer/harvests - Tambah hasil panen baru
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, category, price, location, stock, img } = body;

    if (!name || !price || !stock) {
      return NextResponse.json(
        { message: 'Nama produk, harga, dan pasokan stok wajib diisi.' },
        { status: 400 }
      );
    }

    const newHarvest = {
      id: harvests.length + 1,
      name,
      category: category || 'Sayuran',
      price: price.startsWith('Rp') ? price : `Rp${Number(price).toLocaleString('id-ID')}`,
      unit: '/ Kg',
      location: location || 'Kebun Sendiri',
      stock: stock.toLowerCase().includes('kg') ? stock : `${stock} Kg`,
      img: img || 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80',
    };

    harvests.unshift(newHarvest); // Taruh di awal daftar

    return NextResponse.json(
      {
        message: 'Hasil panen berhasil ditambahkan!',
        data: newHarvest,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal menambahkan hasil panen.', error: error.message },
      { status: 500 }
    );
  }
}
