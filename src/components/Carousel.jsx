"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useAnimationControls, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation';

const Carousel = () => {
  const data = [
    "https://hypeabis.id/assets/content/202210171401041665990064_crop.jpg",//putih
    "https://pijarsekolah.id/wp-content/uploads/2021/12/perpus-1024x576.jpg",//buku
    "https://duniaperpustakaan.com/wp-content/uploads/2010/08/fungi-perpustakaan-1023x525.jpg"//bae
  ];
  const [[imageIndex1, imageIndex2, imageIndex3, x1, x2, x3, direction], setImageCarousel] = React.useState([0%data.length, 1%data.length, 2%data.length, 0, 1, 2, 0]);
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const pathName = usePathname();
  const width = typeof window !== 'undefined' && window.innerWidth;
  const slide = (_direction) => {
    controls1.start({
      x: _direction == 0 ? x1 == 2 ? "100%" : x1 == 1 ? 0 : "200%" : x1 == 0 ? "100%" : x1 == 1 ? "200%" : 0,
      opacity: _direction == 0 ? x1 == 2 ? 1 : 0 : x1 == 0 ? 1 : 0
    });
    controls2.start({
      x: _direction == 0 ? x2 == 2 ? 0 : x2 == 1 ? "-100%" : "100%" : x2 == 0 ? 0 : x2 == 1 ? "100%" : "-100%",
      opacity: _direction == 0 ? x2 == 2 ? 1 : 0 : x2 == 0 ? 1 : 0
    });
    controls3.start({
      x: _direction == 0 ? x3 == 2 ? "-100%" : x3 == 1 ? "-200%" : 0 : x3 == 0 ? "-100%" : x3 == 1 ? 0 : "-200%",
      opacity: _direction == 0 ? x3 == 2 ? 1 : 0 : x3 == 0 ? 1 : 0
    });
    setImageCarousel([
      _direction == 0 ? x1-1==-1?(imageIndex1+3)%data.length:imageIndex1 : x1+1==3?(imageIndex1+1)%data.length:imageIndex1, 
      _direction == 0 ? x2-1==-1?(imageIndex2+3)%data.length:imageIndex2 : x2+1==3?(imageIndex2+1)%data.length:imageIndex2, 
      _direction == 0 ? x3-1==-1?(imageIndex3+3)%data.length:imageIndex3 : x3+1==3?(imageIndex3+1)%data.length:imageIndex3, 
      _direction == 0 ? x1-1==-1?2:x1-1 : x1+1==3?0:x1+1, 
      _direction == 0 ? x2-1==-1?2:x2-1 : x2+1==3?0:x2+1, 
      _direction == 0 ? x3-1==-1?2:x3-1 : x3+1==3?0:x3+1, 
      _direction
    ]);
  }
  
  useEffect(() => {
    if(ref1){
      setTimeout(() => {
        slide(direction);
      }, 3000);
    }
  }, [x1]);

  return (
    <>
    <motion.div animate={{height: pathName == "/" ? width >= 768 ? 384 : 200 : width >= 768 ? 200 : 200}} className={pathName == "/" ? 'flex justify-center w-screen overflow-x-hidden md:h-96 h-[200px]' : "flex justify-center w-screen overflow-x-hidden h-[200px]"}>
      <motion.img 
        ref={ref1}
        key={1}
        src={data[imageIndex1]}
        animate={controls1}
        initial={{x: "-100%", opacity: 0}}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, i) => {i.offset.x<0?slide(0):slide(1)}}
        className="min-w-full left-0 object-cover"/>
      <motion.img 
        ref={ref2}
        key={2}
        src={data[imageIndex2]}
        animate={controls2}
        initial={{x: 0}}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, i) => {i.offset.x<0?slide(0):slide(1)}}
        className="min-w-full left-0 object-cover"/>
      <motion.img 
        ref={ref3}
        key={3}
        src={data[imageIndex3]}
        animate={controls3}
        initial={{x: "100%"}}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, i) => {i.offset.x<0?slide(0):slide(1)}}
        className="min-w-full left-0 object-cover"/>
    </motion.div>
    </>
  )
}

export default Carousel