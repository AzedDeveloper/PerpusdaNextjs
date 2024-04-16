import React from 'react'
import { MdSearch } from "react-icons/md";

function Search() {
  return (
    <div className='px-[5%] -my-10 w-screen'>
        <div className="flex flex-col items-center">
            <div className="bg-white shadow-lg flex justify-between w-full md:w-[50%] py-5 px-5 rounded-lg z-10">
            <div>Cari Buku, Penerbit, atau Pencipta</div>
            <MdSearch size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Search