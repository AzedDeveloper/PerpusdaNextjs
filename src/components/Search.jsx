'use client'
import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';

function Search() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  return (
    <>
    <div className='px-[5%] -my-10 w-screen'>
        <div className="flex flex-col items-center">
            <div className="hidden md:flex bg-white shadow-lg items-center space-x-5 justify-between w-full md:w-[50%] py-5 px-5 rounded-lg z-10">
              <input className='w-full focus:outline-none' placeholder='Cari Buku, Penerbit, atau Pencipta'/>
              <MdSearch size={25}/>
            </div>
            <div onClick={() => setSearchOpen(!isSearchOpen)} className="md:hidden flex bg-white shadow-lg items-center space-x-5 justify-between w-full md:w-[50%] py-5 px-5 rounded-lg z-10">
              <div className='w-full text-gray-400'>Cari Buku, Penerbit, atau Pencipta</div>
              <MdSearch size={25}/>
            </div>
        </div>
    </div>
    <AnimatePresence>
      {
        isSearchOpen && (
          <motion.div initial={{opacity: 0, x: '-100vw'}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: '-100vw'}} transition={{type: 'tween', duration: 0.1}} className='absolute bg-white h-screen w-screen top-0 z-50 p-5'>
            <div className='flex space-x-5 items-center'>
              <svg onClick={() => setSearchOpen(!isSearchOpen)} viewBox='0 0 23 23' className='w-4 h-4 md:hidden'>
                <path
                  d='M 2 16.346 L 2 19 L 24 5 L 24 2.5' 
                  fill='black'/>
                <path 
                  d='M 2 2.5 L 2 5 L 24 19 L 24 16.346' 
                  fill='black'/>
              </svg>
              <div className='flex flex-1 space-x-5 px-5 py-3 rounded-lg border'>
                <input autoFocus className='w-full focus:outline-none' placeholder='Cari Buku, Penerbit, atau Pencipta' />
                <MdSearch size={25}/>
              </div>
            </div>
          </motion.div>   
        )
      }
    </AnimatePresence>
    </>
  )
}

export default Search