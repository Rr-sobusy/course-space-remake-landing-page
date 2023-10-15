"use client";

import React , { useState}from "react";
import { AiOutlineMenu as Menu, AiOutlineClose as Close} from 'react-icons/ai'

type Props = {};

export const Page = (props: Props) => {
    const [nav,setNav] = useState<boolean>(false)
  return (
    <>
      {" "}
      <header className="flex justify-between items-center max-w-[1200px] mx-auto h-[84px] bg-[#F9FBFC] px-[24px]">
        <h1 className="text-[22px] font-[600]">
          Course<span className="text-[#127C71]">space</span>
        </h1>
        <ul className={`hidden md:flex gap-9 text-slate-500 `}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
          <li>
            <a href="">Mentor</a>
          </li>
        </ul>
        <div className="hidden md:flex gap-3 ">
          <button className="px-3 leading-5 py-2 hover:shadow-md border-2 border-[#127C71] rounded-lg text-[#127C71]">
            Sign In
          </button>
          <button className="px-3 leading-5y-2 hover:shadow-md bg-[#127C71] rounded-lg text-white">
            Sign Up p
          </button>
        </div>

        {/* Hamburger */}

        <div onClick={()=>setNav(prev=>!prev)} className="absolute right-4 block md:hidden">
          <Menu size={25} />
        </div>

        {/*  Mobile Menus */}
        <div className={`absolute ${nav ? 'flex': 'hidden'} flex-row justify-center items-center left-0 top-0 h-screen w-full bg-white`}>
          <Close onClick={()=>setNav(false)} size={25} className="absolute right-5 top-5" />
          <ul className="gap-5 flex flex-col text-center -mt-6 text-slate-500 text-lg">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a href="">REsources</a>
            </li>
            <li>
              <a href="">Mentor</a>
            </li>
          </ul>
          <div className="absolute bottom-6 h-16 w-full flex justify-center items-center gap-2">
            <button className="px-3 py-2 border-2 border-[#127C71] rounded-lg text-[#127C71]">Sign In</button>
            <button className="px-3 py-2 bg-[#127C71] rounded-lg text-white">Sign Up</button>
          </div>
        </div>
      </header>
    </>
  );
};
