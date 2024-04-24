"use client"
import { BASE_API_URL } from '@/utils/constants'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

function page({params}) {
  const { data, error, isLoading } = useSWR(`${BASE_API_URL}/api/v1/search/${params.isbn}`, fetcher);

  return (
    <main className="w-screen py-20 bg-[#f8fafc] md:flex px-[5%] md:px-[10%] md:space-x-5">
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
                    <div className='flex text-sm text-blue-500 hover:font-bold hover:text-blue-700 hover:cursor-pointer'>{data.data.author}</div>
                </div>
                <div className='h-[.1rem] bg-gray-200 my-3' />
                <div className='text-xs text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non blandit enim, eu semper enim. Donec consequat ex nibh, sed porttitor arcu pulvinar vitae. Praesent nec rhoncus arcu. In hac habitasse platea dictumst. Donec sed purus massa. Proin fringilla risus mauris, porta finibus eros convallis vel. Fusce ac ligula nulla. Nunc blandit fermentum dolor nec scelerisque. Nunc cursus sem massa, id dapibus tortor lacinia vel. Aliquam vel nisi nisl. Vivamus sit amet suscipit justo, sed interdum nibh.

Fusce blandit imperdiet enim, ac viverra neque suscipit id. Proin a lorem ligula. Cras lobortis libero a massa rutrum malesuada. Donec ut felis tellus. Aliquam mattis ex eleifend mi tincidunt, et lobortis sapien pellentesque. Curabitur massa sapien, posuere nec ex ut, accumsan ultricies augue. Cras non odio augue. Suspendisse tempus elit elit, vel facilisis justo fringilla non. Aenean porta ligula turpis, ac luctus turpis vehicula at. Aenean maximus ligula feugiat volutpat eleifend. Vestibulum commodo enim id rhoncus elementum. Vivamus nec lacinia elit.</div>
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
                </>
            )
        }
        </div>
    </main>
  )
}

export default page