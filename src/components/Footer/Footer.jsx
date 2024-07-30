import React from "react";
import { BiMap, BiPhoneCall } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsMailbox } from "react-icons/bs";
import { GrSkype } from "react-icons/gr";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="bg-[#090909] overflow-hidden h-[auto] w-full pt-20 pb-20">
      <div className="container-app">
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="w-[680px]">
            <h2 className="text-white text-2xl tracking-wider">Minishop</h2>
            <p className="text-gray-300 text-[16px] font-[500] leading-8 pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quod
              dolorum distinctio ut est asperiores officiis quasi quae quibusdam
              consequatur?
            </p>
            <div className="flex gap-5 pt-10">
              <div className="w-[65px] h-[60px] rounded-full bg-[#bfac5a] hover:bg-[#bca543] cursor-pointer transition-all flex justify-center items-center">
                <GrSkype className="text-white text-2xl" />
              </div>
              <div className="w-[65px] h-[60px] rounded-full bg-[#bfac5a] hover:bg-[#bca543] cursor-pointer transition-all flex justify-center items-center">
                <BsFacebook className="text-white text-2xl" />
              </div>
              <div className="w-[60px] h-[60px] rounded-full bg-[#bfac5a] hover:bg-[#bca543] cursor-pointer transition-all flex justify-center items-center">
                <BsInstagram className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="w-[480px]">
            <h2 className="text-white text-2xl tracking-wider">Menu</h2>
            <ul className="flex  gap-6 mt-4">
              <li className="text-gray-300 text-xl">
                <a>Shop</a>
              </li>
              <li className="text-gray-300 text-xl">
                <a>About</a>
              </li>
              <li className="text-gray-300 text-xl">
                <a>Journal</a>
              </li>
              <li className="text-gray-300 text-xl">
                <a>Contactus</a>
              </li>
            </ul>
          </div>
          <div className="w-[380px]">
            <h2 className="text-white text-2xl tracking-wider">
              Have a Questions?
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 mt-4">
                <BiMap className="text-white text-2xl" />
                <span className="text-white text-[17px] text-wrap">
                  Kohi Hassan Kheil Sub Division Peshawar
                </span>
              </div>
   
              <div className="flex gap-4 mt-4">
                <BiPhoneCall className="text-white text-2xl" />
                <span className="text-white text-[17px] text-wrap">
                +2 392 3929 210
                </span>
              </div>

              <div className="flex gap-4 mt-4">
                <MdEmail className="text-white text-2xl" />
                <span className="text-white text-[17px] text-wrap">
                info@yourdomain.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-12 border-gray-500 h-1"/>
        <h4 className="text-gray-300 border-gray-600 text-sm font-medium mt-4 text-center">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</h4>
      </div>
    </section>
  );
};

export default Footer;
