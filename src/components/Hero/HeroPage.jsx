import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import useCartQuery from "../../Hooks/query/useCartQuery";

const HeroPage = ({heading}) => {
  const [isSticky, setIsSticky] = useState(false);

  const {count} = useCartQuery();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="hero_bg_page">
      <div className="container-app">
        <div
          className={`${
            isSticky
              ? "fixed top-0 left-0 right-0 px-[150px] bg-white z-[1000] w-full overflow-hidden flex flex-col sm:flex-row justify-between items-center h-[auto] sm:h-[55px]"
              : "flex flex-col sm:flex-row justify-between items-center h-[auto] sm:h-[55px]"
          }`}
        >
          <div className="">
            <h4 className="font-bold text-black text-2xl">MiniShop</h4>
          </div>
          <nav id="menu">
            <ul className="flex items-center gap-12">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    isActive
                      ? "active"
                      : "text-black font-normal text-[16px] uppercase"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive, isPending, isTransitioning }) =>
                    isActive
                      ? "active"
                      : "text-black font-normal text-[16px] uppercase"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending, isTransitioning }) =>
                    isActive
                      ? "active uppercase"
                      : "text-black font-normal text-[16px] uppercase"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact"
                  className={({ isActive, isPending, isTransitioning }) =>
                    isActive
                      ? "active"
                      : "text-black font-normal text-[16px] uppercase"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
              <Link to="/cart" className={`${isSticky ? "bg-[#bfac5a] text-white items-center h-[55px] px-4 cursor-pointer" : ""} text-black font-normal text-[16px] uppercase flex items-center gap-2 cursor-pointer`}>
                  <CiShoppingCart className="middle text-2xl" /> <span>[{count}]</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 h-[100%]">
         <div className="flex gap-4">
            <NavLink to="/" className="text-[18px] text-gray-500 font-normal">Home</NavLink>/
            <NavLink className="text-[18px] text-gray-500 font-normal">{heading}</NavLink>
         </div>
         <h1 className="text-black font-bold text-[36px] text-center uppercase">{heading}</h1>
      </div>
    </section>
  );
};

export default HeroPage;
