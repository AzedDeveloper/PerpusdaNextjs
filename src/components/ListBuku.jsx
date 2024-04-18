import React, { Suspense } from 'react'
import { getData } from '@/lib/data';

const ListBuku = ({populer= false, terbaru=false, all=false}) => {
  const data = populer ? getData().sort((a, b) => a.views - b.views) : terbaru ? getData().sort((a, b) => new Date(b.rilis) - new Date(a.rilis)) : all ? getData() : getData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="hidden md:flex space-x-3 items-center my-4">
            {
                data.slice(0, 5).map((item, indx) => {
                    return (
                        <div key={indx} className="w-[20vw] hover:scale-105 hover:cursor-pointer">
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
    </Suspense>
  )
}


export default ListBuku