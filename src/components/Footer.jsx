"use client"
import React from 'react'
import Logo from '@/img/logo.webp'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-[#323743] px-[5%] py-5 text-white'>
      <div className='mt-5 flex flex-col md:flex-row'>
        <div className='md:w-[25%] flex flex-row justify-center md:justify-start md:flex-col space-x-3 md:space-x-0'>
          <Image src={Logo} alt='Logo' className='w-10 h-11' />
          <div className=''>
            <div className='font-light text-sm md:mt-3'>Perpustakaan Digital Arpusda</div>
            <div className='font-bold text-lg md:mb-3'>Wonosobo</div>
          </div>
          <div className='hidden md:flex text-sm'>
            <div className='hover:text-blue-500 hover:cursor-pointer'>Informasi</div>
          </div>
          <div className='hidden md:flex text-sm hover:text-blue-500 hover:cursor-pointer'>
            <div className='hover:text-blue-500 hover:cursor-pointer'>Pustakawan</div>
          </div>
        </div>
        <div className='md:w-[50%] md:mr-20 mt-5 md:mt-0'>
          <div className='font-bold md:text-lg'>Tentang Kami</div>
          <div className='text-justify mt-2 md:mt-3 text-xs md:text-base'>Jl. Pangeran Diponegoro Kelurahan No.2, Wonosobo Timur, Wonosobo Tim., Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah 56311</div>
          <div className='flex text-xs'>
            <div className='w-20'>Telepon</div>
            <div className='w-5'>:</div>
            <div>(0286) 324824</div>
          </div>
          <div className='flex text-xs'>
            <div className='w-20'>Email</div>
            <div className='w-5'>:</div>
            <div onClick={() => window.open('mailto:perpusdawsb@gmail.com')} className='hover:text-blue-500 hover:cursor-pointer'>perpusdawsb@gmail.com</div>
          </div>
          <div className='flex text-xs'>
            <div className='w-20'>Website</div>
            <div className='w-5'>:</div>
            <div>arpusda.wonosobokab.go.id</div>
          </div>
          <div className='flex mt-3 space-x-5 justify-end'>
            <div className='md:hidden text-sm font-semibold hover:text-blue-500 hover:cursor-pointer'>Informasi</div>
            <div className='md:hidden text-sm font-semibold hover:text-blue-500 hover:cursor-pointer'>Pustakawan</div>
          </div>
        </div>
        <div className='md:w-[25%] mt-3 md:mt-0'>
          <div className='font-bold md:text-lg'>Hubungi Kami</div>
          <div className='text-xs md:text-sm text-justify mt-2 md:mt-3'>Tidak menemukan buku yang anda cari? Kirim pengajuan buku yang belum tersedia!</div>
          <div className='w-full mt-3'>
            <div className='flex'>
              <div className='bg-white flex flex-1 rounded-s-lg text-black'>
                <input className='w-[100%] px-2 rounded-s-lg focus:outline-none'/>
              </div>
              <div className='bg-blue-500 hover:bg-blue-700 hover:cursor-pointer px-6 py-3 rounded-e-lg'>
                <div className='text-xs font-medium'>Kirim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between mt-16 text-xs text-gray-500'>
        <div>2024-- XXXXXXXXXX</div>
        <div>Powered by XXXXXXXXXX</div>
      </div>
    </div>
  )
}

export default Footer