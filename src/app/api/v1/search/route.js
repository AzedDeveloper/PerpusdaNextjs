import { NextResponse, NextRequest } from 'next/server';
import pool from 'utils/Connections';

export async function GET() {
    try {
      const db = await pool.connect();
      const result = await db.query('SELECT id_buku, tb_author.id_author, tb_author.nama as author, tb_kategori.id_kategori, tb_kategori.nama as kategori, judul, views, cover, rilis FROM tb_buku INNER JOIN tb_author ON tb_author.id_author = tb_buku.id_author INNER JOIN tb_kategori ON tb_kategori.id_kategori = tb_buku.id_kategori');
      const data = result.rows;
      db.release();
      return NextResponse.json({"status": 200, "length": data.length, data});
    } catch (errors) {
      return NextResponse.json({
        error: errors
      }, { status: 500 })
    }
}