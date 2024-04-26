"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { BASE_API_URL } from '@/utils/constants'
import { MdOutlineShare } from 'react-icons/md'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Paggination from '@/components/Paggination'

const fetcher = (url) => fetch(url).then((res) => res.json());

const page = ({params}) => {
  const { data, error, isLoading } = useSWR(`${BASE_API_URL}/api/v1/author/${params.id_author}`, fetcher);
  const urlParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [itemsPage, setItemsPage] = useState(5);

  const dataFilter = () => {
    let temp = [];
    temp = urlParams.has("kategori") ? data.data.filter((x) => x.kategori == urlParams.get("kategori")) : data.data;
    if(!urlParams.has("sort")){
        temp = temp.sort((a, b) => b.views - a.views);
    }else if(urlParams.has("sort") && urlParams.get("sort") == "asc"){
        temp = temp.sort((a, b) => (a.judul < b.judul ? -1 : 1));
    }else if(urlParams.has("sort") && urlParams.get("sort") == "desc"){
        temp = temp.sort((a, b) => (a.judul > b.judul ? -1 : 1));
    }

    return temp;
  }

  const updateParams = (_params) => {
    const newParams = new URLSearchParams(urlParams.toString());
    newParams.set(_params.type, _params.value);
    if(_params.type == "kategori" && _params.value == "all"){
        newParams.delete(_params.type);
    }
    if(_params.type == "sort" && _params.value == "populer"){
        newParams.delete(_params.type);
    }
    if(newParams.has("page")){
        newParams.delete("page");
    }
    router.push(`${pathName}?${newParams.toString()}`);
  }

  const paggination = (_option) => {
    const newParams = new URLSearchParams(urlParams.toString());
    if(_option == "next"){
        if(newParams.has("page")){
            if(urlParams.get("page") < Math.ceil(dataFilter().length/5)){
                newParams.set("page", parseInt(urlParams.get("page")) + 1);
                router.push(`${pathName}?${newParams.toString()}`);
            }
        }else{
            if(Math.ceil(dataFilter().length/5) > 1){
                newParams.set("page", 2);
                router.push(`${pathName}?${newParams.toString()}`);
            }
        }
    }else if(_option == "prev"){
        if(urlParams.get("page") > 1){
            if(urlParams.get("page") - 1 == 1){
                newParams.delete("page");
            }else{
                newParams.set("page", parseInt(urlParams.get("page")) - 1);
            }
            router.push(`${pathName}?${newParams.toString()}`);
        }
    }
  }

  return (
    <main className="w-screen py-20 bg-[#f8fafc] px-[5%] md:px-[10%]">
        <div className='md:mb-10 mb-5 text-xs text-gray-400 flex space-x-3'>
            <Link href='/' className='hover:text-black hover:font-medium'>Beranda</Link>
            <div>/</div>
            <div>Pencipta</div>
            <div>/</div>
            <div className='text-black font-medium'>{!isLoading ? data.author : "-"}</div>
        </div>
        <div className='flex space-x-5'>
            <div className='space-y-3 w-full md:w-[70%]'>
                {
                    isLoading ? (
                        <div>Loading</div>
                    ) : (
                        <>
                        {//0,5 => 5,10 => 10,15
                            dataFilter().slice(urlParams.has("page") ? (parseInt(urlParams.get("page")) - 1) * itemsPage : 0, urlParams.has("page") ? parseInt(urlParams.get("page")) * itemsPage : 5).map((items, indx) => {
                                return <Link href={`/buku/${items.isbn}`} key={indx} className='flex bg-white p-3 space-x-5'>
                                    <img src={items.cover} className='h-20 w-14 md:h-32 md:w-24' />
                                    <div className='flex-1'>
                                        <div className='flex items-center'>
                                            <div className='flex-1'>
                                                <div className='font-semibold text-sm md:text-lg'>{items.judul}</div>
                                                <div className='text-[.6rem] md:text-xs font-light'>{items.author}</div>
                                            </div>
                                            <div className='flex space-x-3'>
                                                <Link href={""}>
                                                    <MdOutlineShare onClick={() => navigator.clipboard.writeText(`${BASE_API_URL}/buku/${items.isbn}`)} className='size-4 md:size-6 hover:cursor-pointer text-blue-500'/>
                                                </Link>
                                                <svg viewBox="-25 0 550 503.876" stroke='#3b82f6' strokeWidth={50} className='w-4 h-4 md:w-6 md:h-6 fill-transparent hover:fill-blue-500'>
                                                    <path
                                                        d="M469.361,71.689c-32.071-35.681-70.026-54.532-109.761-54.532c-44.309,0-84.27,27.01-107.654,71.638 c-23.334-44.628-62.993-71.638-106.857-71.638c-39.743,0-76.649,18.331-109.719,54.482 C-3.392,114.042-25.273,210.34,50.889,282.356c35.143,33.221,193.779,200.074,195.374,201.753c1.586,1.662,3.785,2.61,6.077,2.61 h0.008c2.291,0,4.482-0.94,6.068-2.594c1.603-1.679,160.667-168.163,195.458-201.837 C528.576,209.962,507.274,113.866,469.361,71.689z" 
                                                        />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className='my-3 text-[.6rem] md:text-xs text-justify line-clamp-3'>{items.deskripsi == "" || items.deskripsi == null ? "Tidak ada deskripsi" : items.deskripsi}</div>
                                        <div className='flex text-[.6rem] md:text-xs'>
                                            <div className='w-16 md:w-32 font-semibold'>ISBN/ISSN</div>
                                            <div>{items.isbn}</div>
                                        </div>
                                        <div className='flex text-[.6rem] md:text-xs'>
                                            <div className='w-16 md:w-32 font-semibold'>Halaman</div>
                                            <div>{items.halaman} halaman</div>
                                        </div>
                                        <div className='flex text-[.6rem] md:text-xs'>
                                            <div className='w-16 md:w-32 font-semibold'>Penerbit</div>
                                            <Link href={"/"} className='text-blue-500 z-20 hover:text-blue-700 hover:font-medium hover:cursor-pointer'>{items.publisher}</Link>
                                        </div>
                                    </div>
                                </Link>       
                            })
                        }
                        </>
                    )
                }
                { !isLoading && <Paggination data={dataFilter()} itemsPage={itemsPage} />}
            </div>
            <div className='hidden md:flex flex-col flex-1'>
                <div className='text-xs mb-3'>Ditemukan {!isLoading ? data.length : 0} hasil pencarian buku dari pencipta "{!isLoading ? data.author : "-"}"</div>
                <div className='font-semibold mb-1'>Kategori</div>
                <select value={urlParams.has("kategori")?urlParams.get("kategori"):"all"} onChange={(e) => updateParams({"type": "kategori", "value": e.target.value})} className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none'>
                    <option value={"all"}>Semua</option>
                    <option value={"Ekonomi"}>Ekonomi</option>
                    <option value={"Humor"}>Humor</option>
                    <option value={"Keagamaan"}>Keagamaan</option>
                    <option value={"Hukum"}>Hukum</option>
                </select>
                <div className='font-semibold mt-3 mb-1'>Urutkan</div>
                <div className='space-y-1'>
                    {/*}
                    <div className='flex space-x-5 text-sm'>
                        <input type='radio' checked={urutkan==0} onChange={() => setUrutkan(0)} className='hover:cursor-pointer'/>
                        <div onClick={() => setUrutkan(0)} className={`${urutkan == 0 &&'text-blue-500 font-bold'} hover:cursor-pointer`}>Terbaru</div>
                    </div>
                    {*/}
                    <div className='flex space-x-5 text-sm'>
                        <input type='radio' checked={urlParams.has("sort")?urlParams.get("sort")=="populer":true} onChange={() => updateParams({"type": "sort", "value": "populer"})} className='hover:cursor-pointer'/>
                        <div onClick={() => updateParams({"type": "sort", "value": "populer"})} className={`${urlParams.has("sort")?urlParams.get("sort")=="populer":true &&'text-blue-500 font-bold'} hover:cursor-pointer`}>Terpopuler</div>
                    </div>
                    <div className='flex space-x-5 text-sm'>
                        <input type='radio' checked={urlParams.has("sort")&&urlParams.get("sort")=="asc"} onChange={() => updateParams({"type": "sort", "value": "asc"})} className='hover:cursor-pointer'/>
                        <div onClick={() => updateParams({"type": "sort", "value": "asc"})} className={`${urlParams.has("sort")&&urlParams.get("sort")=="asc" &&'text-blue-500 font-bold'} hover:cursor-pointer`}>Abjad (A-Z)</div>
                    </div>
                    <div className='flex space-x-5 text-sm'>
                        <input type='radio' checked={urlParams.has("sort")&&urlParams.get("sort")=="desc"} onChange={() => updateParams({"type": "sort", "value": "desc"})} className='hover:cursor-pointer'/>
                        <div onClick={() => updateParams({"type": "sort", "value": "desc"})} className={`${urlParams.has("sort")&&urlParams.get("sort")=="desc" &&'text-blue-500 font-bold'} hover:cursor-pointer`}>Abjad (Z-A)</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default page