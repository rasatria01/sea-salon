'use client'

import { useEffect, useState } from "react";
import NavItem from "./navitem";
import logo from "@/public/iso-mono.svg"
import Image from "next/image";


export default function NavBar({ navData }) {
    const [bgNav, setBgNav] = useState(false);
    
    useEffect(() => {
        const changeNavBarColor = () => {
            if (window.scrollY >= 50) {
                setBgNav(true);
                console.log("idup")
            } else {
                setBgNav(false);

            }
        }
        window.addEventListener("scroll", changeNavBarColor);
        return () => window.removeEventListener("scroll",changeNavBarColor);
    })
    return <header className={`${bgNav ? "bg-[#F43E43] " : "bg-transparent"} flex  items-center justify-between h-16 w-full px-12 sticky top-0 left-0 z-50 overflow-hidden`}>
        <Image
            src={logo}
            height={60}
            width={180}
            alt="logo"
        />
        <div >
            <div className='flex items-center justify-end h-8 px-6 gap-2'>
                {navData.map((l, i) =>
                    <NavItem key={i} {...l} />
                )}
            </div>
        </div>
    </header>

}