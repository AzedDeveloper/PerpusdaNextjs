"use client"
import React, { useState } from 'react'
import { MdViewCompact } from "react-icons/md";
import imgCompact from "@/img/compact.png";
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValueEvent } from 'framer-motion'
import { getData, getDataKategori } from '@/lib/data';
import useSwr from 'swr';
import { BASE_API_URL } from '@/utils/constants';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Kategori = () => {
  const [modal, setModal] = useState(false);
  const { data, error, isLoading } = useSwr(`${BASE_API_URL}/api/v1/kategori`, fetcher);
  
  return (
    <>
    <div className="hidden md:flex space-x-3 justify-center my-4">
      {
        isLoading ? (
          <>
            {
              Array.from({ length: 5 }, (_, i) => i).map((i) => (
                <div key={i} className="flex flex-col items-center justify-center space-y-2 w-32 md:p-5 rounded-lg md:border-2 bg-gray-300 animate-pulse">
                  <div className='py-3 px-3 border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                    <div className="w-5 h-5 md:w-8 md:h-8"/>
                  </div>
                  <div className="text-sm md:font-bold text-center">&nbsp;</div>
                </div>
              ))
            }
          </>
        ) : (
          <>
            {
              data.length > 5 ? (
                <>
                {
                  data.data.slice(0,4).map((item, indx) => {
                    return <div key={indx} className="flex flex-col hover:scale-110 items-center justify-center space-y-2 w-32 md:p-5 rounded-lg md:border-2 hover:cursor-pointer">
                      <div className='py-3 px-3 border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                        <img src={item.logo} alt='icon' className="w-5 md:w-8" />
                      </div>
                      <div className="text-sm md:font-bold text-center">{item.nama}</div>
                    </div>
                  })
                }
                <div onClick={() => setModal(true)} className="flex flex-col hover:scale-110 items-center justify-center space-y-2 w-32 md:p-5 rounded-lg md:border-2 hover:cursor-pointer">
                  <div className='py-3 px-3 border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                    <Image src={imgCompact} alt='icon' className="w-5 md:w-8 fill-black" />
                  </div>
                  <div className="text-sm md:font-bold">Semua</div>
                </div>
                </>
              ) : (
                <>
                {
                  data.data.map((item, indx) => {
                    return <div key={indx} className="flex flex-col items-center justify-center space-y-2 px-0 md:py-5 md:px-7 rounded-lg border-2 hover:cursor-pointer">
                      <img src={item.logo} alt='icon' className="w-5 md:w-8" />
                      <div className="text-sm font-bold">{item.nama}</div>
                    </div>
                  })
                }
                </>
              )
            }
          </>
        )
      }
    </div>
    <div className="flex space-x-1 my-4 overflow-x-auto scrollbar-hide md:hidden">
      {
        isLoading ? (
          <>
            {
              Array.from({ length: 4 }, (_, i) => i).map((i) => (
                <div key={i} className='flex flex-col items-center space-y-2 px-2 min-w-[22vw]'>
                  <div className='py-3 px-3 flex border-2 rounded-lg md:border-0 md:py-0 md:px-0 bg-gray-300 animate-pulse'>
                    <div className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-center bg-gray-300 w-full rounded-md animate-pulse">&nbsp;</div>
                </div>
              ))
            }
          </>
        ) : (
          <>
          {
            data.data.map((item, indx) => {
              return <div key={indx} className='flex flex-col items-center space-y-2 px-2 min-w-[22vw]'>
                <div className='py-3 px-3 flex border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                  <img src={item.logo} alt='icon' className="w-5 md:w-8" />
                </div>
                <div className="text-xs text-center">{item.nama}</div>
              </div>
            })
          }
          </>
        )
      }
    </div>
    {
      modal && (
        <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50'>
          <div onClick={() => setModal(false)} className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50' />
          <div className='bg-white z-[60] p-5 rounded-lg'>
            <div className='font-bold mb-3'>Semua Topik</div>
            <div className='grid grid-cols-4 gap-4'>
              {
                data.data.map((item, indx) => {
                  return <div key={indx} className="flex flex-col hover:scale-110 items-center justify-center space-y-2 w-32 md:p-5 rounded-lg md:border-2 hover:cursor-pointer">
                    <div className='py-3 px-3 border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                      <img src={item.logo} className="w-5 md:w-8" />
                    </div>
                    <div className="text-sm md:font-bold text-center">{item.nama}</div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      )
    }
    </>
  ) 
}

export default Kategori