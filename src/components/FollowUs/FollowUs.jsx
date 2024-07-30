import React, { useState } from "react";
import { BiCamera, BiCameraHome } from "react-icons/bi";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { BsCameraReels } from "react-icons/bs";

const slides = [
  {
    src: "../../src/assets/images/gallery-1.jpg",
  },
  {
    src: "../../src/assets/images/gallery-2.jpg",
  },
  {
    src: "../../src/assets/images/gallery-3.jpg",
  },
  {
    src: "../../src/assets/images/gallery-4.jpg",
  },
  {
    src: "../../src/assets/images/gallery-5.jpg",
  },
  {
    src: "../../src/assets/images/gallery-6.jpg",
  },
];

const FollowUs = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index)
    setOpen(true);
  };

  return (
    <section className="bg-white pt-24">
      <div className="container">
        <h1 className="text-[42px] font-medium text-center">
          Follow us on Instagram
        </h1>
        <p className="text-center font-normal text-2xl text-gray-400 pt-3 pb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit fuga
          eligendi dolores?
        </p>
      </div>
      {slides.map((item, index) => (
        <div className="gallery float-left" key={index}>
          <div
            onClick={()=>handleImageClick(index)}
            className="view-img w-[80px] h-[80px] cursor-pointer opacity-0 bg-[#bfac5a] flex justify-center items-center rounded-full"
          >
            <BiCameraHome className="text-white text-3xl text-center" />
          </div>
          <img
            src={item.src}
            className="gallery-img sm:w-[263px] sm:h-[350px] w-[100%] object-cover cursor-pointer"
          />
        </div>
      ))}
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={slides}
          plugins={[Zoom, Captions]}
          zoom={{ maxZoomPixelRatio: 3 }}
          captions={{ captionText: (slide) => slide.alt }}
          on={{
            view: ({ index }) => setCurrentIndex(index),
            next: ({ index }) => setCurrentIndex(index),
            prev: ({ index }) => setCurrentIndex(index),
          }}
        />
      )}
    </section>
  );
};

export default FollowUs;
