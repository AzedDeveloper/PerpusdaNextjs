"use client"
import React, { useCallback, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import Scroll from "../controller/Scroll";
import { useBetween } from "use-between";
const inter = Inter({ subsets: ["latin"] });
const useSharedScroll = () => useBetween(Scroll);

function Body({children}) {
    const ref = useRef();
    const { setPos } = useSharedScroll();

    const handleScroll = useCallback(() => {
        setPos(ref.current.scrollTop);
    }, []);
  
    useEffect(() => {
        const div = ref.current;
        div.addEventListener("scroll", handleScroll)
    }, [handleScroll])
  
    return <body ref={ref} className={inter.className}>
        {children}
    </body>;
}

export default Body