import React, { useEffect, useRef, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
import bg1 from "../../assets/images/bg_1.png";
import bg2 from "../../assets/images/bg_2.png";
import bg3 from "../../assets/images/bg_1.jpg";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import useCartQuery from "../../Hooks/query/useCartQuery";

const slides = [
  {
    id: 1,
    title: "Shoes Collection 2019",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo nam accusamus eligendi. Dolor voluptate",
    bgImage: bg1,
  },
  {
    id: 2,
    title: "Shoes Collection 2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo nam accusamus eligendi. Dolor voluptate",
    bgImage: bg3,
  },
  {
    id: 3,
    title: "Shoes Collection 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo nam accusamus eligendi. Dolor voluptate",
    bgImage: bg2,
  }
];

const Hero =() => {

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isSticky, setIsSticky] = useState(false);

   const {count} = useCartQuery();

  const slideInLeft = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    reset: true,
    config: { duration: 1000 },
  });

  const slideInRight = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    reset: true,
    config: { duration: 1000 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const { title, description, bgImage } = slides[currentSlide];

  const animationStyle = currentSlide % 2 === 0 ? slideInLeft : slideInRight;

  return (
    <section className="hero_bg">
      <div className="container-app">
        <div
          className={`${
            isSticky
              ? "fixed top-0 left-0 right-0 px-[150px] bg-white z-[1000] w-full overflow-hidden flex flex-col sm:flex-row justify-between items-center h-[auto] sm:h-[55px]"
              : "flex flex-col sm:flex-row justify-between items-center h-[55px]"
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
                      ? "active uppercase"
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
                      ? "active uppercase"
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
                      ? "active uppercase"
                      : "text-black font-normal text-[16px] uppercase"
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <Link
                  to="/cart"
                  className={`${
                    isSticky
                      ? "bg-[#bfac5a] text-white items-center h-[55px] px-4 cursor-pointer"
                      : ""
                  } text-black font-normal text-[16px] uppercase flex items-center gap-2 cursor-pointer`}
                >
                  <CiShoppingCart className="middle text-2xl" />{" "}
                  <span>[{count}]</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <section className="flex flex-col items-center sm:flex-row sm:justify-center ">
          <animated.div
            className="flex flex-col justify-center w-[70%] mt-[70px]"
            style={currentSlide % 2 === 0 ? slideInLeft : slideInRight}
          >
            <div className="text-white bg-black text-center w-[170px] h-9 flex items-center justify-center px-2">
              # New Arrivals
            </div>
            <h1 className="text-[52px] uppercase font-[400] mt-4 left-3">
              {title}
            </h1>
            <p className="text-[20px] mt-3 leading-7 w-[100%]">{description}</p>
            <a className="w-[170px] bg-[#bfac5a] h-12 flex items-center justify-center px-3 mt-5 text-white">
              Discover Now
            </a>
          </animated.div>
          <animated.div
            className="hero-slide"
            style={{
              backgroundImage: `url(${bgImage})`,
              ...animationStyle,
            }}
          ></animated.div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
