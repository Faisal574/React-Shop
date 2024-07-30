import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HeroPage from "../components/Hero/HeroPage";
import { MdEmail } from "react-icons/md";
import FollowUs from "../components/FollowUs/FollowUs";

const Contact = () => {
  return (
    <>
      <Header />
      <HeroPage heading="Contact" />
      <section className="bg-[#f8f9fa] w-full h-[auto] py-20">
        <div className="container-app">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-[50%] w-[100%] h-[650px]">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    class="gmap_iframe"
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=800&amp;height=650&amp;hl=en&amp;q=Kohi Hassan Khel&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://embed-googlemap.com">embed-googlemap.com</a>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 sm:w-[50%] w-[100%] h-[650px]">
              <form className="flex flex-col gap-8">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="h-[60px] outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                />
                <textarea
                  name="message"
                  className="h-[200px] resize-none outline-none border-gray-200 border-solid border-2 indent-4 text-[18px] bg-gray-100"
                  placeholder="Message"
                ></textarea>
                <button
                  className="sm:w-40 w-[100%] h-14 rounded-xl bg-[#bca543] text-white uppercase border-[#bdb371] hover:bg-[#bdb569] flex justify-center items-center gap-2"
                  type="button"
                >
                  Send <MdEmail className="text-2xl" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <FollowUs />
      <Footer />
    </>
  );
};

export default Contact;
