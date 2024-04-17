import { NextResponse } from 'next/server';
import pool from 'utils/Connections';
import { addAllDataKategori } from '@/lib/data';

export async function GET() {
  try {
    const db = await pool.connect();
    const result = await db.query('SELECT * FROM tb_kategori');
    const data = result.rows;
    db.release();
    addAllDataKategori(data);
    return NextResponse.json({status: 200, length: data.length, data});
  } catch (errors) {
    return NextResponse.json({
      error: errors
    }, { status: 500 })
  }
}