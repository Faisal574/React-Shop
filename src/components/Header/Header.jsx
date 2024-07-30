import React, { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Header = () => {

  return (
    <>
      <section className="bg-black w-full h-[auto] sm:h-[35px] sm:py-0 py-4" id="header">
        <div className="container-app">
          <div className="flex flex-col justify-between sm:flex-row items-center h-[auto] sm:h-[35px]">
            <ul className="flex items-center h-[100%] gap-3">
              <li className="text-white text-[12px]">
                <FaPhone />
              </li>
              <li className="text-white text-sm flex items-center h-[100%]"><BiPlus/><span>1235 2355 98</span></li>
            </ul>
            <div className="flex items-center gap-2">
              <MdEmail className="text-white"/> <span className="text-white uppercase text-sm">Faisalafridi574@gmail.com</span>
            </div>
            <div className="">
              <h5 className="text-white uppercase">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
