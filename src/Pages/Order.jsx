import React from "react";
import Header from "../components/Header/Header";
import HeroPage from "../components/Hero/HeroPage";
import Footer from "../components/Footer/Footer";

const Order = () => {
  return (
    <>
      <Header />
      <HeroPage heading="Order" />
      <section className="bg-[#f8f9fa] w-full h-[auto] py-24">
        <div className="container-app"></div>
      </section>
      <Footer/>
    </>
  );
};

export default Order;
