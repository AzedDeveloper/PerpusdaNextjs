/* DATA BUKU */
let data = [];
export const getData = () => data;
export const getById = (id) => data.find((d) => d.id_buku == id);
export const addAllData = (d) => {
    data = d;
}
export const addData = (d) => {
    data.push(d);
}
export const deleteData = (ids) => {
    data = data.filter((d) => d.id_buku != ids);
}
export const updateData = (d) => {
    let datas = data.find((dv) => dv.id_buku == d.id_buku);

    if (datas) {
        datas.id_author = d.id_author;
        datas.author = d.author;
        datas.id_kategori = d.id_kategori;
        datas.kategori = d.kategori;
        datas.judul = d.judul;
        datas.rilis = d.rilis;
        datas.cover = d.cover;
    }else{
        throw new Error('Data not found');
    }
}
/* DATA BUKU */

/* DATA Kategori */
let dataKategori = [];
export const getDataKategori = () => dataKategori;
export const addDataKategori = (d) => {
    dataKategori.push(d);
}
export const addAllDataKategori = (d) => {
    dataKategori = d;
}
/* DATA BUKU */