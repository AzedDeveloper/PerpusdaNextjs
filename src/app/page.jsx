import React from "react";
import Kategori from "@/components/Kategori";
import { getDataKategori } from '@/lib/data';
import { BASE_API_URL } from '@/utils/constants';
import Test from "@/components/Test";
import { addAllDataKategori } from '@/lib/data';

async function fetchKategori() {
  console.log("KATEGORI FETCHING");
  const res = await fetch(`${BASE_API_URL}/api/v1/kategori`, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors",
    credentials: "same-origin",
    next: { revalidate: 0 },
  });
  const result = await res.json();
  addAllDataKategori(result.data);
  return result.data;
}

export default async function Home() {
  getDataKategori().length == 0 && await fetchKategori();

  return (
    <main className="px-[5%] w-screen flex flex-col pt-16">
      <div className="text-sm font-bold text-center">Pilih Topik Yang Anda Suka</div>
      <Kategori data={getDataKategori()}/>
      <div className="text-xl font-bold">Koleksi Terpopuler</div>
      <div className="text-sm">Koleksi Populer untuk Anda</div>
      <div className="flex my-4 space-x-5 overflow-x-auto">
        <div className="w-[15vw]">
          <img src="https://cdn.gramedia.com/uploads/items/9789792281415_Gadis_Kretek___w150_hauto.jpg" className="w-[15vw]"/>
          <div className="text-[.6rem] mt-3 leading-[.5rem]">Ratih Kumala</div>
          <div className="font-medium text-sm">Gadis Kretek dan Selomerto</div>
        </div>
        <div className="w-[15vw]">
          <img src="https://cdn.gramedia.com/uploads/items/9789792281415_Gadis_Kretek___w150_hauto.jpg" className="w-[15vw]"/>
          <div className="text-[.6rem] mt-3 leading-[.5rem]">Ratih Kumala</div>
          <div className="font-medium text-sm">Gadis Kretek</div>
        </div>
        <div className="w-[15vw]">
          <img src="https://cdn.gramedia.com/uploads/items/9789792281415_Gadis_Kretek___w150_hauto.jpg" className="w-[15vw]"/>
          <div className="text-[.6rem] mt-3 leading-[.5rem]">Ratih Kumala</div>
          <div className="font-medium text-sm">Gadis Kretek</div>
        </div>
        <div className="w-[15vw]">
          <img src="https://cdn.gramedia.com/uploads/items/9789792281415_Gadis_Kretek___w150_hauto.jpg" className="w-[15vw]"/>
          <div className="text-[.6rem] mt-3 leading-[.5rem]">Ratih Kumala</div>
          <div className="font-medium text-sm">Gadis Kretek</div>
        </div>
        <div className="w-[15vw]">
          <img src="https://cdn.gramedia.com/uploads/items/9789792281415_Gadis_Kretek___w150_hauto.jpg" className="w-[15vw]"/>
          <div className="text-[.6rem] mt-3 leading-[.5rem]">Ratih Kumala</div>
          <div className="font-medium text-sm">Gadis Kretek</div>
        </div>
        <div className="w-[15vw]">
          <img src="https://cdn.gramedia.com/uploads/items/9789792281415_Gadis_Kretek___w150_hauto.jpg" className="w-[15vw]"/>
          <div className="text-[.6rem] mt-3 leading-[.5rem]">Ratih Kumala</div>
          <div className="font-medium text-sm">Gadis Kretek</div>
        </div>
      </div>
      <div className="text-xl font-bold mt-6">Koleksi Terpopuler</div>
      <div className="text-sm">Koleksi Populer untuk Anda</div>
    </main>
  );
}
