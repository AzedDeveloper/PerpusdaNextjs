import React from 'react'
import Logo from '@/img/logo.webp'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-[#323743] px-[5%] py-5 text-white'>
      <div className='mt-5 flex flex-col md:flex-row'>
        <div className='md:w-[30vw] flex flex-row justify-center md:justify-start md:flex-col space-x-3 md:space-x-0'>
          <Image src={Logo} alt='Logo' className='w-10 h-11' />
          <div className=''>
            <div className='font-light text-sm md:mt-3'>Perpustakaan Digital Arpusda</div>
            <div className='font-bold text-lg md:mb-3'>Wonosobo</div>
          </div>
          <div className='hidden text-sm'>Informasi</div>
          <div className='hidden text-sm'>Pustakawan</div>
        </div>
        <div className='md:w-[50vw] md:mr-20 mt-5 md:mt-0'>
          <div className='font-bold text-lg'>Tentang Kami</div>
          <div className='text-justify mt-2 md:mt-3'>Jl. Pangeran Diponegoro Kelurahan No.2, Wonosobo Timur, Wonosobo Tim., Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah 56311</div>
          <div className='flex'>
            <div className='w-20'>Telepon</div>
            <div className='w-5'>:</div>
            <div>(0286) 324824</div>
          </div>
          <div className='flex'>
            <div className='w-20'>Email</div>
            <div className='w-5'>:</div>
            <div>perpusdawsb@gmail.com</div>
          </div>
          <div className='flex'>
            <div className='w-20'>Website</div>
            <div className='w-5'>:</div>
            <div>arpusda.wonosobokab.go.id</div>
          </div>
          <div className='flex mt-3 space-x-5 justify-end'>
            <div className='md:hidden text-sm'>Informasi</div>
            <div className='md:hidden text-sm'>Pustakawan</div>
          </div>
        </div>
        <div className='md:w-[20vw] mt-3 md:mt-0'>
          <div className='font-bold text-lg'>Hubungi Kami</div>
          <div className='text-sm text-justify mt-2 md:mt-3'>Tidak menemukan buku yang anda cari? Kirim pengajuan buku yang belum tersedia!</div>
          <div className='my-2'>
            <div className='flex'>
              <input className='flex-1 rounded-s-lg text-black px-3' />
              <div className='bg-blue-500 px-6 py-3 rounded-e-lg'>
                <div className='text-sm font-medium'>Kirim</div>
              </div>
            </div>
          </div>
        </div>
        {/*}
        <div className='grid grid-cols-4 flex-1 items-center'>
          <div>
            <Image src={Logo} alt='Logo' className='w-10 h-11' />
          </div>
          <div className='col-span-2'>
            <div className='font-bold text-lg'>Tentang Kami</div>
          </div>
        </div>
        <div className='grid grid-cols-4 flex-1'>
          <div>
            <div className='font-light text-sm mt-3'>Perpustakaan Digital Arpusda</div>
            <div className='font-bold text-lg mb-3'>Wonosobo</div>
            <div className='text-sm'>Informasi</div>
            <div className='text-sm'>Pustakawan</div>
          </div>
          <div className='pr-10 text-sm col-span-2'>
            <div className='text-justify'>Jl. Pangeran Diponegoro Kelurahan No.2, Wonosobo Timur, Wonosobo Tim., Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah 56311</div>
            <div className='flex'>
              <div className='w-20'>Telepon</div>
              <div className='w-5'>:</div>
              <div>(0286) 324824</div>
            </div>
            <div className='flex'>
              <div className='w-20'>Email</div>
              <div className='w-5'>:</div>
              <div>perpusdawsb@gmail.com</div>
            </div>
            <div className='flex'>
              <div className='w-20'>Website</div>
              <div className='w-5'>:</div>
              <div>arpusda.wonosobokab.go.id</div>
            </div>
          </div>
          <div className=''>
            <div className='text-sm text-justify'>Tidak menemukan buku yang anda cari? Kirim pengajuan buku yang belum tersedia!</div>
            <div className='my-2'>
              <div className='flex'>
                <input className='flex-1 rounded-s-lg text-black px-3' />
                <div className='bg-blue-500 px-6 py-3 rounded-e-lg'>
                  <div className='text-sm font-medium'>Kirim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {*/}
      </div>
      <div className='flex justify-between mt-16 text-xs text-gray-500'>
        <div>2024-- XXXXXXXXXX</div>
        <div>Powered by XXXXXXXXXX</div>
      </div>
      {/*}
      <div>
        <Image src={Logo} alt='Logo' className='w-10 h-11' />
        <div className='font-light text-sm mt-3'>Perpustakaan Digital Arpusda</div>
        <div className='font-bold text-lg mb-3'>Wonosobo</div>
      </div>
      <div className='flex-1'>
        <div className='font-bold text-lg'>Tentang Kami</div>
        <div>Jl. Pangeran Diponegoro Kelurahan No.2, Wonosobo Timur, Wonosobo Tim., Kec. Wonosobo, Kabupaten Wonosobo, Jawa Tengah 56311</div>
        <div>Telepon:  (0286) 324824</div>
        <div>Email:  perpusdawsb@gmail.com</div>
        <div>Website :   arpusda.wonosobokab.go.id</div>
      </div>
      {*/}
    </div>
  )
}

export default Footer