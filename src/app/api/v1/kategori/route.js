import { NextResponse } from 'next/server';
import pool from 'utils/Connections';
import { addAllDataKategori, getDataKategori } from '@/lib/data';

export async function POST() {
  try {
    const db = await pool.connect();
    const result = await db.execute('SELECT * FROM tb_kategori');
    const data = result.rows;
    db.release();
    addAllDataKategori(data);
    return NextResponse.json({status: 200, data});
  } catch (errors) {
    return NextResponse.json({
      error: errors
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    const data = await getDataKategori();
    return NextResponse.json({status: 200, length: data.length, data});
  } catch (errors) {
    return NextResponse.json({
      error: errors
    }, { status: 500 })
  }
}