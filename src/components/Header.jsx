"use client"
import React, { useEffect, useState } from 'react'
import Logo from '@/img/logo.webp'
import Image from 'next/image'
import { MdPerson } from 'react-icons/md'
import { AnimatePresence, motion, useMotionValueEvent } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import pages from '@/utils/Pages'
import Scroll from '../controller/Scroll'
import { useBetween } from 'use-between';

const useSharedScroll = () => useBetween(Scroll);

const ItemHeader = ({name, link}) => {
    const path = usePathname();

    return <Link href={link} className={path == link ? 'font-black' : 'hover:font-black hover:cursor-pointer'}>
        {name}
    </Link>
}

const ItemHeaderMobile = ({name, link, setMenu}) => {
    const path = usePathname();
    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    }

    return <div>
        <Link href={link} onClick={() => setMenu(false)}>
            <motion.li variants={item} className={path == link ? 'text-4xl font-black' : 'text-4xl hover:font-black hover:cursor-pointer'}>{name}</motion.li>
        </Link>
        <div className='h-[.1rem] w-full bg-gray-300 mt-3'></div>
    </div>
}

const Header = () => {
  const [menu, setMenu] = useState(false);
  const {pos} = useSharedScroll();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
      
  return (
    <motion.div animate={{height: menu ? '100vh' : 'auto', backgroundColor: pos > 20 ? "rgb(255, 255, 255)" : menu ? "rgb(255, 255, 255)" : "rgba(0, 0, 0, 0)"}} className={'fixed px-5 md:px-10 py-3 z-50 w-full '+(pos > 20 && 'shadow-lg')}>
        <div className='flex justify-between items-center w-full'>
            <div className='flex space-x-3 items-center'>
                <Image src={Logo} alt='Logo' className='w-8 h-9'/>
                <div className='md:flex'>
                    <motion.div animate={{color: pos > 20 ? 'black' : menu ? 'black' : 'white'}} className='text-white text-xs md:text-lg'>Perpusda Digital Arpusda&nbsp;</motion.div>
                    <motion.div animate={{color: pos > 20 ? 'black' : menu ? 'black' : 'white'}} className='text-white font-black md:font-bold text-sm md:text-lg'>Wonosobo</motion.div>
                </div>
            </div>
            <div className={'hidden md:flex space-x-5 font-light text-sm items-center '+(pos > 20 ? 'text-black' : 'text-white')}>
                {
                    pages().map((page, index) => (
                        <ItemHeader key={index} name={page.name} link={page.link} />       
                    ))
                }
                <motion.div initial={{color: 'black', backgroundColor: 'white'}} animate={{color: pos > 20 ? 'white' : 'black', backgroundColor: pos > 20 ? 'black' : 'white'}} className='w-8 h-8 rounded-full justify-center items-center flex'>
                    <MdPerson className='w-6 h-6'/>
                </motion.div>
            </div>
            <div className='md:hidden flex bg-white w-8 h-8 justify-center items-center rounded-full'>
                <svg onClick={() => setMenu(!menu)} viewBox='0 0 23 23' className='w-4 h-4 md:hidden'>
                    <motion.path 
                        animate={menu ? 'open' : 'closed'}
                        d='M 2 2.5 L 2 5 L 24 5 L 24 2.5' 
                        fill='black'
                        variants={{
                            closed: { d: "M 2 2.5 L 2 5 L 24 5 L 24 2.5" },
                            open: { d: "M 2 16.346 L 2 19 L 24 5 L 24 2.5" }
                    }}/>
                    <motion.path animate={{opacity: menu ? 0 : 1}} d='M 2 9.423 L 2 12 L 24 12 L 24 9.423' fill='black'/>
                    <motion.path 
                        animate={menu ? 'open' : 'closed'}
                        d='M 2 16.346 L 2 19 L 24 19 L 24 16.346' 
                        fill='black'
                        variants={{
                            closed: { d: "M 2 16.346 L 2 19 L 24 19 L 24 16.346" },
                            open: { d: "M 2 2.5 L 2 5 L 24 19 L 24 16.346" }
                    }}/>
                </svg>
            </div>
        </div>
        {
            menu && (
                <div className='md:hidden pt-5 h-full flex flex-col'>
                    <motion.ul variants={container} initial="hidden" animate="show" className='space-y-3'>
                        {
                            pages().map((page, index) => (
                                <ItemHeaderMobile key={index} name={page.name} link={page.link} setMenu={setMenu} />       
                            ))
                        }
                        <div className='rounded-lg border-2 border-gray-200 mt-3 p-5 flex items-center space-x-3'>
                            <div className='bg-black w-10 h-10 flex justify-center items-center rounded-full'>
                                <MdPerson className='text-white w-6 h-6'/>
                            </div>
                            <div>
                                <div className='font-medium'>Miftahulzen Al Asyari</div>
                            </div>
                            <div className='flex-1 flex justify-end'>
                                <div className='text-white font-medium bg-blue-500 px-5 py-2 rounded-lg hover:cursor-pointer'>Profil</div>
                            </div>
                        </div>
                    </motion.ul>
                </div>
            )
        }
    </motion.div>
  )
}

export default Header