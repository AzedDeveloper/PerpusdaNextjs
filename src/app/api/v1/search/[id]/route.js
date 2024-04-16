import { NextResponse} from 'next/server';
import { getById, deleteData, updateData } from "@/lib/data"
import pool from 'utils/Connections';

export async function GET(req, {params}) {
    try {
        const data = getById(params.id);
        if(data != undefined){
          return NextResponse.json({"status": 200, data});   
        }else{
          return NextResponse.json({"status": 404, "data": "Data Tidak Ditemukan"});   
        }
    } catch (errors) {
      return NextResponse.json({
        error: errors
      }, { status: 500 })
    }
}

export async function DELETE(req, {params}) {
  try {
    const db = await pool.getConnection();
    const data = await db.execute("SELECT * FROM tb_buku WHERE id_buku = '"+params.id+"'");
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