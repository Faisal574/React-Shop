import React from "react";
import ProductList from "../components/FeaturedProduct/ProductList";
import FollowUs from "../components/FollowUs/FollowUs";
import Information from "../components/Information/Information";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="pt-[20px]">
        <Information />
        <ProductList />
        <FollowUs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
