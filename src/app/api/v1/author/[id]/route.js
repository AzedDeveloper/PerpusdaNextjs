import { NextResponse} from 'next/server';
import pool from 'utils/Connections';

export async function GET(req, {params}) {
    try {
      const db = await pool.connect();
      const result = await db.query(`SELECT isbn, tb_author.id_author, tb_author.nama as author, tb_publisher.id_publisher, tb_publisher.nama as publisher, tb_kategori.id_kategori, tb_kategori.nama as kategori, judul, cover, halaman, tb_bahasa.nama as bahasa, tahun, (SELECT COUNT(id_views)::INT FROM tb_views WHERE isbn = tb_buku.isbn) as views, url, deskripsi FROM tb_buku INNER JOIN tb_author ON tb_author.id_author = tb_buku.id_author INNER JOIN tb_kategori ON tb_kategori.id_kategori = tb_buku.id_kategori INNER JOIN tb_publisher ON tb_publisher.id_publisher = tb_buku.id_publisher INNER JOIN tb_bahasa ON tb_bahasa.id_bahasa = tb_buku.id_bahasa WHERE tb_buku.id_author = ${params.id}`);
      const data = result.rows;
      db.release();
      return NextResponse.json({"status": 200, "length": data.length, "author": data[0].author, "data": data});
    } catch (errors) {
      return NextResponse.json({
        error: errors
      }, { status: 500 })
    }
}