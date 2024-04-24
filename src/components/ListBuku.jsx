'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { getData } from '@/lib/data';
import useSwr from 'swr';
import { BASE_API_URL } from '@/utils/constants';
import Link from 'next/link';

const fetcher = (url) => fetch(url).then((res) => res.json());

const ListBuku = ({populer= false, terbaru=false, all=false}) => {
  const { data, error, isLoading } = useSwr(`${BASE_API_URL}/api/v1/search`, fetcher);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
      if(!isLoading){
        setDatas(populer ? data.data.sort((a, b) => b.views - a.views) : terbaru ? data.data.sort((a, b) => new Date(b.rilis) - new Date(a.rilis)) : all ? data.data : data.data)
      }
  }, [isLoading]);

  return (
    <>
    <div className="hidden md:flex space-x-3 items-center my-4">
        {
            isLoading ? (
                Array.from({ length: 5}).map((_, i) => {
                    return (
                        <div key={i} className="w-[20%] animate-pulse">
                            <div className="w-full h-[23rem] bg-gray-300 rounded-lg"/>
                            <div className="text-[.6rem] mt-3 mb-1 leading-[.4rem] bg-gray-300 w-[20%] rounded-md">&nbsp;</div>
                            <div className="font-medium text-sm bg-gray-300 w-[50%] rounded-md">&nbsp;</div>
                        </div>
                    )
                })
            ) : (
                datas.slice(0, 5).map((item, indx) => {
                    return (
                        <Link href={`/buku/${item.isbn}`} key={indx} className="w-[20vw] hover:scale-105 hover:cursor-pointer">
                            <img src={item.cover} alt='cover' className="w-[20vw] h-[19rem] rounded-lg"/>
                            <div className="text-[.6rem] mt-3 mb-1 leading-[.4rem] hover:cursor-pointer hover:font-medium">{item.author}</div>
                            <div className="font-medium text-sm">{item.judul}</div>
                        </Link>
                    )
                })
            )
        }
    </div>
    <div className="flex space-x-2 my-4 overflow-x-auto scrollbar-hide md:hidden">
        {
            isLoading ? (
                Array.from({ length: 4}).map((_, i) => {
                    return (
                        <div key={i} className="w-[25%] animate-pulse">
                            <div className="w-full h-52 bg-gray-300 rounded-lg"/>
                            <div className="text-[.6rem] mt-3 mb-1 leading-[.4rem] bg-gray-300 w-[20%] rounded-md">&nbsp;</div>
                            <div className="font-medium text-sm bg-gray-300 w-[50%] rounded-md">&nbsp;</div>
                        </div>
                    )
                })
            ) : (
                datas.slice(0, 4).map((item, indx) => {
                    return (
                        <Link href={`/buku/${item.isbn}`} key={indx} className="w-[25vw] hover:cursor-pointer">
                            <img src={item.cover} alt='cover' className="w-[25vw] h-46"/>
                            <div className="text-[.6rem] mt-3 mb-1 leading-[.4rem] hover:cursor-pointer hover:font-medium">{item.author}</div>
                            <div className="font-medium text-xs">{item.judul}</div>
                        </Link>
                    )
                })
            )
        }
    </div>
    </>
  )
  /*
  return (
    <>
    {
        isLoading ? (
            <div>Loading...</div>
        ) : (
            <div>{data.length}</div>
        )
    }
    </>
  )
  return (
    <>
        <div className="hidden md:flex space-x-3 items-center my-4">
            {
                data.slice(0, 5).map((item, indx) => {
                    return (
                        <div key={indx} className="w-[20vw] hover:scale-105 hover:cursor-pointer click:bg-red-500">
                            <img src={item.cover} className="w-[20vw]"/>
                            <div className="text-[.6rem] mt-3 mb-1 leading-[.4rem] hover:cursor-pointer hover:font-medium">{item.author}</div>
                            <div className="font-medium text-sm">{item.judul}</div>
                        </div>
                    )
                })
            }
        </div>
        <div className="flex space-x-2 my-4 overflow-x-auto scrollbar-hide md:hidden">
            {
                data.slice(0, 4).map((item, indx) => {
                    return (
                        <div key={indx} className="w-[25vw] hover:cursor-pointer">
                            <img src={item.cover} className="w-[25vw]"/>
                            <div className="text-[.6rem] mt-3 mb-1 leading-[.4rem] hover:cursor-pointer hover:font-medium">{item.author}</div>
                            <div className="font-medium text-xs">{item.judul}</div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )*/
}


export default ListBuku