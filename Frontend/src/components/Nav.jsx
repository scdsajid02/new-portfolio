import React, { useState } from "react";
import small from "../../assets/small.jpeg";
const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-[#1B365D] text-white px-3 py-2  md:px-[5%] flex justify-between items-center min-w-full z-50 sm:fixed">
      <div className=" text-4xl font-extrabold bg-gradient-to-r from-orange-600 to-fuchsia-600 bg-clip-text text-transparent inline-block">
        <a href="#home">SAJID</a>
      </div>
      <div className="hidden sm:flex gap-5 text-sm">
        <a href="#home" className="">
          <p className="hover:text-slate-300 text-base">HOME</p>
        </a>
        <a href="#about" className="">
          <p className="hover:text-slate-300 text-base">ABOUT</p>
        </a>
        <a href="#education" className="">
          <p className="hover:text-slate-300 text-base">EDUCATION</p>
        </a>
        <a href="#projects" className="">
          <p className="hover:text-slate-300 text-base">PROJECTS</p>
        </a>
        <a href="#contact" className="">
          <p className="hover:text-slate-300 text-base">CONTACT</p>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <a href="#education">
            <img src={small} alt="" className="w-10 rounded-full h-10" />
            <div className="dot"></div>
          </a>
        </div>

        <div className="sm:hidden">
          <img
            onClick={() => setMenu(true)}
            src="https://cdn.pixabay.com/photo/2021/10/09/12/45/hamburger-icon-6694072_1280.png"
            alt=""
            className="w-5"
          />
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 min-h-screen overflow-hidden bg-[#1B365D] transition-all ${
          menu ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          <div
            onClick={() => setMenu(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646214_1280.png"
              alt=""
              className="h-4 rotate-180"
            />
            <p className="text-base">Back</p>
          </div>
          <a
            href="#home"
            onClick={() => setMenu(false)}
            className="py-2 pl-6 border-b border-slate-500"
          >
            <p className="hover:text-slate-300">HOME</p>
          </a>
          <a
            href="#about"
            onClick={() => setMenu(false)}
            className="py-2 pl-6 border-b border-slate-500"
          >
            <p className="hover:text-slate-300">ABOUT</p>
          </a>
          <a
            href="#education"
            onClick={() => setMenu(false)}
            className="py-2 pl-6 border-b border-slate-500"
          >
            <p className="hover:text-slate-300">EDUCATION</p>
          </a>
          <a
            href="#projects"
            onClick={() => setMenu(false)}
            className="py-2 pl-6 border-b border-slate-500"
          >
            <p className="hover:text-slate-300">PROJECTS</p>
          </a>
          <a
            href="#contact"
            onClick={() => setMenu(false)}
            className="py-2 pl-6 border-b border-slate-500"
          >
            <p className="hover:text-slate-300">CONTACT</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
