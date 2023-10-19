import React, { useState } from "react";
import { AiOutlineMenu as Menu, AiOutlineClose as Close } from "react-icons/ai";
import CustomButton from "@/ui-components/CustomButton";

type Props = {};

export const Page = (props: Props) => {
  const [nav, setNav] = useState<boolean>(false);
  return (
    <>
      <header className="bg-bcolor">
        <div className="flex justify-between font-Poppins items-center max-w-[1200px] mx-auto h-[84px] px-[24px]">
          <h1 className="text-[22px] font-[600]">
            Course<span className="text-primary">.space</span>
          </h1>
          <ul
            className={`hidden tracking-widest md:flex gap-9 cursor-pointer text-gray-400 leading-[4px] font-semibold `}
          >
            <li>
              <a className="hover:border-b-4 pb-1 rounded-bl-lg rounded-br-2xl hover:border-b-[#FFDD84]">
                Home
              </a>
            </li>
            <li>
              <a className="hover:border-b-4 pb-1 rounded-bl-lg rounded-br-2xl hover:border-b-[#FFDD84]">
                Courses
              </a>
            </li>
            <li>
              <a className="hover:border-b-4 pb-1 rounded-bl-lg rounded-br-2xl hover:border-b-[#FFDD84]">
                Testimonial
              </a>
            </li>
            <li>
              <a className="hover:border-b-4 pb-1 rounded-bl-lg rounded-br-2xl hover:border-b-[#FFDD84]">
                Mentor
              </a>
            </li>
          </ul>
          <div className="flex gap-3">
            <CustomButton className="hidden md:block" variant="outlined">Sign in</CustomButton>
            <CustomButton className="hidden md:block" variant="contained">Sign up</CustomButton>
          </div>
   

          {/* Hamburger */}

          <div
            onClick={() => setNav((prev) => !prev)}
            className="absolute block right-4 md:hidden"
          >
            <Menu size={25} />
          </div>

          {/*  Mobile Menus */}
          <div
            className={`fixed z-30 ${
              nav ? "h-screen" : "h-0"
            } duration-500 flex-row justify-center items-center left-0 top-0 w-full bg-bcolor`}
          >
            <Close
              onClick={() => setNav(false)}
              size={25}
              className={`absolute right-5 top-5 ${!nav && "hidden"}`}
            />
            <div className="absolute w-full bottom-[55%]">
              <ul className="flex flex-col gap-5 -mt-6 text-lg text-center text-slate-500">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
                <li>
                  <a href="">Mentor</a>
                </li>
              </ul>
            </div>
            <div className="absolute flex items-center justify-center w-full h-16 gap-2 bottom-6">
              <button className="px-3 py-2 border-2 rounded-lg border-primary text-primary">
                Sign In
              </button>
              <button className="px-3 py-2 text-white rounded-lg bg-primary">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
