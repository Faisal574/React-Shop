import React from "react";
import { GrOrderedList } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Payment = () => {
  return (
    <div className="sm:w-[50%] w-[100%] h-[auto] border-gray-600 bg-white mt-8 p-8">
      <h2 className="text-[24px] font-medium uppercase">Payment Method</h2>
      <div className="flex items-center gap-4 mt-5">
        <input type="radio" name="stripe" className="w-6 h-6" />
        <h4 className="text-xl font-normal ">Stipe</h4>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <input type="radio" name="paypal" className="w-6 h-6" />
        <h4 className="text-xl font-normal ">Paypal</h4>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <input type="radio" name="cod" className="w-6 h-6" />
        <h4 className="text-xl font-normal ">COD</h4>
      </div>
      <div className="flex items-center gap-4 mt-5">
        <input type="checkbox" className="w-5 h-5 ml-1" />
        <h4 className="text-xl font-normal text-gray-500">
          I have read and accept the terms and conditions
        </h4>
      </div>
      <hr className="mt-6" />
      <NavLink
        to="/order"
        className="w-full mt-8 h-14 rounded-xl bg-[#bca543] text-white border-[#bdb371] hover:bg-[#a09634] flex justify-center items-center gap-2"
        type="button"
      >
        Place an Order <GrOrderedList className="text-white text-2xl" />
      </NavLink>
    </div>
  );
};

export default Payment;
