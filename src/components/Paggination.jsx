import React from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Paggination = ({data, itemsPage}) => {
  const urlParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const paggination = (_option) => {
    const newParams = new URLSearchParams(urlParams.toString());
    if(_option == "next"){
        if(newParams.has("page")){
            if(urlParams.get("page") < Math.ceil(data.length/5)){
                newParams.set("page", parseInt(urlParams.get("page")) + 1);
                router.push(`${pathName}?${newParams.toString()}`);
            }
        }else{
            if(Math.ceil(data.length/5) > 1){
                newParams.set("page", 2);
                router.push(`${pathName}?${newParams.toString()}`);
            }
        }
    }else if(_option == "prev"){
        if(urlParams.get("page") > 1){
            if(urlParams.get("page") - 1 == 1){
                newParams.delete("page");
            }else{
                newParams.set("page", parseInt(urlParams.get("page")) - 1);
            }
            router.push(`${pathName}?${newParams.toString()}`);
        }
    }else if(_option == "first"){
        newParams.delete("page");
        router.push(`${pathName}?${newParams.toString()}`);
    }else if(_option == "last"){
        newParams.set("page", Math.ceil(data.length/5));
        router.push(`${pathName}?${newParams.toString()}`);
    }
  }

  const countIndex = (_option) => {
    if(_option == "end"){
        if(urlParams.has("page")){
            if(parseInt(urlParams.get("page")) == Math.ceil(data.length/5)){
                return data.length;
            }else{
                return (itemsPage * parseInt(urlParams.get("page")));
            }
        }else{
            if(Math.ceil(data.length/5) == 1){
                return data.length;
            }else{
                return (itemsPage * 1);
            }
        }
    }else if(_option == "start"){
        if(urlParams.has("page")){
            return (itemsPage * parseInt(urlParams.get("page")))-4;
        }else{
            return 1;
        }
    }
  }
  
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
        <div className='hidden md:flex text-[.6rem] md:text-sm'><b>{countIndex("start")} - {countIndex("end")}</b>&nbsp;dari&nbsp;<b>{data.length}</b>&nbsp;buku ditemukan</div>
        <div className='flex space-x-2'>
            <div onClick={() => paggination("first")} className='border-2 border-blue-200 hover:bg-blue-500 hover:text-white hover:cursor-pointer flex justify-center items-center p-2 rounded-lg'>
                <MdKeyboardDoubleArrowLeft className='size-3 md:size-4' />
            </div>
            <div onClick={() => paggination("prev")} className='border-2 border-blue-200 hover:bg-blue-500 hover:text-white hover:cursor-pointer flex justify-center items-center p-2 rounded-lg'>
                <MdKeyboardArrowLeft className='size-3 md:size-4' />
            </div>
            <div className='border-2 border-blue-200 bg-blue-500 text-white flex justify-center items-center py-1 px-5 rounded-lg'>
                <div className='text-xs md:text-base font-bold'>{urlParams.has("page") ? urlParams.get("page") : 1}</div>
            </div>
            <div className='flex items-center'>
                <div className='text-xs md:text-sm'>dari <strong>{Math.ceil(data.length/5)}</strong></div>
            </div>
            <div onClick={() => paggination("next")} className='border-2 border-blue-200 hover:bg-blue-500 hover:text-white hover:cursor-pointer flex justify-center items-center p-2 rounded-lg'>
                <MdKeyboardArrowRight className='size-3 md:size-4' />
            </div>
            <div onClick={() => paggination("last")} className='border-2 border-blue-200 hover:bg-blue-500 hover:text-white hover:cursor-pointer flex justify-center items-center p-2 rounded-lg'>
                <MdKeyboardDoubleArrowRight className='size-3 md:size-4' />
            </div>
        </div>
        <div className='flex md:hidden mt-3 text-[.6rem] md:text-sm'><b>{countIndex("start")} - {countIndex("end")}</b>&nbsp;dari&nbsp;<b>{data.length}</b>&nbsp;buku ditemukan</div>
    </div>
  )
}

export default Paggination