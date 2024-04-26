"use client"
import { BASE_API_URL } from '@/utils/constants'
import React, { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'

const fetcher = (url) => fetch(url).then((res) => res.json());

function page({params}) {
  const { data, error, isLoading } = useSWR(`${BASE_API_URL}/api/v1/search/${params.isbn}`, fetcher);
  const [reading, setReading] = useState(false);

  return (
    <main className="w-screen py-20 bg-[#f8fafc] px-[5%] md:px-[10%]">
        <div className='md:mb-10 mb-5 text-xs text-gray-400 flex space-x-3'>
            <Link href='/' className='hover:text-black hover:font-medium'>Beranda</Link>
            <div>/</div>
            <Link href='/' className='hover:text-black hover:font-medium'>{!isLoading && data.data.kategori}</Link>
            <div>/</div>
            <div className='text-black font-medium'>{!isLoading && data.data.judul}</div>
        </div>
        <div className='md:flex md:space-x-5'>
            <div className='md:w-[30%] mb-10 flex justify-center md:justify-end'>
                {
                    isLoading ? (
                        <div className='w-[12rem] h-[19rem] bg-gray-300 animate-pulse rounded-lg' />
                    ) : (
                        <img src={data.data.cover} className='w-[12rem] h-[19rem] rounded-lg' />
                    )
                }
            </div>
            <div className='w-full'>
            {
                isLoading ? (
                    <div className='animate-pulse'>
                        <div className='flex'>
                            <div className='flex bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                        </div>
                        <div className='text-2xl font-medium bg-gray-300 w-32 rounded-lg my-1'>&nbsp;</div>
                        <div className='flex'>
                            <div className='flex bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                        </div>
                        <div className='h-[.1rem] bg-gray-200 my-3' />
                        <div className='text-xs text-justify bg-gray-300 w-20 rounded-lg'>&nbsp;</div>
                        <div className='h-[.1rem] bg-gray-200 my-3' />
                        <div className='font-bold mb-3'>Detail</div>
                        <div className='space-y-1'>
                            <div className='flex'>
                                <div className='text-xs font-medium w-52'>Publisher</div>
                                <div className='text-xs bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                            </div>
                            <div className='flex'>
                                <div className='text-xs font-medium w-52'>Jumlah Halaman</div>
                                <div className='text-xs bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                            </div>
                            <div className='flex'>
                                <div className='text-xs font-medium w-52'>Bahasa</div>
                                <div className='text-xs bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                            </div>
                            <div className='flex'>
                                <div className='text-xs font-medium w-52'>ISBN/ISSN</div>
                                <div className='text-xs bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                            </div>
                            <div className='flex'>
                                <div className='text-xs font-medium w-52'>Tahun Terbit</div>
                                <div className='text-xs bg-gray-300 w-12 rounded-lg'>&nbsp;</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                    <div className='flex'>
                        <div className='flex text-sm text-blue-500 hover:font-bold hover:text-blue-700 hover:cursor-pointer'>{data.data.kategori}</div>
                    </div>
                    <div className='text-2xl font-medium'>{data.data.judul}</div>
                    <div className='flex'>
                        <Link href={`/author/${data.data.id_author}`} className='flex text-sm text-blue-500 hover:font-bold hover:text-blue-700 hover:cursor-pointer'>{data.data.author}</Link>
                    </div>
                    <div className='h-[.1rem] bg-gray-200 my-3' />
                    <div className='text-xs text-justify'>{data.data.deskripsi == "" || data.data.deskripsi == null ? "Tidak ada deskripsi" : data.data.deskripsi}</div>
                    <div className='h-[.1rem] bg-gray-200 my-3' />
                    <div className='font-bold mb-3'>Detail</div>
                    <div className='space-y-1'>
                        <div className='flex'>
                            <div className='text-xs font-medium w-52'>Publisher</div>
                            <div className='text-xs'>{data.data.publisher}</div>
                        </div>
                        <div className='flex'>
                            <div className='text-xs font-medium w-52'>Jumlah Halaman</div>
                            <div className='text-xs'>{data.data.halaman}</div>
                        </div>
                        <div className='flex'>
                            <div className='text-xs font-medium w-52'>Bahasa</div>
                            <div className='text-xs'>{data.data.bahasa}</div>
                        </div>
                        <div className='flex'>
                            <div className='text-xs font-medium w-52'>ISBN/ISSN</div>
                            <div className='text-xs'>{data.data.isbn}</div>
                        </div>
                        <div className='flex'>
                            <div className='text-xs font-medium w-52'>Tahun Terbit</div>
                            <div className='text-xs'>{data.data.tahun}</div>
                        </div>
                    </div>
                    <div className='font-bold mt-3'>E-Book</div>
                    <div className='flex'>
                        <div onClick={() => setReading(true)} className='flex text-sm text-blue-500 hover:font-bold hover:text-blue-700 hover:cursor-pointer'>{data.data.judul}</div>
                    </div>
                    </>
                )
            }
            </div>
        </div>
        {
            reading && (
                <>
                <div className='flex absolute top-0 left-0 right-0 bottom-0 items-center justify-center z-50'>
                    <div onClick={() => setReading(false)} className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50' />
                    <div className='bg-white z-[60] h-full w-full md:h-[95vh] md:w-[37vw] md:flex items-center p-5 md:rounded-lg'>
                        <div className='md:hidden mb-3 flex items-center space-x-5'>
                            <svg onClick={() => setReading(false)} viewBox='0 0 23 23' className='w-4 h-4 md:hidden'>
                                <path
                                    d='M 2 16.346 L 2 19 L 24 5 L 24 2.5' 
                                    fill='black'/>
                                <path 
                                    d='M 2 2.5 L 2 5 L 24 19 L 24 16.346' 
                                    fill='black'/>
                            </svg>
                            <div className='font-bold'>{data.data.judul}</div>
                        </div>
                        <iframe src={data.data.url} className='w-[90vw] h-[90vh] md:w-[35vw] md:h-[90vh] md:rounded-lg' allow="autoplay"></iframe>    
                    </div>
                </div>
                </>
            )
        }
    </main>
  )
}

export default page