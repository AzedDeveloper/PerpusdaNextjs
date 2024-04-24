import { NextResponse} from 'next/server';
import { getById, deleteData, updateData } from "@/lib/data"
import pool from 'utils/Connections';
import { fetchBuku } from '@/utils/Api';

export async function GET(req, {params}) {
    try {

        /*
        let data = getById(params.id);
        if(data != undefined){
          return NextResponse.json({"status": 200, data});   
        }else{
          await fetchBuku();
          data = getById(params.id);
          if(data != undefined){
            return NextResponse.json({"status": 200, data});   
          }else{
            return NextResponse.json({"status": 404, "data": "Data Tidak Ditemukan"});
          }   
        }
        */
      const db = await pool.connect();
      const result = await db.query(`SELECT isbn, tb_author.id_author, tb_author.nama as author, tb_publisher.id_publisher, tb_publisher.nama as publisher, tb_kategori.id_kategori, tb_kategori.nama as kategori, judul, cover, halaman, tb_bahasa.nama as bahasa, tahun, (SELECT COUNT(id_views)::INT FROM tb_views WHERE isbn = tb_buku.isbn) as views FROM tb_buku INNER JOIN tb_author ON tb_author.id_author = tb_buku.id_author INNER JOIN tb_kategori ON tb_kategori.id_kategori = tb_buku.id_kategori INNER JOIN tb_publisher ON tb_publisher.id_publisher = tb_buku.id_publisher INNER JOIN tb_bahasa ON tb_bahasa.id_bahasa = tb_buku.id_bahasa WHERE tb_buku.isbn = ${params.id}`);
      const data = result.rows;
      db.release();
      return NextResponse.json({"status": 200, "length": data.length, "data": data[0]});
    } catch (errors) {
      return NextResponse.json({
        error: errors
      }, { status: 500 })
    }
}

export async function DELETE(req, {params}) {
  try {
    const db = await pool.connect();
    const result = await db.query("SELECT * FROM tb_buku WHERE id_buku = '"+params.id+"'");
    const data = result.rows;
    db.release();
    deleteData(params.id);
    return NextResponse.json({"status": 200, "message": data});
  } catch (errors) {
    return NextResponse.json({
      error: errors
    }, { status: 500 })
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    updateData(body);
    return NextResponse.json({"status": 200});
  } catch (errors) {
    return NextResponse.json({
      error: errors
    }, { status: 500 })
  }
}