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
        <div className="md:text-xl font-bold mt-3">Koleksi Terpopuler</div>
        <div className="text-xs md:text-sm">Koleksi terpopuler untuk Anda</div>
        <ListBuku populer/>
        <div className="md:text-xl font-bold mt-3">Koleksi Terbaru</div>
        <div className="text-xs md:text-sm">Koleksi terbaru untuk Anda</div>
        <ListBuku terbaru/>
      </div>
      <div className="flex flex-col px-5 py-5 md:py-10 my-5 space-y-1 items-center bg-white w-screen border-gray-200 border-[1px]">
        <div className="font-bold text-lg md:text-2xl">Selamat Membaca</div>
        <div className="text-xs md:text-sm text-center">Buku adalah jendela dunia di mana kita bisa melihat isi dunia tanpa melakukan perjalanan, hanya cukup membaca sebuah halaman</div>
      </div>
      <div className="px-[5%] flex flex-col md:flex-row md:space-x-5 my-5">
        <iframe
          className="w-[90vw] h-[300px] md:h-[400px] md:w-[50vw] rounded-xl"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?&q=Space+Needle,Seattle+WA">
        </iframe>
        <div className="space-y-2 mt-3 md:mt-0">
          <div className="font-medium text-xl">Perpustakaan Digital Arpusda Wonosobo</div>
          <div className="text-sm text-justify">Perpustakaan Digital atau E-Book adalah inovasi dari Dinas Arpusda Wonosobo untuk membantu masyarakat Wonosobo dalam mengakses buku-buku digital melalui PC, Laptop dan smartphone.</div>
          <div className="flex justify-center md:justify-start space-x-3">
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
