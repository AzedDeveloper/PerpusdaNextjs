import React from 'react'
import { MdViewCompact } from "react-icons/md";
import imgCompact from "@/img/compact.png";
import Image from 'next/image'
import { AnimatePresence, motion, useMotionValueEvent } from 'framer-motion'

const Kategori = ({data}) => {
  return (
    <>
    <div className="hidden md:flex space-x-3 justify-center my-4">
        {
          data.length > 5 ? (
            <>
            {
              data.slice(3).map((item, indx) => {
                return <div key={indx} className="flex flex-col hover:scale-110 items-center justify-center space-y-2 w-32 md:p-5 rounded-lg md:border-2 hover:cursor-pointer">
                  <div className='py-3 px-3 border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                    <img src={item.logo} className="w-5 md:w-8" />
                  </div>
                  <div className="text-sm md:font-bold text-center">{item.nama}</div>
                </div>
              })
            }
            <div className="flex flex-col hover:scale-110 items-center justify-center space-y-2 w-32 md:p-5 rounded-lg md:border-2 hover:cursor-pointer">
              <div className='py-3 px-3 border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
                <Image src={imgCompact} className="w-5 md:w-8 fill-black" />
              </div>
              <div className="text-sm md:font-bold">Lainnya</div>
            </div>
            </>
          ) : (
            <>
            {
              data.map((item, indx) => {
                return <div key={indx} className="flex flex-col items-center justify-center space-y-2 px-0 md:py-5 md:px-7 rounded-lg border-2 hover:cursor-pointer">
                  <img src={item.logo} className="w-5 md:w-8" />
                  <div className="text-sm font-bold">{item.nama}</div>
                </div>
              })
            }
            </>
          )
        }
    </div>
    <div className="flex space-x-1 my-4 overflow-x-auto scrollbar-hide md:hidden">
      {
        data.map((item, indx) => {
          return <div key={indx} className='flex flex-col items-center space-y-2 px-2 min-w-[22vw]'>
            <div className='py-3 px-3 flex border-2 rounded-lg md:border-0 md:py-0 md:px-0'>
              <img src={item.logo} className="w-5 md:w-8" />
            </div>
            <div className="text-xs text-center">{item.nama}</div>
          </div>
        })
      }
    </div>
    </>
  )
}

export default Kategori