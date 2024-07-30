import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const Information = () => {
  return (
    <section className="w-full bg-white h-[auto] py-[60px] transition-all">
      <div className="container-app">
        <div className="flex flex-col sm:flex-row sm:flex-grow gap-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <FaShippingFast className="text-[#bfac5a] text-[90px] text-center" />
            <h4 className="text-xl font-[700]">Free Shipping</h4>
            <p className="text-xl text-justify leading-8 space-x-4 text-pretty text-gray-600 w-[75%] sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              neque iste accusantium quidem perferendis eius et officia sit.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <BiSupport className="text-[#bfac5a] text-[90px] text-center" />
            <h4 className="text-xl font-[700]">Customer Support</h4>
            <p className="text-xl text-justify leading-8 space-x-4 text-pretty text-gray-600 w-[75%] sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              neque iste accusantium quidem perferendis eius et officia sit.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <RiSecurePaymentFill className="text-[#bfac5a] text-[90px] text-center" />
            <h4 className="text-xl font-[700]">Secure Payment</h4>
            <p className="text-xl text-justify leading-8 space-x-4 text-pretty text-gray-600 w-[75%] sm:w-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              neque iste accusantium quidem perferendis eius et officia sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
