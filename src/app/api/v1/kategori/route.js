import { NextResponse } from 'next/server';
import pool from 'utils/Connections';

export async function GET() {
  try {
    const db = await pool.connect();
    const result = await db.query('SELECT * FROM tb_kategori ORDER BY id_kategori ASC');
    const data = result.rows;
    db.release();
    return NextResponse.json({status: 200, length: data.length, data});
  } catch (errors) {
    return NextResponse.json({
      error: errors
    }, { status: 500 })
  }
}