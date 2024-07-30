import React from "react";

const CartDetail = ({total}) => {
  return (
    <div className="sm:w-[50%] w-[100%] h-[auto] border-gray-600 bg-white mt-8 p-8">
      <h2 className="text-[24px] font-medium uppercase">Cart Total</h2>
      <div className="mt-6">
        <div className="flex justify-between">
          <span className="text-gray-500 text-[20px] font-normal">
           SubTotal
          </span>
          <span className="text-gray-500 text-[20px] font-normal">${total}</span>
        </div>
        <div className="flex justify-between mt-6">
          <span className="text-gray-500 text-[20px] font-normal">
            Shipping
          </span>
          <span className="text-gray-500 text-[20px] font-normal">${total && 10.00}</span>
        </div>
        <div className="flex justify-between mt-6">
          <span className="text-gray-500 text-[20px] font-normal">
            Discount
          </span>
          <span className="text-gray-500 text-[20px] font-normal">${total && 20.00}</span>
        </div>
        <hr className="mt-10" />
        <div className="flex justify-between mt-6">
          <span className="text-gray-500 text-[20px] font-normal">Total</span>
          <span className="text-black text-[20px] font-normal">${total ? total+20+10.00 : 0}</span>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
