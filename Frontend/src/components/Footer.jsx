import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#000014] text-slate-300 py-5">
      <div className="flex justify-center items-center mb-3 gap-6">
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
      </div>
      <hr />
      <p className="text-center">© 2025 Sajid. All rights reserved</p>
    </div>
  );
};

export default Footer;
