import { NextResponse } from 'next/server';

// Data produk pertanian
const products = [
  {
    id: 1,
    name: 'Tomat Merah Segar',
    category: 'Sayuran',
    price: 'Rp12.000',
    unit: '/ Kg',
    location: 'Lembang, Jawa Barat',
    sold: 'Terjual 226 kg',
    img: 'https://images.unsplash.com/photo-1546094096-0df4bcabd337?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    name: 'Cabai Rawit Merah',
    category: 'Sayuran',
    price: 'Rp30.000',
    unit: '/ Kg',
    location: 'Klaten, Jawa Tengah',
    sold: 'Terjual 188 kg',
    img: 'https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    name: 'Wortel Segar',
    category: 'Sayuran',
    price: 'Rp10.000',
    unit: '/ Kg',
    location: 'Bandung, Jawa Barat',
    sold: 'Terjual 333 kg',
    img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=500&q=80',
  },
];

export async function GET() {
  return NextResponse.json({
    status: 'success',
    count: products.length,
    data: products,
  });
}

export async function POST(request) {
  try {
    const newProduct = await request.json();
    const created = {
      id: products.length + 1,
      ...newProduct,
    };
    products.push(created);

    return NextResponse.json(
      { message: 'Produk berhasil ditambahkan!', data: created },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal menambahkan produk.', error: error.message },
      { status: 500 }
    );
  }
}
