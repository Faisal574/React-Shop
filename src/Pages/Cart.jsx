import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import HeroPage from "../components/Hero/HeroPage";
import Footer from "../components/Footer/Footer";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import CartItem from "../components/Cart/CartItem";
import CartDetail from "../components/Cart/CartDetail";
import { IoBagCheckOutline } from "react-icons/io5";
import useCartQuery from "../Hooks/query/useCartQuery";

const Cart = () => {
  const { data, isLoading } = useCartQuery();

  return (
    <>
      <Header />
      <HeroPage heading="Cart" />
      <section className="bg-[#f8f9fa] w-full h-[auto] py-24">
        <div className="container-app">
          <div className="overflow-x-auto sm:overflow-x-hidden">
            {data ? <CartItem data={data?.data?.data} />:<h4 className="text-center text-[24px] font-semibold w-[100%]">Your Cart is Empty Go The Shop Section</h4>}
          </div>
          {data && <CartDetail total={data?.data?.total} />}
          {data && <div className="flex flex-col sm:flex-row mt-6 gap-5">
            <NavLink
              to="/checkout"
              className="sm:w-40 w-[100%] h-14 rounded-xl bg-black flex justify-center items-center gap-2 text-white border-gray-600 hover:bg-[#a09634]"
              type="button"
            >
              Checkout <IoBagCheckOutline className="text-white text-2xl" />
            </NavLink>
            <NavLink
              to="/shop"
              className="sm:w-40 w-[100%] h-14 rounded-xl bg-[#bca543] text-white border-[#bdb371] hover:bg-[#a09634] flex justify-center items-center gap-2"
              type="button"
            >
              Continue <CiShoppingCart className="text-white text-2xl" />
            </NavLink>
          </div>}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;
