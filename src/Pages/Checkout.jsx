import React from "react";
import Header from "../components/Header/Header";
import HeroPage from "../components/Hero/HeroPage";
import Footer from "../components/Footer/Footer";
import Cart from "./Cart";
import CartDetail from "../components/Cart/CartDetail";
import Payment from "../components/Payment/Payment";

const Checkout = () => {
  return (
    <>
      <Header />
      <HeroPage heading="Checkout" />
      <section className="bg-[#f8f9fa] w-full h-[auto] py-24">
        <div className="container-app">
          <h2 className="text-[32px] font-medium uppercase">Billing Details</h2>
          <div className="flex flex-col gap-10">
            <form>
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">FirstName</label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="FirstName"
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">LastName</label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="LastName"
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-[100%]">
                  <label className="text-xl">State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                  />
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">Street Addess</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="House Number and Street Number"
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Apartment Suite,Unit etc:(Optional)"
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">Town/City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder=""
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">Zip Code</label>
                    <input
                      type="text"
                      name="Apartment Suite,Unit etc:(Optional)"
                      placeholder=""
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="h-[60px] outline-none bborder-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[50%]">
                    <label className="text-xl">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col sm:flex-row gap-10">
            <CartDetail />
            <Payment />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
