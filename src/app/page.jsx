import React from "react";
import Kategori from "@/components/Kategori";
import { getData, getDataKategori } from '@/lib/data';
import { fetchKategori, fetchBuku } from '@/utils/Api';
import ListBuku from "@/components/ListBuku";
import { FaXTwitter, FaSquareFacebook, FaYoutube, FaInstagram } from "react-icons/fa6";

export default async function Home() {
  getDataKategori().length == 0 && await fetchKategori();
  getData().length == 0 && await fetchBuku();

  return (
    <main className="w-screen pt-16 bg-[#f8fafc]">
      <div className="px-[5%] flex flex-col">
        <div className="text-sm font-bold text-center">Pilih Topik Yang Anda Suka</div>
        <Kategori />
        <div className="text-xl font-bold">Koleksi Terpopuler</div>
        <div className="text-sm">Koleksi terpopuler untuk Anda</div>
        <ListBuku populer/>
        <div className="text-xl font-bold mt-6">Koleksi Terbaru</div>
        <div className="text-sm">Koleksi terbaru untuk Anda</div>
        <ListBuku terbaru/>
      </div>
      <div className="flex flex-col px-5 py-10 my-5 space-y-1 items-center bg-white w-screen border-gray-200 border-[1px]">
        <div className="font-bold text-2xl">Selamat Membaca</div>
        <div className="text-sm">Buku adalah jendela dunia di mana kita bisa melihat isi dunia tanpa melakukan perjalanan, hanya cukup membaca sebuah halaman</div>
      </div>
      <div className="px-[5%] flex space-x-5 my-5">
        <div>
          <iframe
            width="600"
            height="400"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?&q=Space+Needle,Seattle+WA">
          </iframe>
        </div>
        <div className="space-y-3">
          <div className="font-medium text-xl">Perpustakaan Digital Arpusda Wonosobo</div>
          <div className="text-sm">Perpustakaan Digital atau E-Book adalah inovasi dari Dinas Arpusda Wonosobo untuk membantu masyarakat Wonosobo dalam mengakses buku-buku digital melalui PC, Laptop dan smartphone.</div>
          <div className="flex space-x-3">
            <FaSquareFacebook size={30} />
            <FaXTwitter size={30} />
            <FaYoutube size={30} />
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
    </main>
  );
}
